# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsListQueryParams;
import org.openapis.openapi.models.operations.ServiceusageOperationsListRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsListRequest req = new ServiceusageOperationsListRequest() {{
                security = new ServiceusageOperationsListSecurity() {{
                    option1 = new ServiceusageOperationsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new ServiceusageOperationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    filter = "nulla";
                    key = "corrupti";
                    name = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            ServiceusageOperationsListResponse res = sdk.operations.serviceusageOperationsList(req);

            if (res.listOperationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### operations

* `serviceusageOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### services

* `serviceusageServicesBatchEnable` - Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
* `serviceusageServicesConsumerQuotaMetricsImportAdminOverrides` - Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `serviceusageServicesConsumerQuotaMetricsImportConsumerOverrides` - Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* `serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreate` - Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
* `serviceusageServicesConsumerQuotaMetricsLimitsAdminOverridesList` - Lists all admin overrides on this limit.
* `serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreate` - Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
* `serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDelete` - Deletes a consumer override.
* `serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesList` - Lists all consumer overrides on this limit.
* `serviceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatch` - Updates a consumer override.
* `serviceusageServicesConsumerQuotaMetricsLimitsGet` - Retrieves a summary of quota information for a specific quota limit.
* `serviceusageServicesConsumerQuotaMetricsList` - Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
* `serviceusageServicesDisable` - Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
* `serviceusageServicesEnable` - Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
* `serviceusageServicesGenerateServiceIdentity` - Generates service identity for service.
* `serviceusageServicesList` - Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

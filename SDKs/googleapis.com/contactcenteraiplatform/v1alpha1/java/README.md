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

import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreatePathParams;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse;
import org.openapis.openapi.models.shared.ContactCenterInput;
import org.openapis.openapi.models.shared.URIs;
import org.openapis.openapi.models.shared.SAMLParams;
import org.openapis.openapi.models.shared.InstanceConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.AdminUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest() {{
                security = new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ContactcenteraiplatformProjectsLocationsContactCentersCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    contactCenterId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new ContactCenterInput() {{
                    adminUser = new AdminUser() {{
                        familyName = "magnam";
                        givenName = "debitis";
                    }};
                    ccaipManagedUsers = false;
                    customerDomainPrefix = "ipsa";
                    displayName = "delectus";
                    instanceConfig = new InstanceConfig() {{
                        instanceSize = "STANDARD_SMALL";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    name = "iusto";
                    samlParams = new SAMLParams() {{
                        certificate = "excepturi";
                        entityId = "nisi";
                        ssoUri = "recusandae";
                        userEmail = "temporibus";
                    }};
                    uris = new URIs() {{
                        chatBotUri = "ab";
                        mediaUri = "quis";
                        rootUri = "veritatis";
                        virtualAgentStreamingServiceUri = "deserunt";
                    }};
                    userEmail = "perferendis";
                }};
            }};            

            ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `contactcenteraiplatformProjectsLocationsContactCentersCreate` - Creates a new ContactCenter in a given project and location.
* `contactcenteraiplatformProjectsLocationsContactCentersList` - Lists ContactCenters in a given project and location.
* `contactcenteraiplatformProjectsLocationsContactCentersPatch` - Updates the parameters of a single ContactCenter.
* `contactcenteraiplatformProjectsLocationsList` - Lists information about the supported locations for this service.
* `contactcenteraiplatformProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `contactcenteraiplatformProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `contactcenteraiplatformProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `contactcenteraiplatformProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `contactcenteraiplatformProjectsLocationsQueryContactCenterQuota` - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

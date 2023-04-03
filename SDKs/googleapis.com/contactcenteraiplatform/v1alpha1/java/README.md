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
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactCenterInput;
import org.openapis.openapi.models.shared.URIs;
import org.openapis.openapi.models.shared.SAMLParams;
import org.openapis.openapi.models.shared.InstanceConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.AdminUser;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest() {{
                dollarXgafv = "2";
                contactCenterInput = new ContactCenterInput() {{
                    adminUser = new AdminUser() {{
                        familyName = "provident";
                        givenName = "distinctio";
                    }};
                    ccaipManagedUsers = false;
                    customerDomainPrefix = "quibusdam";
                    displayName = "unde";
                    instanceConfig = new InstanceConfig() {{
                        instanceSize = "STANDARD_3XLARGE";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("illum", "vel");
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    name = "magnam";
                    samlParams = new SAMLParams() {{
                        certificate = "debitis";
                        entityId = "ipsa";
                        ssoUri = "delectus";
                        userEmail = "tempora";
                    }};
                    uris = new URIs() {{
                        chatBotUri = "suscipit";
                        mediaUri = "molestiae";
                        rootUri = "minus";
                        virtualAgentStreamingServiceUri = "placeat";
                    }};
                    userEmail = "voluptatum";
                }};
                accessToken = "iusto";
                alt = "media";
                callback = "nisi";
                contactCenterId = "recusandae";
                fields = "temporibus";
                key = "ab";
                oauthToken = "quis";
                parent = "veritatis";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "perferendis";
                uploadType = "ipsam";
                uploadProtocol = "repellendus";
            }}            

            ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersCreate(req, new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

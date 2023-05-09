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
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;
import org.openapis.openapi.models.shared.AdminUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactCenterInput;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.InstanceConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.SAMLParams;
import org.openapis.openapi.models.shared.URIs;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                contactCenterInput = new ContactCenterInput() {{
                    adminUser = new AdminUser() {{
                        familyName = "distinctio";
                        givenName = "quibusdam";
                    }};;
                    ccaipManagedUsers = false;
                    customerDomainPrefix = "unde";
                    displayName = "nulla";
                    instanceConfig = new InstanceConfig() {{
                        instanceSize = InstanceConfigInstanceSizeEnum.STANDARD_LARGE;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    name = "Ricky Hoppe";
                    samlParams = new SAMLParams() {{
                        certificate = "placeat";
                        entityId = "voluptatum";
                        ssoUri = "iusto";
                        userEmail = "excepturi";
                    }};;
                    uris = new URIs() {{
                        chatBotUri = "nisi";
                        mediaUri = "recusandae";
                        rootUri = "temporibus";
                        virtualAgentStreamingServiceUri = "ab";
                    }};;
                    userEmail = "quis";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                contactCenterId = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                requestId = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersCreate(req, new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity("molestiae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [contactcenteraiplatformProjectsLocationsContactCentersCreate](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterscreate) - Creates a new ContactCenter in a given project and location.
* [contactcenteraiplatformProjectsLocationsContactCentersList](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterslist) - Lists ContactCenters in a given project and location.
* [contactcenteraiplatformProjectsLocationsContactCentersPatch](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterspatch) - Updates the parameters of a single ContactCenter.
* [contactcenteraiplatformProjectsLocationsList](docs/projects/README.md#contactcenteraiplatformprojectslocationslist) - Lists information about the supported locations for this service.
* [contactcenteraiplatformProjectsLocationsOperationsCancel](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [contactcenteraiplatformProjectsLocationsOperationsDelete](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [contactcenteraiplatformProjectsLocationsOperationsGet](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [contactcenteraiplatformProjectsLocationsOperationsList](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [contactcenteraiplatformProjectsLocationsQueryContactCenterQuota](docs/projects/README.md#contactcenteraiplatformprojectslocationsquerycontactcenterquota) - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse;
import org.openapis.openapi.models.operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest req = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse res = sdk.projects.connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(req, new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity("suscipit", "molestiae") {{
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

* [connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh](docs/projects/README.md#connectorsprojectslocationsconnectionsconnectionschemametadatarefresh) - Refresh runtime schema of a connection.
* [connectorsProjectsLocationsConnectionsCreate](docs/projects/README.md#connectorsprojectslocationsconnectionscreate) - Creates a new Connection in a given project and location.
* [connectorsProjectsLocationsConnectionsList](docs/projects/README.md#connectorsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [connectorsProjectsLocationsConnectionsRuntimeActionSchemasList](docs/projects/README.md#connectorsprojectslocationsconnectionsruntimeactionschemaslist) - List schema of a runtime actions filtered by action name.
* [connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList](docs/projects/README.md#connectorsprojectslocationsconnectionsruntimeentityschemaslist) - List schema of a runtime entities filtered by entity name.
* [connectorsProjectsLocationsEndpointAttachmentsCreate](docs/projects/README.md#connectorsprojectslocationsendpointattachmentscreate) - Creates a new EndpointAttachment in a given project and location.
* [connectorsProjectsLocationsEndpointAttachmentsList](docs/projects/README.md#connectorsprojectslocationsendpointattachmentslist) - List EndpointAttachments in a given project
* [connectorsProjectsLocationsGlobalManagedZonesCreate](docs/projects/README.md#connectorsprojectslocationsglobalmanagedzonescreate) - Creates a new ManagedZone in a given project and location.
* [connectorsProjectsLocationsGlobalManagedZonesList](docs/projects/README.md#connectorsprojectslocationsglobalmanagedzoneslist) - List ManagedZones in a given project
* [connectorsProjectsLocationsGlobalManagedZonesPatch](docs/projects/README.md#connectorsprojectslocationsglobalmanagedzonespatch) - Updates the parameters of a single ManagedZone.
* [connectorsProjectsLocationsList](docs/projects/README.md#connectorsprojectslocationslist) - Lists information about the supported locations for this service.
* [connectorsProjectsLocationsOperationsCancel](docs/projects/README.md#connectorsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [connectorsProjectsLocationsOperationsDelete](docs/projects/README.md#connectorsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [connectorsProjectsLocationsOperationsList](docs/projects/README.md#connectorsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [connectorsProjectsLocationsProvidersConnectorsList](docs/projects/README.md#connectorsprojectslocationsprovidersconnectorslist) - Lists Connectors in a given project and location.
* [connectorsProjectsLocationsProvidersConnectorsVersionsGet](docs/projects/README.md#connectorsprojectslocationsprovidersconnectorsversionsget) - Gets details of a single connector version.
* [connectorsProjectsLocationsProvidersConnectorsVersionsList](docs/projects/README.md#connectorsprojectslocationsprovidersconnectorsversionslist) - Lists Connector Versions in a given project and location.
* [connectorsProjectsLocationsProvidersGetIamPolicy](docs/projects/README.md#connectorsprojectslocationsprovidersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [connectorsProjectsLocationsProvidersList](docs/projects/README.md#connectorsprojectslocationsproviderslist) - Lists Providers in a given project and location.
* [connectorsProjectsLocationsProvidersSetIamPolicy](docs/projects/README.md#connectorsprojectslocationsproviderssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [connectorsProjectsLocationsProvidersTestIamPermissions](docs/projects/README.md#connectorsprojectslocationsproviderstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

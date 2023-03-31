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

import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreatePathParams;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectionsCreateRequest req = new BeyondcorpProjectsLocationsAppConnectionsCreateRequest() {{
                security = new BeyondcorpProjectsLocationsAppConnectionsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BeyondcorpProjectsLocationsAppConnectionsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new BeyondcorpProjectsLocationsAppConnectionsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    appConnectionId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                    validateOnly = false;
                }};
                request = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput() {{
                    applicationEndpoint = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint() {{
                        host = "magnam";
                        port = 891773;
                    }};
                    connectors = new String[]{{
                        add("delectus"),
                    }};
                    displayName = "tempora";
                    gateway = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput() {{
                        appGateway = "suscipit";
                        type = "TYPE_UNSPECIFIED";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                        put("nisi", "recusandae");
                        put("temporibus", "ab");
                    }};
                    name = "quis";
                    type = "TYPE_UNSPECIFIED";
                }};
            }};            

            BeyondcorpProjectsLocationsAppConnectionsCreateResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectionsCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
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

* `beyondcorpProjectsLocationsAppConnectionsCreate` - Creates a new AppConnection in a given project and location.
* `beyondcorpProjectsLocationsAppConnectionsList` - Lists AppConnections in a given project and location.
* `beyondcorpProjectsLocationsAppConnectionsResolve` - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* `beyondcorpProjectsLocationsAppConnectorsCreate` - Creates a new AppConnector in a given project and location.
* `beyondcorpProjectsLocationsAppConnectorsList` - Lists AppConnectors in a given project and location.
* `beyondcorpProjectsLocationsAppConnectorsReportStatus` - Report status for a given connector.
* `beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig` - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* `beyondcorpProjectsLocationsAppGatewaysCreate` - Creates a new AppGateway in a given project and location.
* `beyondcorpProjectsLocationsAppGatewaysList` - Lists AppGateways in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesCreate` - Creates a new ClientConnectorService in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesList` - Lists ClientConnectorServices in a given project and location.
* `beyondcorpProjectsLocationsClientConnectorServicesPatch` - Updates the parameters of a single ClientConnectorService.
* `beyondcorpProjectsLocationsClientGatewaysCreate` - Creates a new ClientGateway in a given project and location.
* `beyondcorpProjectsLocationsClientGatewaysGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `beyondcorpProjectsLocationsClientGatewaysList` - Lists ClientGateways in a given project and location.
* `beyondcorpProjectsLocationsClientGatewaysSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `beyondcorpProjectsLocationsClientGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `beyondcorpProjectsLocationsList` - Lists information about the supported locations for this service.
* `beyondcorpProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `beyondcorpProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `beyondcorpProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `beyondcorpProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

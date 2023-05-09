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
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse;
import org.openapis.openapi.models.operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput;
import org.openapis.openapi.models.shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BeyondcorpProjectsLocationsAppConnectionsCreateRequest req = new BeyondcorpProjectsLocationsAppConnectionsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudBeyondcorpAppconnectionsV1AppConnectionInput = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput() {{
                    applicationEndpoint = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint() {{
                        host = "distinctio";
                        port = 844266;
                    }};;
                    connectors = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    displayName = "vel";
                    gateway = new GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput() {{
                        appGateway = "error";
                        type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum.GCP_REGIONAL_MIG;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    name = "Ricky Hoppe";
                    type = GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnum.TCP_PROXY;
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                appConnectionId = "excepturi";
                callback = "nisi";
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                requestId = "veritatis";
                uploadType = "deserunt";
                uploadProtocol = "perferendis";
                validateOnly = false;
            }};            

            BeyondcorpProjectsLocationsAppConnectionsCreateResponse res = sdk.projects.beyondcorpProjectsLocationsAppConnectionsCreate(req, new BeyondcorpProjectsLocationsAppConnectionsCreateSecurity("ipsam", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
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

* [beyondcorpProjectsLocationsAppConnectionsCreate](docs/projects/README.md#beyondcorpprojectslocationsappconnectionscreate) - Creates a new AppConnection in a given project and location.
* [beyondcorpProjectsLocationsAppConnectionsList](docs/projects/README.md#beyondcorpprojectslocationsappconnectionslist) - Lists AppConnections in a given project and location.
* [beyondcorpProjectsLocationsAppConnectionsResolve](docs/projects/README.md#beyondcorpprojectslocationsappconnectionsresolve) - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* [beyondcorpProjectsLocationsAppConnectorsCreate](docs/projects/README.md#beyondcorpprojectslocationsappconnectorscreate) - Creates a new AppConnector in a given project and location.
* [beyondcorpProjectsLocationsAppConnectorsList](docs/projects/README.md#beyondcorpprojectslocationsappconnectorslist) - Lists AppConnectors in a given project and location.
* [beyondcorpProjectsLocationsAppConnectorsPatch](docs/projects/README.md#beyondcorpprojectslocationsappconnectorspatch) - Updates the parameters of a single AppConnector.
* [beyondcorpProjectsLocationsAppConnectorsReportStatus](docs/projects/README.md#beyondcorpprojectslocationsappconnectorsreportstatus) - Report status for a given connector.
* [beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig](docs/projects/README.md#beyondcorpprojectslocationsappconnectorsresolveinstanceconfig) - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* [beyondcorpProjectsLocationsAppGatewaysCreate](docs/projects/README.md#beyondcorpprojectslocationsappgatewayscreate) - Creates a new AppGateway in a given project and location.
* [beyondcorpProjectsLocationsAppGatewaysList](docs/projects/README.md#beyondcorpprojectslocationsappgatewayslist) - Lists AppGateways in a given project and location.
* [beyondcorpProjectsLocationsClientGatewaysGetIamPolicy](docs/projects/README.md#beyondcorpprojectslocationsclientgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [beyondcorpProjectsLocationsClientGatewaysSetIamPolicy](docs/projects/README.md#beyondcorpprojectslocationsclientgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [beyondcorpProjectsLocationsClientGatewaysTestIamPermissions](docs/projects/README.md#beyondcorpprojectslocationsclientgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [beyondcorpProjectsLocationsList](docs/projects/README.md#beyondcorpprojectslocationslist) - Lists information about the supported locations for this service.
* [beyondcorpProjectsLocationsOperationsCancel](docs/projects/README.md#beyondcorpprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [beyondcorpProjectsLocationsOperationsDelete](docs/projects/README.md#beyondcorpprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [beyondcorpProjectsLocationsOperationsGet](docs/projects/README.md#beyondcorpprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [beyondcorpProjectsLocationsOperationsList](docs/projects/README.md#beyondcorpprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

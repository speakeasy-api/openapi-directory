# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/beyondcorp/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput{
            ApplicationEndpoint: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint{
                Host: "provident",
                Port: 715190,
            },
            Connectors: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            DisplayName: "vel",
            Gateway: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput{
                AppGateway: "error",
                Type: "GCP_REGIONAL_MIG",
            },
            Labels: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: "delectus",
            Type: "TYPE_UNSPECIFIED",
        },
        AccessToken: "suscipit",
        Alt: "media",
        AppConnectionID: "minus",
        Callback: "placeat",
        Fields: "voluptatum",
        Key: "iusto",
        OauthToken: "excepturi",
        Parent: "nisi",
        PrettyPrint: false,
        QuotaUser: "recusandae",
        RequestID: "temporibus",
        UploadType: "ab",
        UploadProtocol: "quis",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectionsCreate(ctx, req, operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `BeyondcorpProjectsLocationsAppConnectionsCreate` - Creates a new AppConnection in a given project and location.
* `BeyondcorpProjectsLocationsAppConnectionsList` - Lists AppConnections in a given project and location.
* `BeyondcorpProjectsLocationsAppConnectionsResolve` - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* `BeyondcorpProjectsLocationsAppConnectorsCreate` - Creates a new AppConnector in a given project and location.
* `BeyondcorpProjectsLocationsAppConnectorsList` - Lists AppConnectors in a given project and location.
* `BeyondcorpProjectsLocationsAppConnectorsReportStatus` - Report status for a given connector.
* `BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig` - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* `BeyondcorpProjectsLocationsAppGatewaysCreate` - Creates a new AppGateway in a given project and location.
* `BeyondcorpProjectsLocationsAppGatewaysList` - Lists AppGateways in a given project and location.
* `BeyondcorpProjectsLocationsClientConnectorServicesCreate` - Creates a new ClientConnectorService in a given project and location.
* `BeyondcorpProjectsLocationsClientConnectorServicesList` - Lists ClientConnectorServices in a given project and location.
* `BeyondcorpProjectsLocationsClientConnectorServicesPatch` - Updates the parameters of a single ClientConnectorService.
* `BeyondcorpProjectsLocationsClientGatewaysCreate` - Creates a new ClientGateway in a given project and location.
* `BeyondcorpProjectsLocationsClientGatewaysGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `BeyondcorpProjectsLocationsClientGatewaysList` - Lists ClientGateways in a given project and location.
* `BeyondcorpProjectsLocationsClientGatewaysSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `BeyondcorpProjectsLocationsClientGatewaysTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `BeyondcorpProjectsLocationsList` - Lists information about the supported locations for this service.
* `BeyondcorpProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `BeyondcorpProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `BeyondcorpProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `BeyondcorpProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

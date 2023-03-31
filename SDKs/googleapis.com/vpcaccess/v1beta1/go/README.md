# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/vpcaccess/v1beta1/go
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

    req := operations.VpcaccessProjectsLocationsConnectorsCreateRequest{
        DollarXgafv: "2",
        ConnectorInput: &shared.ConnectorInput{
            IPCidrRange: "provident",
            MachineType: "distinctio",
            MaxInstances: 844266,
            MaxThroughput: 602763,
            MinInstances: 857946,
            MinThroughput: 544883,
            Name: "illum",
            Network: "vel",
            Subnet: &shared.Subnet{
                Name: "error",
                ProjectID: "deserunt",
            },
        },
        AccessToken: "suscipit",
        Alt: "media",
        Callback: "magnam",
        ConnectorID: "debitis",
        Fields: "ipsa",
        Key: "delectus",
        OauthToken: "tempora",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "minus",
        UploadProtocol: "placeat",
    }

    ctx := context.Background()
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsCreate(ctx, req, operations.VpcaccessProjectsLocationsConnectorsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `VpcaccessProjectsLocationsConnectorsCreate` - Creates a Serverless VPC Access connector, returns an operation.
* `VpcaccessProjectsLocationsConnectorsDelete` - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* `VpcaccessProjectsLocationsConnectorsList` - Lists Serverless VPC Access connectors.
* `VpcaccessProjectsLocationsConnectorsPatch` - Updates a Serverless VPC Access connector, returns an operation.
* `VpcaccessProjectsLocationsList` - Lists information about the supported locations for this service.
* `VpcaccessProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `VpcaccessProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

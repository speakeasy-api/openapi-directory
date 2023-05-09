# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/vpcaccess/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.VpcaccessProjectsLocationsConnectorsCreate(ctx, operations.VpcaccessProjectsLocationsConnectorsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectorInput: &shared.ConnectorInput{
            IPCidrRange: sdk.String("provident"),
            MachineType: sdk.String("distinctio"),
            MaxInstances: sdk.Int(844266),
            MaxThroughput: sdk.Int(602763),
            MinInstances: sdk.Int(857946),
            MinThroughput: sdk.Int(544883),
            Name: sdk.String("Ben Mueller"),
            Network: sdk.String("iure"),
            Subnet: &shared.Subnet{
                Name: sdk.String("Raquel Bednar"),
                ProjectID: sdk.String("suscipit"),
            },
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        ConnectorID: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
    }, operations.VpcaccessProjectsLocationsConnectorsCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [VpcaccessProjectsLocationsConnectorsCreate](docs/projects/README.md#vpcaccessprojectslocationsconnectorscreate) - Creates a Serverless VPC Access connector, returns an operation.
* [VpcaccessProjectsLocationsConnectorsDelete](docs/projects/README.md#vpcaccessprojectslocationsconnectorsdelete) - Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
* [VpcaccessProjectsLocationsConnectorsList](docs/projects/README.md#vpcaccessprojectslocationsconnectorslist) - Lists Serverless VPC Access connectors.
* [VpcaccessProjectsLocationsConnectorsPatch](docs/projects/README.md#vpcaccessprojectslocationsconnectorspatch) - Updates a Serverless VPC Access connector, returns an operation.
* [VpcaccessProjectsLocationsList](docs/projects/README.md#vpcaccessprojectslocationslist) - Lists information about the supported locations for this service.
* [VpcaccessProjectsLocationsOperationsGet](docs/projects/README.md#vpcaccessprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [VpcaccessProjectsLocationsOperationsList](docs/projects/README.md#vpcaccessprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

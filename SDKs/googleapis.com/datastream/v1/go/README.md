# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastream/v1/go
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
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            DisplayName: sdk.String("vel"),
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: sdk.String("physical-pegboard.info"),
                Password: sdk.String("iure"),
                Port: sdk.Int(297534),
                PrivateKey: sdk.String("debitis"),
                Username: sdk.String("Anahi38"),
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: sdk.String("molestiae"),
                RootPath: sdk.String("minus"),
            },
            Labels: map[string]string{
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: sdk.String("bountiful-pension.com"),
                Password: sdk.String("ipsam"),
                Port: sdk.Int(832620),
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: sdk.String("sapiente"),
                    ClientCertificate: sdk.String("quo"),
                    ClientKey: sdk.String("odit"),
                },
                Username: sdk.String("Sarah.Strosin79"),
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "esse": "totam",
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
                DatabaseService: sdk.String("fugit"),
                Hostname: sdk.String("miserly-usage.net"),
                Password: sdk.String("totam"),
                Port: sdk.Int(105907),
                Username: sdk.String("Haskell18"),
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: sdk.String("impedit"),
                Hostname: sdk.String("several-increase.biz"),
                Password: sdk.String("excepturi"),
                Port: sdk.Int(135218),
                Username: sdk.String("Aiden.Hane"),
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: sdk.String("iste"),
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "natus": "laboriosam",
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        ConnectionProfileID: sdk.String("in"),
        Fields: sdk.String("corporis"),
        Force: sdk.Bool(false),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("iure"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        RequestID: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
        ValidateOnly: sdk.Bool(false),
    }, operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity{
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

* [DatastreamProjectsLocationsConnectionProfilesCreate](docs/projects/README.md#datastreamprojectslocationsconnectionprofilescreate) - Use this method to create a connection profile in a project and location.
* [DatastreamProjectsLocationsConnectionProfilesDiscover](docs/projects/README.md#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* [DatastreamProjectsLocationsConnectionProfilesList](docs/projects/README.md#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [DatastreamProjectsLocationsFetchStaticIps](docs/projects/README.md#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [DatastreamProjectsLocationsList](docs/projects/README.md#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [DatastreamProjectsLocationsOperationsCancel](docs/projects/README.md#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatastreamProjectsLocationsOperationsList](docs/projects/README.md#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatastreamProjectsLocationsPrivateConnectionsCreate](docs/projects/README.md#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [DatastreamProjectsLocationsPrivateConnectionsList](docs/projects/README.md#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [DatastreamProjectsLocationsPrivateConnectionsRoutesCreate](docs/projects/README.md#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity configuration in a project and location.
* [DatastreamProjectsLocationsPrivateConnectionsRoutesList](docs/projects/README.md#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity configuration in a project and location.
* [DatastreamProjectsLocationsStreamsCreate](docs/projects/README.md#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [DatastreamProjectsLocationsStreamsDelete](docs/projects/README.md#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [DatastreamProjectsLocationsStreamsList](docs/projects/README.md#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [DatastreamProjectsLocationsStreamsObjectsGet](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [DatastreamProjectsLocationsStreamsObjectsList](docs/projects/README.md#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [DatastreamProjectsLocationsStreamsObjectsLookup](docs/projects/README.md#datastreamprojectslocationsstreamsobjectslookup) - Use this method to look up a stream object by its source object identifier.
* [DatastreamProjectsLocationsStreamsObjectsStartBackfillJob](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Use this method to start a backfill job for the specified stream object.
* [DatastreamProjectsLocationsStreamsObjectsStopBackfillJob](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Use this method to stop a backfill job for the specified stream object.
* [DatastreamProjectsLocationsStreamsPatch](docs/projects/README.md#datastreamprojectslocationsstreamspatch) - Use this method to update the configuration of a stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

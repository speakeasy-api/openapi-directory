# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datastream/v1alpha1/go
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
            DisplayName: sdk.String("provident"),
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: sdk.String("salty-stag.name"),
                Password: sdk.String("nulla"),
                Port: sdk.Int(544883),
                PrivateKey: sdk.String("illum"),
                Username: sdk.String("Henry.Mueller"),
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: sdk.String("iure"),
                RootPath: sdk.String("magnam"),
            },
            Labels: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: sdk.String("lawful-missionary.info"),
                Password: sdk.String("recusandae"),
                Port: sdk.Int(836079),
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: sdk.String("ab"),
                    ClientCertificate: sdk.String("quis"),
                    ClientKey: sdk.String("veritatis"),
                },
                Username: sdk.String("Lydia_Aufderhar"),
            },
            NoConnectivity: map[string]interface{}{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "totam": "porro",
                    "dolorum": "dicta",
                },
                DatabaseService: sdk.String("nam"),
                Hostname: sdk.String("posh-muffin.com"),
                Password: sdk.String("deleniti"),
                Port: sdk.Int(944669),
                Username: sdk.String("Nina41"),
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: sdk.String("molestiae"),
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "qui": "impedit",
                "cum": "esse",
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        ConnectionProfileID: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("sed"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        RequestID: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
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
* [DatastreamProjectsLocationsConnectionProfilesDiscover](docs/projects/README.md#datastreamprojectslocationsconnectionprofilesdiscover) - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
* [DatastreamProjectsLocationsConnectionProfilesList](docs/projects/README.md#datastreamprojectslocationsconnectionprofileslist) - Use this method to list connection profiles created in a project and location.
* [DatastreamProjectsLocationsFetchStaticIps](docs/projects/README.md#datastreamprojectslocationsfetchstaticips) - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* [DatastreamProjectsLocationsList](docs/projects/README.md#datastreamprojectslocationslist) - Lists information about the supported locations for this service.
* [DatastreamProjectsLocationsOperationsCancel](docs/projects/README.md#datastreamprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatastreamProjectsLocationsOperationsList](docs/projects/README.md#datastreamprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatastreamProjectsLocationsPrivateConnectionsCreate](docs/projects/README.md#datastreamprojectslocationsprivateconnectionscreate) - Use this method to create a private connectivity configuration.
* [DatastreamProjectsLocationsPrivateConnectionsList](docs/projects/README.md#datastreamprojectslocationsprivateconnectionslist) - Use this method to list private connectivity configurations in a project and location.
* [DatastreamProjectsLocationsPrivateConnectionsRoutesCreate](docs/projects/README.md#datastreamprojectslocationsprivateconnectionsroutescreate) - Use this method to create a route for a private connectivity in a project and location.
* [DatastreamProjectsLocationsPrivateConnectionsRoutesList](docs/projects/README.md#datastreamprojectslocationsprivateconnectionsrouteslist) - Use this method to list routes created for a private connectivity in a project and location.
* [DatastreamProjectsLocationsStreamsCreate](docs/projects/README.md#datastreamprojectslocationsstreamscreate) - Use this method to create a stream.
* [DatastreamProjectsLocationsStreamsDelete](docs/projects/README.md#datastreamprojectslocationsstreamsdelete) - Use this method to delete a stream.
* [DatastreamProjectsLocationsStreamsFetchErrors](docs/projects/README.md#datastreamprojectslocationsstreamsfetcherrors) - Use this method to fetch any errors associated with a stream.
* [DatastreamProjectsLocationsStreamsList](docs/projects/README.md#datastreamprojectslocationsstreamslist) - Use this method to list streams in a project and location.
* [DatastreamProjectsLocationsStreamsObjectsGet](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsget) - Use this method to get details about a stream object.
* [DatastreamProjectsLocationsStreamsObjectsList](docs/projects/README.md#datastreamprojectslocationsstreamsobjectslist) - Use this method to list the objects of a specific stream.
* [DatastreamProjectsLocationsStreamsObjectsStartBackfillJob](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsstartbackfilljob) - Starts backfill job for the specified stream object.
* [DatastreamProjectsLocationsStreamsObjectsStopBackfillJob](docs/projects/README.md#datastreamprojectslocationsstreamsobjectsstopbackfilljob) - Stops the backfill job for the specified stream object.
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

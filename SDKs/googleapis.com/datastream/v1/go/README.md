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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest{
        DollarXgafv: "2",
        ConnectionProfileInput: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            DisplayName: "vel",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "physical-pegboard.info",
                Password: "iure",
                Port: 297534,
                PrivateKey: "debitis",
                Username: "Anahi38",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "molestiae",
                RootPath: "minus",
            },
            Labels: map[string]string{
                "voluptatum": "iusto",
                "excepturi": "nisi",
                "recusandae": "temporibus",
                "ab": "quis",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "bountiful-pension.com",
                Password: "ipsam",
                Port: 832620,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "sapiente",
                    ClientCertificate: "quo",
                    ClientKey: "odit",
                },
                Username: "Sarah.Strosin79",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "esse": "totam",
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
                DatabaseService: "fugit",
                Hostname: "miserly-usage.net",
                Password: "totam",
                Port: 105907,
                Username: "Haskell18",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "impedit",
                Hostname: "several-increase.biz",
                Password: "excepturi",
                Port: 135218,
                Username: "Aiden.Hane",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "iste",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "natus": "laboriosam",
            },
        },
        AccessToken: "hic",
        Alt: "proto",
        Callback: "fuga",
        ConnectionProfileID: "in",
        Fields: "corporis",
        Force: false,
        Key: "iste",
        OauthToken: "iure",
        Parent: "saepe",
        PrettyPrint: false,
        QuotaUser: "quidem",
        RequestID: "architecto",
        UploadType: "ipsa",
        UploadProtocol: "reiciendis",
        ValidateOnly: false,
    }

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, req, operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity{
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

* `DatastreamProjectsLocationsConnectionProfilesCreate` - Use this method to create a connection profile in a project and location.
* `DatastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* `DatastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `DatastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `DatastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `DatastreamProjectsLocationsPrivateConnectionsCreate` - Use this method to create a private connectivity configuration.
* `DatastreamProjectsLocationsPrivateConnectionsList` - Use this method to list private connectivity configurations in a project and location.
* `DatastreamProjectsLocationsPrivateConnectionsRoutesCreate` - Use this method to create a route for a private connectivity configuration in a project and location.
* `DatastreamProjectsLocationsPrivateConnectionsRoutesList` - Use this method to list routes created for a private connectivity configuration in a project and location.
* `DatastreamProjectsLocationsStreamsCreate` - Use this method to create a stream.
* `DatastreamProjectsLocationsStreamsDelete` - Use this method to delete a stream.
* `DatastreamProjectsLocationsStreamsList` - Use this method to list streams in a project and location.
* `DatastreamProjectsLocationsStreamsObjectsGet` - Use this method to get details about a stream object.
* `DatastreamProjectsLocationsStreamsObjectsList` - Use this method to list the objects of a specific stream.
* `DatastreamProjectsLocationsStreamsObjectsLookup` - Use this method to look up a stream object by its source object identifier.
* `DatastreamProjectsLocationsStreamsObjectsStartBackfillJob` - Use this method to start a backfill job for the specified stream object.
* `DatastreamProjectsLocationsStreamsObjectsStopBackfillJob` - Use this method to stop a backfill job for the specified stream object.
* `DatastreamProjectsLocationsStreamsPatch` - Use this method to update the configuration of a stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

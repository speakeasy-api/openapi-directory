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
            DisplayName: "provident",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "salty-stag.name",
                Password: "nulla",
                Port: 544883,
                PrivateKey: "illum",
                Username: "Henry.Mueller",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "iure",
                RootPath: "magnam",
            },
            Labels: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "lawful-missionary.info",
                Password: "recusandae",
                Port: 836079,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "ab",
                    ClientCertificate: "quis",
                    ClientKey: "veritatis",
                },
                Username: "Lydia_Aufderhar",
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
                DatabaseService: "nam",
                Hostname: "posh-muffin.com",
                Password: "deleniti",
                Port: 944669,
                Username: "Nina41",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "molestiae",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "qui": "impedit",
                "cum": "esse",
            },
        },
        AccessToken: "ipsum",
        Alt: "media",
        Callback: "aspernatur",
        ConnectionProfileID: "perferendis",
        Fields: "ad",
        Key: "natus",
        OauthToken: "sed",
        Parent: "iste",
        PrettyPrint: false,
        QuotaUser: "dolor",
        RequestID: "natus",
        UploadType: "laboriosam",
        UploadProtocol: "hic",
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
* `DatastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
* `DatastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `DatastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `DatastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `DatastreamProjectsLocationsPrivateConnectionsCreate` - Use this method to create a private connectivity configuration.
* `DatastreamProjectsLocationsPrivateConnectionsList` - Use this method to list private connectivity configurations in a project and location.
* `DatastreamProjectsLocationsPrivateConnectionsRoutesCreate` - Use this method to create a route for a private connectivity in a project and location.
* `DatastreamProjectsLocationsPrivateConnectionsRoutesList` - Use this method to list routes created for a private connectivity in a project and location.
* `DatastreamProjectsLocationsStreamsCreate` - Use this method to create a stream.
* `DatastreamProjectsLocationsStreamsDelete` - Use this method to delete a stream.
* `DatastreamProjectsLocationsStreamsFetchErrors` - Use this method to fetch any errors associated with a stream.
* `DatastreamProjectsLocationsStreamsList` - Use this method to list streams in a project and location.
* `DatastreamProjectsLocationsStreamsObjectsGet` - Use this method to get details about a stream object.
* `DatastreamProjectsLocationsStreamsObjectsList` - Use this method to list the objects of a specific stream.
* `DatastreamProjectsLocationsStreamsObjectsStartBackfillJob` - Starts backfill job for the specified stream object.
* `DatastreamProjectsLocationsStreamsObjectsStopBackfillJob` - Stops the backfill job for the specified stream object.
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

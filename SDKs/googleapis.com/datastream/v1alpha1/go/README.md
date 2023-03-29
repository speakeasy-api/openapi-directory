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
        Security: operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatastreamProjectsLocationsConnectionProfilesCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            ConnectionProfileID: "vero",
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.ConnectionProfileInput{
            DisplayName: "ullam",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "sim.com",
                Password: "sapiente",
                Port: 272656,
                PrivateKey: "eum",
                Username: "Jason_Schiller47",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "similique",
                RootPath: "reprehenderit",
            },
            Labels: map[string]string{
                "quo": "quasi",
                "laboriosam": "dicta",
                "est": "voluptatem",
                "consequatur": "fugiat",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "verner.net",
                Password: "eos",
                Port: 870013,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "accusamus",
                    ClientCertificate: "reiciendis",
                    ClientKey: "rem",
                },
                Username: "Pinkie_Schmidt",
            },
            NoConnectivity: map[string]interface{}{
                "soluta": "sed",
                "quisquam": "rerum",
                "culpa": "qui",
                "sed": "rerum",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "occaecati": "odit",
                    "esse": "rem",
                    "voluptatem": "amet",
                    "est": "id",
                },
                DatabaseService: "blanditiis",
                Hostname: "curt.name",
                Password: "dolores",
                Port: 18789,
                Username: "Enrique61",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "modi",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "iure": "earum",
                "ut": "soluta",
                "qui": "ea",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, req)
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
## SDK Available Operations


### Projects

* `DatastreamProjectsLocationsConnectionProfilesCreate` - Use this method to create a connection profile in a project and location.
* `DatastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
* `DatastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `DatastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `DatastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

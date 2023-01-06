# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "recusandae",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "json",
            Callback: "perspiciatis",
            ConnectionProfileID: "cupiditate",
            Fields: "aut",
            Force: true,
            Key: "autem",
            OauthToken: "id",
            PrettyPrint: true,
            QuotaUser: "voluptate",
            RequestID: "provident",
            UploadType: "iure",
            UploadProtocol: "quasi",
            ValidateOnly: false,
        },
        Request: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "et": "laudantium",
                "optio": "eos",
            },
            DisplayName: "et",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "vitae",
                Password: "debitis",
                Port: 2282774803602718950,
                PrivateKey: "dicta",
                Username: "esse",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "saepe",
                RootPath: "deserunt",
            },
            Labels: map[string]string{
                "nulla": "iure",
                "perferendis": "quaerat",
                "quos": "atque",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "repudiandae",
                Password: "id",
                Port: 2162174907708384814,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "molestiae",
                    ClientCertificate: "et",
                    ClientKey: "ab",
                },
                Username: "enim",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "et": "eveniet",
                },
                DatabaseService: "dolore",
                Hostname: "voluptates",
                Password: "ea",
                Port: 1317065775129238088,
                Username: "rerum",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "consequatur",
                Hostname: "dolores",
                Password: "neque",
                Port: 4594302796622927742,
                Username: "placeat",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "quo",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "et": "ducimus",
                "et": "occaecati",
                "ratione": "in",
            },
        },
    }
    
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DatastreamProjectsLocationsConnectionProfilesCreate` - Use this method to create a connection profile in a project and location.
* `DatastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* `DatastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `DatastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `DatastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

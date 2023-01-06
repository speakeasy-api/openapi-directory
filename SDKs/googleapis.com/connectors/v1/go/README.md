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
    
    req := operations.ConnectorsProjectsLocationsConnectionsCreateRequest{
        Security: operations.ConnectorsProjectsLocationsConnectionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ConnectorsProjectsLocationsConnectionsCreatePathParams{
            Parent: "dolor",
        },
        QueryParams: operations.ConnectorsProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "media",
            Callback: "rerum",
            ConnectionID: "dolorem",
            Fields: "sapiente",
            Key: "optio",
            OauthToken: "occaecati",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "et",
            UploadProtocol: "odit",
        },
        Request: &shared.ConnectionInput{
            AuthConfig: &shared.AuthConfig{
                AdditionalVariables: []shared.ConfigVariable{
                    shared.ConfigVariable{
                        BoolValue: true,
                        IntValue: "sed",
                        Key: "earum",
                        SecretValue: &shared.Secret{
                            SecretVersion: "aut",
                        },
                        StringValue: "corrupti",
                    },
                    shared.ConfigVariable{
                        BoolValue: false,
                        IntValue: "soluta",
                        Key: "nam",
                        SecretValue: &shared.Secret{
                            SecretVersion: "corrupti",
                        },
                        StringValue: "minima",
                    },
                },
                AuthType: "AUTH_TYPE_UNSPECIFIED",
                Oauth2ClientCredentials: &shared.Oauth2ClientCredentials{
                    ClientID: "aperiam",
                    ClientSecret: &shared.Secret{
                        SecretVersion: "excepturi",
                    },
                },
                Oauth2JwtBearer: &shared.Oauth2JwtBearer{
                    ClientKey: &shared.Secret{
                        SecretVersion: "debitis",
                    },
                    JwtClaims: &shared.JwtClaims{
                        Audience: "omnis",
                        Issuer: "illum",
                        Subject: "minima",
                    },
                },
                SSHPublicKey: &shared.SSHPublicKey{
                    CertType: "voluptas",
                    SSHClientCert: &shared.Secret{
                        SecretVersion: "laudantium",
                    },
                    SSHClientCertPass: &shared.Secret{
                        SecretVersion: "ut",
                    },
                    Username: "recusandae",
                },
                UserPassword: &shared.UserPassword{
                    Password: &shared.Secret{
                        SecretVersion: "tempore",
                    },
                    Username: "itaque",
                },
            },
            ConfigVariables: []shared.ConfigVariable{
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "sint",
                    Key: "aut",
                    SecretValue: &shared.Secret{
                        SecretVersion: "temporibus",
                    },
                    StringValue: "ea",
                },
            },
            ConnectorVersion: "ducimus",
            Description: "necessitatibus",
            DestinationConfigs: []shared.DestinationConfig{
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "ea",
                            Port: 6850399738405605986,
                            ServiceAttachment: "sint",
                        },
                        shared.Destination{
                            Host: "voluptatem",
                            Port: 3003290611676134007,
                            ServiceAttachment: "in",
                        },
                    },
                    Key: "libero",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "aut",
                            Port: 5542383823497440249,
                            ServiceAttachment: "est",
                        },
                    },
                    Key: "aut",
                },
            },
            Labels: map[string]string{
                "consequuntur": "placeat",
                "optio": "illo",
            },
            LockConfig: &shared.LockConfig{
                Locked: false,
                Reason: "est",
            },
            NodeConfig: &shared.NodeConfig{
                MaxNodeCount: 4403239330009925815,
                MinNodeCount: 6813042753866779208,
            },
            ServiceAccount: "vitae",
            Status: &shared.ConnectionStatus{
                Description: "nihil",
                State: "STATE_UNSPECIFIED",
                Status: "porro",
            },
            Suspended: true,
        },
    }
    
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsCreate(ctx, req)
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

* `ConnectorsProjectsLocationsConnectionsCreate` - Creates a new Connection in a given project and location.
* `ConnectorsProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `ConnectorsProjectsLocationsConnectionsPatch` - Updates the parameters of a single Connection.
* `ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasList` - List schema of a runtime actions filtered by action name.
* `ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasList` - List schema of a runtime entities filtered by entity name.
* `ConnectorsProjectsLocationsList` - Lists information about the supported locations for this service.
* `ConnectorsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ConnectorsProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `ConnectorsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ConnectorsProjectsLocationsProvidersConnectorsList` - Lists Connectors in a given project and location.
* `ConnectorsProjectsLocationsProvidersConnectorsVersionsGet` - Gets details of a single connector version.
* `ConnectorsProjectsLocationsProvidersConnectorsVersionsList` - Lists Connector Versions in a given project and location.
* `ConnectorsProjectsLocationsProvidersGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ConnectorsProjectsLocationsProvidersList` - Lists Providers in a given project and location.
* `ConnectorsProjectsLocationsProvidersSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ConnectorsProjectsLocationsProvidersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

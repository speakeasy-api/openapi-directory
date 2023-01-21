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
            Parent: "sit",
        },
        QueryParams: operations.ConnectorsProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            ConnectionID: "dolor",
            Fields: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
        },
        Request: &shared.ConnectionInput{
            AuthConfig: &shared.AuthConfig{
                AdditionalVariables: []shared.ConfigVariable{
                    shared.ConfigVariable{
                        BoolValue: true,
                        IntValue: "et",
                        Key: "ut",
                        SecretValue: &shared.Secret{
                            SecretVersion: "dolorem",
                        },
                        StringValue: "et",
                    },
                },
                AuthType: "AUTH_TYPE_UNSPECIFIED",
                Oauth2ClientCredentials: &shared.Oauth2ClientCredentials{
                    ClientID: "iste",
                    ClientSecret: &shared.Secret{
                        SecretVersion: "vitae",
                    },
                },
                Oauth2JwtBearer: &shared.Oauth2JwtBearer{
                    ClientKey: &shared.Secret{
                        SecretVersion: "totam",
                    },
                    JwtClaims: &shared.JwtClaims{
                        Audience: "dolores",
                        Issuer: "illum",
                        Subject: "debitis",
                    },
                },
                SSHPublicKey: &shared.SSHPublicKey{
                    CertType: "vel",
                    SSHClientCert: &shared.Secret{
                        SecretVersion: "odio",
                    },
                    SSHClientCertPass: &shared.Secret{
                        SecretVersion: "dolore",
                    },
                    Username: "id",
                },
                UserPassword: &shared.UserPassword{
                    Password: &shared.Secret{
                        SecretVersion: "aspernatur",
                    },
                    Username: "accusantium",
                },
            },
            ConfigVariables: []shared.ConfigVariable{
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "quis",
                    Key: "est",
                    SecretValue: &shared.Secret{
                        SecretVersion: "aut",
                    },
                    StringValue: "odit",
                },
                shared.ConfigVariable{
                    BoolValue: true,
                    IntValue: "voluptas",
                    Key: "omnis",
                    SecretValue: &shared.Secret{
                        SecretVersion: "aut",
                    },
                    StringValue: "illo",
                },
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "officiis",
                    Key: "autem",
                    SecretValue: &shared.Secret{
                        SecretVersion: "consectetur",
                    },
                    StringValue: "nobis",
                },
            },
            ConnectorVersion: "odio",
            Description: "qui",
            DestinationConfigs: []shared.DestinationConfig{
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "ipsum",
                            Port: 8902041070398994519,
                            ServiceAttachment: "modi",
                        },
                        shared.Destination{
                            Host: "sint",
                            Port: 5392504858645185670,
                            ServiceAttachment: "ut",
                        },
                    },
                    Key: "exercitationem",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "reprehenderit",
                            Port: 4736217237333769909,
                            ServiceAttachment: "maiores",
                        },
                        shared.Destination{
                            Host: "incidunt",
                            Port: 7242748068272024738,
                            ServiceAttachment: "beatae",
                        },
                        shared.Destination{
                            Host: "veritatis",
                            Port: 2671030200101705776,
                            ServiceAttachment: "et",
                        },
                    },
                    Key: "omnis",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "ex",
                            Port: 7014402135919778893,
                            ServiceAttachment: "placeat",
                        },
                    },
                    Key: "vel",
                },
            },
            Labels: map[string]string{
                "mollitia": "voluptas",
                "quam": "reprehenderit",
                "qui": "qui",
            },
            LockConfig: &shared.LockConfig{
                Locked: false,
                Reason: "in",
            },
            NodeConfig: &shared.NodeConfig{
                MaxNodeCount: 7132033595893905170,
                MinNodeCount: 8086159467323165929,
            },
            ServiceAccount: "ut",
            Status: &shared.ConnectionStatus{
                Description: "itaque",
                State: "DELETING",
                Status: "neque",
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

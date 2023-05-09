# Projects

### Available Operations

* [ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh](#connectorsprojectslocationsconnectionsconnectionschemametadatarefresh) - Refresh runtime schema of a connection.
* [ConnectorsProjectsLocationsConnectionsCreate](#connectorsprojectslocationsconnectionscreate) - Creates a new Connection in a given project and location.
* [ConnectorsProjectsLocationsConnectionsList](#connectorsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasList](#connectorsprojectslocationsconnectionsruntimeactionschemaslist) - List schema of a runtime actions filtered by action name.
* [ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasList](#connectorsprojectslocationsconnectionsruntimeentityschemaslist) - List schema of a runtime entities filtered by entity name.
* [ConnectorsProjectsLocationsEndpointAttachmentsCreate](#connectorsprojectslocationsendpointattachmentscreate) - Creates a new EndpointAttachment in a given project and location.
* [ConnectorsProjectsLocationsEndpointAttachmentsList](#connectorsprojectslocationsendpointattachmentslist) - List EndpointAttachments in a given project
* [ConnectorsProjectsLocationsGlobalManagedZonesCreate](#connectorsprojectslocationsglobalmanagedzonescreate) - Creates a new ManagedZone in a given project and location.
* [ConnectorsProjectsLocationsGlobalManagedZonesList](#connectorsprojectslocationsglobalmanagedzoneslist) - List ManagedZones in a given project
* [ConnectorsProjectsLocationsGlobalManagedZonesPatch](#connectorsprojectslocationsglobalmanagedzonespatch) - Updates the parameters of a single ManagedZone.
* [ConnectorsProjectsLocationsList](#connectorsprojectslocationslist) - Lists information about the supported locations for this service.
* [ConnectorsProjectsLocationsOperationsCancel](#connectorsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ConnectorsProjectsLocationsOperationsDelete](#connectorsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [ConnectorsProjectsLocationsOperationsList](#connectorsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [ConnectorsProjectsLocationsProvidersConnectorsList](#connectorsprojectslocationsprovidersconnectorslist) - Lists Connectors in a given project and location.
* [ConnectorsProjectsLocationsProvidersConnectorsVersionsGet](#connectorsprojectslocationsprovidersconnectorsversionsget) - Gets details of a single connector version.
* [ConnectorsProjectsLocationsProvidersConnectorsVersionsList](#connectorsprojectslocationsprovidersconnectorsversionslist) - Lists Connector Versions in a given project and location.
* [ConnectorsProjectsLocationsProvidersGetIamPolicy](#connectorsprojectslocationsprovidersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ConnectorsProjectsLocationsProvidersList](#connectorsprojectslocationsproviderslist) - Lists Providers in a given project and location.
* [ConnectorsProjectsLocationsProvidersSetIamPolicy](#connectorsprojectslocationsproviderssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ConnectorsProjectsLocationsProvidersTestIamPermissions](#connectorsprojectslocationsproviderstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh

Refresh runtime schema of a connection.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(ctx, operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        Name: "Estelle Will",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity{
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

## ConnectorsProjectsLocationsConnectionsCreate

Creates a new Connection in a given project and location.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsCreate(ctx, operations.ConnectorsProjectsLocationsConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConnectionInput: &shared.ConnectionInput{
            AuthConfig: &shared.AuthConfig{
                AdditionalVariables: []shared.ConfigVariable{
                    shared.ConfigVariable{
                        BoolValue: sdk.Bool(false),
                        IntValue: sdk.String("esse"),
                        Key: sdk.String("totam"),
                        SecretValue: &shared.Secret{
                            SecretVersion: sdk.String("porro"),
                        },
                        StringValue: sdk.String("dolorum"),
                    },
                    shared.ConfigVariable{
                        BoolValue: sdk.Bool(false),
                        IntValue: sdk.String("dicta"),
                        Key: sdk.String("nam"),
                        SecretValue: &shared.Secret{
                            SecretVersion: sdk.String("officia"),
                        },
                        StringValue: sdk.String("occaecati"),
                    },
                    shared.ConfigVariable{
                        BoolValue: sdk.Bool(false),
                        IntValue: sdk.String("fugit"),
                        Key: sdk.String("deleniti"),
                        SecretValue: &shared.Secret{
                            SecretVersion: sdk.String("hic"),
                        },
                        StringValue: sdk.String("optio"),
                    },
                    shared.ConfigVariable{
                        BoolValue: sdk.Bool(false),
                        IntValue: sdk.String("totam"),
                        Key: sdk.String("beatae"),
                        SecretValue: &shared.Secret{
                            SecretVersion: sdk.String("commodi"),
                        },
                        StringValue: sdk.String("molestiae"),
                    },
                },
                AuthKey: sdk.String("modi"),
                AuthType: shared.AuthConfigAuthTypeEnumUserPassword.ToPointer(),
                Oauth2AuthCodeFlow: &shared.Oauth2AuthCodeFlow{
                    AuthCode: sdk.String("impedit"),
                    ClientID: sdk.String("cum"),
                    ClientSecret: &shared.Secret{
                        SecretVersion: sdk.String("esse"),
                    },
                    EnablePkce: sdk.Bool(false),
                    PkceVerifier: sdk.String("ipsum"),
                    RedirectURI: sdk.String("excepturi"),
                    Scopes: []string{
                        "perferendis",
                    },
                },
                Oauth2ClientCredentials: &shared.Oauth2ClientCredentials{
                    ClientID: sdk.String("ad"),
                    ClientSecret: &shared.Secret{
                        SecretVersion: sdk.String("natus"),
                    },
                },
                Oauth2JwtBearer: &shared.Oauth2JwtBearer{
                    ClientKey: &shared.Secret{
                        SecretVersion: sdk.String("sed"),
                    },
                    JwtClaims: &shared.JwtClaims{
                        Audience: sdk.String("iste"),
                        Issuer: sdk.String("dolor"),
                        Subject: sdk.String("natus"),
                    },
                },
                SSHPublicKey: &shared.SSHPublicKey{
                    CertType: sdk.String("laboriosam"),
                    SSHClientCert: &shared.Secret{
                        SecretVersion: sdk.String("hic"),
                    },
                    SSHClientCertPass: &shared.Secret{
                        SecretVersion: sdk.String("saepe"),
                    },
                    Username: sdk.String("Marisa_Kirlin"),
                },
                UserPassword: &shared.UserPassword{
                    Password: &shared.Secret{
                        SecretVersion: sdk.String("iure"),
                    },
                    Username: sdk.String("Sterling6"),
                },
            },
            ConfigVariables: []shared.ConfigVariable{
                shared.ConfigVariable{
                    BoolValue: sdk.Bool(false),
                    IntValue: sdk.String("est"),
                    Key: sdk.String("mollitia"),
                    SecretValue: &shared.Secret{
                        SecretVersion: sdk.String("laborum"),
                    },
                    StringValue: sdk.String("dolores"),
                },
                shared.ConfigVariable{
                    BoolValue: sdk.Bool(false),
                    IntValue: sdk.String("dolorem"),
                    Key: sdk.String("corporis"),
                    SecretValue: &shared.Secret{
                        SecretVersion: sdk.String("explicabo"),
                    },
                    StringValue: sdk.String("nobis"),
                },
                shared.ConfigVariable{
                    BoolValue: sdk.Bool(false),
                    IntValue: sdk.String("enim"),
                    Key: sdk.String("omnis"),
                    SecretValue: &shared.Secret{
                        SecretVersion: sdk.String("nemo"),
                    },
                    StringValue: sdk.String("minima"),
                },
                shared.ConfigVariable{
                    BoolValue: sdk.Bool(false),
                    IntValue: sdk.String("excepturi"),
                    Key: sdk.String("accusantium"),
                    SecretValue: &shared.Secret{
                        SecretVersion: sdk.String("iure"),
                    },
                    StringValue: sdk.String("culpa"),
                },
            },
            ConnectorVersion: sdk.String("doloribus"),
            Description: sdk.String("sapiente"),
            DestinationConfigs: []shared.DestinationConfig{
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: sdk.String("dolorem"),
                            Port: sdk.Int(635059),
                            ServiceAttachment: sdk.String("consequuntur"),
                        },
                        shared.Destination{
                            Host: sdk.String("repellat"),
                            Port: sdk.Int(653108),
                            ServiceAttachment: sdk.String("occaecati"),
                        },
                        shared.Destination{
                            Host: sdk.String("numquam"),
                            Port: sdk.Int(414369),
                            ServiceAttachment: sdk.String("quam"),
                        },
                    },
                    Key: sdk.String("molestiae"),
                },
            },
            Labels: map[string]string{
                "error": "quia",
            },
            LockConfig: &shared.LockConfig{
                Locked: sdk.Bool(false),
                Reason: sdk.String("quis"),
            },
            LogConfig: &shared.ConnectorsLogConfig{
                Enabled: sdk.Bool(false),
            },
            NodeConfig: &shared.NodeConfig{
                MaxNodeCount: sdk.Int(110375),
                MinNodeCount: sdk.Int(674752),
            },
            ServiceAccount: sdk.String("animi"),
            SslConfig: &shared.SslConfig{
                AdditionalVariables: []shared.ConfigVariable{
                    shared.ConfigVariable{
                        BoolValue: sdk.Bool(false),
                        IntValue: sdk.String("odit"),
                        Key: sdk.String("quo"),
                        SecretValue: &shared.Secret{
                            SecretVersion: sdk.String("sequi"),
                        },
                        StringValue: sdk.String("tenetur"),
                    },
                    shared.ConfigVariable{
                        BoolValue: sdk.Bool(false),
                        IntValue: sdk.String("ipsam"),
                        Key: sdk.String("id"),
                        SecretValue: &shared.Secret{
                            SecretVersion: sdk.String("possimus"),
                        },
                        StringValue: sdk.String("aut"),
                    },
                },
                ClientCertType: shared.SslConfigClientCertTypeEnumCertTypeUnspecified.ToPointer(),
                ClientCertificate: &shared.Secret{
                    SecretVersion: sdk.String("error"),
                },
                ClientPrivateKey: &shared.Secret{
                    SecretVersion: sdk.String("temporibus"),
                },
                ClientPrivateKeyPass: &shared.Secret{
                    SecretVersion: sdk.String("laborum"),
                },
                PrivateServerCertificate: &shared.Secret{
                    SecretVersion: sdk.String("quasi"),
                },
                ServerCertType: shared.SslConfigServerCertTypeEnumPem.ToPointer(),
                TrustModel: shared.SslConfigTrustModelEnumInsecure.ToPointer(),
                Type: shared.SslConfigTypeEnumMtls.ToPointer(),
                UseSsl: sdk.Bool(false),
            },
            Status: &shared.ConnectionStatus{
                Description: sdk.String("nihil"),
                State: shared.ConnectionStatusStateEnumDeleting.ToPointer(),
                Status: sdk.String("voluptatibus"),
            },
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        ConnectionID: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("reprehenderit"),
        Parent: "ut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.ConnectorsProjectsLocationsConnectionsCreateSecurity{
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

## ConnectorsProjectsLocationsConnectionsList

Lists Connections in a given project and location.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsList(ctx, operations.ConnectorsProjectsLocationsConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("enim"),
        Filter: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("repudiandae"),
        OrderBy: sdk.String("quae"),
        PageSize: sdk.Int64(216822),
        PageToken: sdk.String("quidem"),
        Parent: "molestias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("modi"),
        View: operations.ConnectorsProjectsLocationsConnectionsListViewEnumBasic.ToPointer(),
    }, operations.ConnectorsProjectsLocationsConnectionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionsResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasList

List schema of a runtime actions filtered by action name.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasList(ctx, operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("sint"),
        Filter: sdk.String("veritatis"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("incidunt"),
        PageSize: sdk.Int64(318569),
        PageToken: sdk.String("consequatur"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRuntimeActionSchemasResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasList

List schema of a runtime entities filtered by entity name.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasList(ctx, operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Filter: sdk.String("aliquid"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("quos"),
        PageSize: sdk.Int64(20107),
        PageToken: sdk.String("magni"),
        Parent: "assumenda",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRuntimeEntitySchemasResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsEndpointAttachmentsCreate

Creates a new EndpointAttachment in a given project and location.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsEndpointAttachmentsCreate(ctx, operations.ConnectorsProjectsLocationsEndpointAttachmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EndpointAttachmentInput: &shared.EndpointAttachmentInput{
            Description: sdk.String("excepturi"),
            Labels: map[string]string{
                "facilis": "tempore",
                "labore": "delectus",
            },
            ServiceAttachment: sdk.String("eum"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        EndpointAttachmentID: sdk.String("aliquid"),
        Fields: sdk.String("provident"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("sint"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("a"),
    }, operations.ConnectorsProjectsLocationsEndpointAttachmentsCreateSecurity{
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

## ConnectorsProjectsLocationsEndpointAttachmentsList

List EndpointAttachments in a given project

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsEndpointAttachmentsList(ctx, operations.ConnectorsProjectsLocationsEndpointAttachmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("maiores"),
        Filter: sdk.String("rerum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("magnam"),
        OrderBy: sdk.String("cumque"),
        PageSize: sdk.Int64(813798),
        PageToken: sdk.String("ea"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("non"),
    }, operations.ConnectorsProjectsLocationsEndpointAttachmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointAttachmentsResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsGlobalManagedZonesCreate

Creates a new ManagedZone in a given project and location.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsGlobalManagedZonesCreate(ctx, operations.ConnectorsProjectsLocationsGlobalManagedZonesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ManagedZoneInput: &shared.ManagedZoneInput{
            Description: sdk.String("enim"),
            DNS: sdk.String("accusamus"),
            Labels: map[string]string{
                "quidem": "provident",
                "nam": "id",
                "blanditiis": "deleniti",
                "sapiente": "amet",
            },
            TargetProject: sdk.String("deserunt"),
            TargetVpc: sdk.String("nisi"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("perferendis"),
        ManagedZoneID: sdk.String("nihil"),
        OauthToken: sdk.String("magnam"),
        Parent: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.ConnectorsProjectsLocationsGlobalManagedZonesCreateSecurity{
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

## ConnectorsProjectsLocationsGlobalManagedZonesList

List ManagedZones in a given project

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsGlobalManagedZonesList(ctx, operations.ConnectorsProjectsLocationsGlobalManagedZonesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("vero"),
        Filter: sdk.String("aspernatur"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("magnam"),
        OrderBy: sdk.String("et"),
        PageSize: sdk.Int64(569965),
        PageToken: sdk.String("ullam"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.ConnectorsProjectsLocationsGlobalManagedZonesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListManagedZonesResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsGlobalManagedZonesPatch

Updates the parameters of a single ManagedZone.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsGlobalManagedZonesPatch(ctx, operations.ConnectorsProjectsLocationsGlobalManagedZonesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ManagedZoneInput: &shared.ManagedZoneInput{
            Description: sdk.String("reiciendis"),
            DNS: sdk.String("mollitia"),
            Labels: map[string]string{
                "eum": "dolor",
                "necessitatibus": "odit",
            },
            TargetProject: sdk.String("nemo"),
            TargetVpc: sdk.String("quasi"),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("eius"),
        Key: sdk.String("maxime"),
        Name: "Mr. Andres King",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UpdateMask: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ConnectorsProjectsLocationsGlobalManagedZonesPatchSecurity{
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

## ConnectorsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsList(ctx, operations.ConnectorsProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("consequuntur"),
        Filter: sdk.String("praesentium"),
        Key: sdk.String("natus"),
        Name: "Joan Satterfield",
        OauthToken: sdk.String("maxime"),
        PageSize: sdk.Int64(411397),
        PageToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.ConnectorsProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsOperationsCancel(ctx, operations.ConnectorsProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "quidem": "ipsam",
            "voluptate": "autem",
            "nam": "eaque",
            "pariatur": "nemo",
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("amet"),
        Key: sdk.String("aut"),
        Name: "Lewis Welch",
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.ConnectorsProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsOperationsDelete(ctx, operations.ConnectorsProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("dolores"),
        Name: "Darryl Fadel",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.ConnectorsProjectsLocationsOperationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsOperationsList(ctx, operations.ConnectorsProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("blanditiis"),
        Filter: sdk.String("error"),
        Key: sdk.String("eaque"),
        Name: "Jean Ferry",
        OauthToken: sdk.String("modi"),
        PageSize: sdk.Int64(613966),
        PageToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("provident"),
    }, operations.ConnectorsProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsProvidersConnectorsList

Lists Connectors in a given project and location.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsProvidersConnectorsList(ctx, operations.ConnectorsProjectsLocationsProvidersConnectorsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("quos"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(209843),
        PageToken: sdk.String("dolor"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.ConnectorsProjectsLocationsProvidersConnectorsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorsResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsProvidersConnectorsVersionsGet

Gets details of a single connector version.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsProvidersConnectorsVersionsGet(ctx, operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("amet"),
        Key: sdk.String("dolorum"),
        Name: "Ms. Christine Beer",
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptatibus"),
        View: operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnumConnectorVersionViewBasic.ToPointer(),
    }, operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectorVersion != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsProvidersConnectorsVersionsList

Lists Connector Versions in a given project and location.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsProvidersConnectorsVersionsList(ctx, operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("soluta"),
        PageSize: sdk.Int64(679393),
        PageToken: sdk.String("iusto"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("omnis"),
        View: operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnumConnectorVersionViewFull.ToPointer(),
    }, operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorVersionsResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsProvidersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsProvidersGetIamPolicy(ctx, operations.ConnectorsProjectsLocationsProvidersGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("saepe"),
        OptionsRequestedPolicyVersion: sdk.Int64(263322),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        Resource: "perferendis",
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("optio"),
    }, operations.ConnectorsProjectsLocationsProvidersGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsProvidersList

Lists Providers in a given project and location.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsProvidersList(ctx, operations.ConnectorsProjectsLocationsProvidersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("minima"),
        PageSize: sdk.Int64(831049),
        PageToken: sdk.String("totam"),
        Parent: "similique",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.ConnectorsProjectsLocationsProvidersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvidersResponse != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsProvidersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsProvidersSetIamPolicy(ctx, operations.ConnectorsProjectsLocationsProvidersSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                AuditConfigs: []shared.AuditConfig{
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "qui",
                                    "dolorum",
                                    "a",
                                    "esse",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsum",
                                    "quisquam",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "tempore",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "enim",
                                    "dolorem",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("totam"),
                    },
                    shared.AuditConfig{
                        AuditLogConfigs: []shared.AuditLogConfig{
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "expedita",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.AuditLogConfig{
                                ExemptedMembers: []string{
                                    "vel",
                                },
                                LogType: shared.AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("voluptas"),
                    },
                },
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quam"),
                            Expression: sdk.String("ipsum"),
                            Location: sdk.String("incidunt"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "maxime",
                            "pariatur",
                            "soluta",
                        },
                        Role: sdk.String("dicta"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("laborum"),
                            Expression: sdk.String("totam"),
                            Location: sdk.String("incidunt"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "distinctio",
                        },
                        Role: sdk.String("facilis"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("aliquid"),
                            Expression: sdk.String("quam"),
                            Location: sdk.String("molestias"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "neque",
                        },
                        Role: sdk.String("fugit"),
                    },
                },
                Etag: sdk.String("magni"),
                Version: sdk.Int(488056),
            },
            UpdateMask: sdk.String("sunt"),
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        Resource: "et",
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.ConnectorsProjectsLocationsProvidersSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ConnectorsProjectsLocationsProvidersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

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
    res, err := s.Projects.ConnectorsProjectsLocationsProvidersTestIamPermissions(ctx, operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quos",
                "tempore",
                "cupiditate",
            },
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        Resource: "architecto",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("aut"),
    }, operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

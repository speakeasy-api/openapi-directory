# Projects

### Available Operations

* [BeyondcorpProjectsLocationsAppConnectionsCreate](#beyondcorpprojectslocationsappconnectionscreate) - Creates a new AppConnection in a given project and location.
* [BeyondcorpProjectsLocationsAppConnectionsList](#beyondcorpprojectslocationsappconnectionslist) - Lists AppConnections in a given project and location.
* [BeyondcorpProjectsLocationsAppConnectionsResolve](#beyondcorpprojectslocationsappconnectionsresolve) - Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
* [BeyondcorpProjectsLocationsAppConnectorsCreate](#beyondcorpprojectslocationsappconnectorscreate) - Creates a new AppConnector in a given project and location.
* [BeyondcorpProjectsLocationsAppConnectorsList](#beyondcorpprojectslocationsappconnectorslist) - Lists AppConnectors in a given project and location.
* [BeyondcorpProjectsLocationsAppConnectorsPatch](#beyondcorpprojectslocationsappconnectorspatch) - Updates the parameters of a single AppConnector.
* [BeyondcorpProjectsLocationsAppConnectorsReportStatus](#beyondcorpprojectslocationsappconnectorsreportstatus) - Report status for a given connector.
* [BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig](#beyondcorpprojectslocationsappconnectorsresolveinstanceconfig) - Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
* [BeyondcorpProjectsLocationsAppGatewaysCreate](#beyondcorpprojectslocationsappgatewayscreate) - Creates a new AppGateway in a given project and location.
* [BeyondcorpProjectsLocationsAppGatewaysList](#beyondcorpprojectslocationsappgatewayslist) - Lists AppGateways in a given project and location.
* [BeyondcorpProjectsLocationsClientGatewaysGetIamPolicy](#beyondcorpprojectslocationsclientgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [BeyondcorpProjectsLocationsClientGatewaysSetIamPolicy](#beyondcorpprojectslocationsclientgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [BeyondcorpProjectsLocationsClientGatewaysTestIamPermissions](#beyondcorpprojectslocationsclientgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [BeyondcorpProjectsLocationsList](#beyondcorpprojectslocationslist) - Lists information about the supported locations for this service.
* [BeyondcorpProjectsLocationsOperationsCancel](#beyondcorpprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [BeyondcorpProjectsLocationsOperationsDelete](#beyondcorpprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [BeyondcorpProjectsLocationsOperationsGet](#beyondcorpprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [BeyondcorpProjectsLocationsOperationsList](#beyondcorpprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## BeyondcorpProjectsLocationsAppConnectionsCreate

Creates a new AppConnection in a given project and location.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectionsCreate(ctx, operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionInput{
            ApplicationEndpoint: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint{
                Host: sdk.String("sapiente"),
                Port: sdk.Int(778157),
            },
            Connectors: []string{
                "at",
            },
            DisplayName: sdk.String("at"),
            Gateway: &shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput{
                AppGateway: sdk.String("maiores"),
                Type: shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnumTypeUnspecified.ToPointer(),
            },
            Labels: map[string]string{
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
                "nam": "officia",
            },
            Name: sdk.String("Wayne Lind"),
            Type: shared.GoogleCloudBeyondcorpAppconnectionsV1AppConnectionTypeEnumTCPProxy.ToPointer(),
        },
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppConnectionID: sdk.String("molestiae"),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cum"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        RequestID: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
        ValidateOnly: sdk.Bool(false),
    }, operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppConnectionsList

Lists AppConnections in a given project and location.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectionsList(ctx, operations.BeyondcorpProjectsLocationsAppConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolor"),
        Filter: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        OrderBy: sdk.String("saepe"),
        PageSize: sdk.Int64(681820),
        PageToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.BeyondcorpProjectsLocationsAppConnectionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppConnectionsResolve

Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectionsResolve(ctx, operations.BeyondcorpProjectsLocationsAppConnectionsResolveRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppConnectorID: sdk.String("reiciendis"),
        Callback: sdk.String("est"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("dolores"),
        PageSize: sdk.Int64(210382),
        PageToken: sdk.String("corporis"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.BeyondcorpProjectsLocationsAppConnectionsResolveSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppConnectorsCreate

Creates a new AppConnector in a given project and location.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectorsCreate(ctx, operations.BeyondcorpProjectsLocationsAppConnectorsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput: &shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput{
            DisplayName: sdk.String("minima"),
            Labels: map[string]string{
                "accusantium": "iure",
                "culpa": "doloribus",
                "sapiente": "architecto",
            },
            Name: sdk.String("Mike Nicolas"),
            PrincipalInfo: &shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo{
                ServiceAccount: &shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount{
                    Email: sdk.String("Kristina.Fritsch@yahoo.com"),
                },
            },
            ResourceInfo: &shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{
                ID: sdk.String("739251aa-52c3-4f5a-9019-da1ffe78f097"),
                Resource: map[string]interface{}{
                    "perferendis": "doloremque",
                    "reprehenderit": "ut",
                    "maiores": "dicta",
                },
                Status: shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnumHealthy.ToPointer(),
                Sub: []shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{
                    shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{},
                    shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{},
                },
                Time: sdk.String("iusto"),
            },
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppConnectorID: sdk.String("enim"),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("quae"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        RequestID: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
        ValidateOnly: sdk.Bool(false),
    }, operations.BeyondcorpProjectsLocationsAppConnectorsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppConnectorsList

Lists AppConnectors in a given project and location.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectorsList(ctx, operations.BeyondcorpProjectsLocationsAppConnectorsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("quasi"),
        Filter: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("veritatis"),
        OrderBy: sdk.String("itaque"),
        PageSize: sdk.Int64(277718),
        PageToken: sdk.String("enim"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.BeyondcorpProjectsLocationsAppConnectorsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppConnectorsPatch

Updates the parameters of a single AppConnector.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectorsPatch(ctx, operations.BeyondcorpProjectsLocationsAppConnectorsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput: &shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInput{
            DisplayName: sdk.String("distinctio"),
            Labels: map[string]string{
                "labore": "modi",
                "qui": "aliquid",
                "cupiditate": "quos",
                "perferendis": "magni",
            },
            Name: sdk.String("Vernon Abshire"),
            PrincipalInfo: &shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo{
                ServiceAccount: &shared.GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount{
                    Email: sdk.String("Dominique.Prosacco96@yahoo.com"),
                },
            },
            ResourceInfo: &shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{
                ID: sdk.String("63c969e9-a3ef-4a77-9fb1-4cd66ae395ef"),
                Resource: map[string]interface{}{
                    "provident": "nam",
                    "id": "blanditiis",
                    "deleniti": "sapiente",
                },
                Status: shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnumHealthy.ToPointer(),
                Sub: []shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{
                    shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{},
                    shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{},
                    shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{},
                },
                Time: sdk.String("nisi"),
            },
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("perferendis"),
        Name: "Megan Rau",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        RequestID: sdk.String("natus"),
        UpdateMask: sdk.String("nobis"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("vero"),
        ValidateOnly: sdk.Bool(false),
    }, operations.BeyondcorpProjectsLocationsAppConnectorsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppConnectorsReportStatus

Report status for a given connector.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectorsReportStatus(ctx, operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest: &shared.GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest{
            RequestID: sdk.String("architecto"),
            ResourceInfo: &shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{
                ID: sdk.String("41959890-afa5-463e-a516-fe4c8b711e5b"),
                Resource: map[string]interface{}{
                    "repellat": "quibusdam",
                    "sed": "saepe",
                },
                Status: shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnumDegraded.ToPointer(),
                Sub: []shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{
                    shared.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo{},
                },
                Time: sdk.String("consequuntur"),
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppConnector: "magni",
        Callback: sdk.String("sunt"),
        Fields: sdk.String("quo"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig

Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig(ctx, operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppConnector: "ab",
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppGatewaysCreate

Creates a new AppGateway in a given project and location.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppGatewaysCreate(ctx, operations.BeyondcorpProjectsLocationsAppGatewaysCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AppGatewayInput: &shared.AppGatewayInput{
            DisplayName: sdk.String("nemo"),
            HostType: shared.AppGatewayHostTypeEnumGcpRegionalMig.ToPointer(),
            Labels: map[string]string{
                "fugiat": "amet",
            },
            Name: sdk.String("Erma Hessel"),
            Type: shared.AppGatewayTypeEnumTCPProxy.ToPointer(),
        },
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppGatewayID: sdk.String("totam"),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("nesciunt"),
        Parent: "eos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        RequestID: sdk.String("dolores"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("quam"),
        ValidateOnly: sdk.Bool(false),
    }, operations.BeyondcorpProjectsLocationsAppGatewaysCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsAppGatewaysList

Lists AppGateways in a given project and location.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsAppGatewaysList(ctx, operations.BeyondcorpProjectsLocationsAppGatewaysListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("recusandae"),
        Filter: sdk.String("omnis"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("perspiciatis"),
        OrderBy: sdk.String("voluptatem"),
        PageSize: sdk.Int64(783645),
        PageToken: sdk.String("consequuntur"),
        Parent: "blanditiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.BeyondcorpProjectsLocationsAppGatewaysListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppGatewaysResponse != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsClientGatewaysGetIamPolicy

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
    res, err := s.Projects.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicy(ctx, operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("modi"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("dolorum"),
        OptionsRequestedPolicyVersion: sdk.Int64(535633),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        Resource: "provident",
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("libero"),
    }, operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsClientGatewaysSetIamPolicy

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
    res, err := s.Projects.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicy(ctx, operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolorem",
                                    "dolorem",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "ipsum",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "cum",
                                    "voluptate",
                                    "dignissimos",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("amet"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "veritatis",
                                    "ipsa",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "odio",
                                    "quaerat",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "voluptatibus",
                                    "voluptas",
                                    "natus",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("atque"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.GoogleTypeExpr{
                            Description: sdk.String("fugiat"),
                            Expression: sdk.String("ab"),
                            Location: sdk.String("soluta"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "voluptate",
                            "dolorum",
                        },
                        Role: sdk.String("deleniti"),
                    },
                },
                Etag: sdk.String("omnis"),
                Version: sdk.Int(896672),
            },
            UpdateMask: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        Resource: "aspernatur",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("amet"),
    }, operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsClientGatewaysTestIamPermissions

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
    res, err := s.Projects.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissions(ctx, operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "ad",
                "saepe",
                "suscipit",
                "deserunt",
            },
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("totam"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        Resource: "quaerat",
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("vel"),
    }, operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsList

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
    res, err := s.Projects.BeyondcorpProjectsLocationsList(ctx, operations.BeyondcorpProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("a"),
        Filter: sdk.String("esse"),
        Key: sdk.String("harum"),
        Name: "Tracy Schamberger",
        OauthToken: sdk.String("tempore"),
        PageSize: sdk.Int64(880298),
        PageToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.BeyondcorpProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudLocationListLocationsResponse != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsOperationsCancel

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
    res, err := s.Projects.BeyondcorpProjectsLocationsOperationsCancel(ctx, operations.BeyondcorpProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "sit": "expedita",
            "neque": "sed",
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("quam"),
        Name: "Amber Dibbert",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.BeyondcorpProjectsLocationsOperationsCancelSecurity{
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

## BeyondcorpProjectsLocationsOperationsDelete

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
    res, err := s.Projects.BeyondcorpProjectsLocationsOperationsDelete(ctx, operations.BeyondcorpProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("facilis"),
        Name: "Constance Mann",
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        RequestID: sdk.String("magni"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("sunt"),
        ValidateOnly: sdk.Bool(false),
    }, operations.BeyondcorpProjectsLocationsOperationsDeleteSecurity{
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

## BeyondcorpProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.BeyondcorpProjectsLocationsOperationsGet(ctx, operations.BeyondcorpProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("soluta"),
        Name: "Carl Turner DDS",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("aperiam"),
    }, operations.BeyondcorpProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## BeyondcorpProjectsLocationsOperationsList

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
    res, err := s.Projects.BeyondcorpProjectsLocationsOperationsList(ctx, operations.BeyondcorpProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("adipisci"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("architecto"),
        Name: "Margaret Luettgen MD",
        OauthToken: sdk.String("repellendus"),
        PageSize: sdk.Int64(785153),
        PageToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.BeyondcorpProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```

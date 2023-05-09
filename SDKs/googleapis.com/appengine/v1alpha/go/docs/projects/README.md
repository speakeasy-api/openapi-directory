# Projects

### Available Operations

* [AppengineProjectsLocationsGet](#appengineprojectslocationsget) - Gets information about a location.
* [AppengineProjectsLocationsList](#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [AppengineProjectsLocationsOperationsGet](#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AppengineProjectsLocationsOperationsList](#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

## AppengineProjectsLocationsGet

Gets information about a location.

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
    res, err := s.Projects.AppengineProjectsLocationsGet(ctx, operations.AppengineProjectsLocationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("totam"),
        Key: sdk.String("nihil"),
        LocationsID: "sit",
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "neque",
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("libero"),
    }, operations.AppengineProjectsLocationsGetSecurity{
        Option1: &operations.AppengineProjectsLocationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## AppengineProjectsLocationsList

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
    res, err := s.Projects.AppengineProjectsLocationsList(ctx, operations.AppengineProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("incidunt"),
        Filter: sdk.String("qui"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("maxime"),
        PageSize: sdk.Int64(863856),
        PageToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "dicta",
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.AppengineProjectsLocationsListSecurity{
        Option1: &operations.AppengineProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## AppengineProjectsLocationsOperationsGet

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
    res, err := s.Projects.AppengineProjectsLocationsOperationsGet(ctx, operations.AppengineProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("quam"),
        LocationsID: "molestias",
        OauthToken: sdk.String("temporibus"),
        OperationsID: "qui",
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "neque",
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("odio"),
    }, operations.AppengineProjectsLocationsOperationsGetSecurity{
        Option1: &operations.AppengineProjectsLocationsOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

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
    res, err := s.Projects.AppengineProjectsLocationsOperationsList(ctx, operations.AppengineProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("voluptatem"),
        Filter: sdk.String("cumque"),
        Key: sdk.String("soluta"),
        LocationsID: "nobis",
        OauthToken: sdk.String("et"),
        PageSize: sdk.Int64(903720),
        PageToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        ProjectsID: "veritatis",
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.AppengineProjectsLocationsOperationsListSecurity{
        Option1: &operations.AppengineProjectsLocationsOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

# Projects

### Available Operations

* [FirebasehostingProjectsSitesCreate](#firebasehostingprojectssitescreate) - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* [FirebasehostingProjectsSitesList](#firebasehostingprojectssiteslist) - Lists each Hosting Site associated with the specified parent Firebase project.

## FirebasehostingProjectsSitesCreate

Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.

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
    res, err := s.Projects.FirebasehostingProjectsSitesCreate(ctx, operations.FirebasehostingProjectsSitesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SiteInput: &shared.SiteInput{
            AppID: sdk.String("placeat"),
            Labels: map[string]string{
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("repellendus"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        SiteID: sdk.String("odit"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("at"),
    }, operations.FirebasehostingProjectsSitesCreateSecurity{
        Option1: &operations.FirebasehostingProjectsSitesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```

## FirebasehostingProjectsSitesList

Lists each Hosting Site associated with the specified parent Firebase project.

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
    res, err := s.Projects.FirebasehostingProjectsSitesList(ctx, operations.FirebasehostingProjectsSitesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("esse"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("porro"),
        PageSize: sdk.Int64(678880),
        PageToken: sdk.String("dicta"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.FirebasehostingProjectsSitesListSecurity{
        Option1: &operations.FirebasehostingProjectsSitesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSitesResponse != nil {
        // handle response
    }
}
```

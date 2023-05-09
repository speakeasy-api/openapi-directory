# Projects

### Available Operations

* [DfareportingProjectsGet](#dfareportingprojectsget) - Gets one project by ID.
* [DfareportingProjectsList](#dfareportingprojectslist) - Retrieves a list of projects, possibly filtered. This method supports paging .

## DfareportingProjectsGet

Gets one project by ID.

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
    res, err := s.Projects.DfareportingProjectsGet(ctx, operations.DfareportingProjectsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("adipisci"),
        ID: "f023c669-e6a6-4260-92eb-a057988c6720",
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illo",
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.DfareportingProjectsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Project != nil {
        // handle response
    }
}
```

## DfareportingProjectsList

Retrieves a list of projects, possibly filtered. This method supports paging .

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
    res, err := s.Projects.DfareportingProjectsList(ctx, operations.DfareportingProjectsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officia"),
        AdvertiserIds: []string{
            "alias",
            "eligendi",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("amet"),
        Ids: []string{
            "quo",
            "deleniti",
            "aliquid",
            "blanditiis",
        },
        Key: sdk.String("blanditiis"),
        MaxResults: sdk.Int64(986957),
        OauthToken: sdk.String("at"),
        PageToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "debitis",
        QuotaUser: sdk.String("nobis"),
        SearchString: sdk.String("vel"),
        SortField: operations.DfareportingProjectsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingProjectsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.DfareportingProjectsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectsListResponse != nil {
        // handle response
    }
}
```

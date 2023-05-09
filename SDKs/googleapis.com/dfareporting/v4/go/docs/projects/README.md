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
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("quis"),
        ID: "7988c672-0c31-403f-9a40-c0f3ec8688fd",
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nobis",
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("optio"),
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
        AccessToken: sdk.String("consectetur"),
        AdvertiserIds: []string{
            "dolores",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("alias"),
        Ids: []string{
            "mollitia",
            "animi",
            "officiis",
        },
        Key: sdk.String("vero"),
        MaxResults: sdk.Int64(921176),
        OauthToken: sdk.String("sit"),
        PageToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "labore",
        QuotaUser: sdk.String("accusamus"),
        SearchString: sdk.String("distinctio"),
        SortField: operations.DfareportingProjectsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingProjectsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("hic"),
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

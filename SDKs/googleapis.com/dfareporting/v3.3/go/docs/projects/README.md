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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("nostrum"),
        ID: "cb4bedef-3c12-47c3-9099-5528250dcbbc",
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "facilis",
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("dicta"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("atque"),
        AdvertiserIds: []string{
            "placeat",
            "beatae",
            "officiis",
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("saepe"),
        Ids: []string{
            "similique",
            "doloremque",
        },
        Key: sdk.String("autem"),
        MaxResults: sdk.Int64(95910),
        OauthToken: sdk.String("adipisci"),
        PageToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quasi",
        QuotaUser: sdk.String("placeat"),
        SearchString: sdk.String("maxime"),
        SortField: operations.DfareportingProjectsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingProjectsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("aut"),
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

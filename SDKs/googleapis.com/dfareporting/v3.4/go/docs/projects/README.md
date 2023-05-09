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
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("ipsa"),
        ID: "24b157f9-bb6e-4f72-a508-71d99b661a7d",
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illo",
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("nam"),
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
        AccessToken: sdk.String("impedit"),
        AdvertiserIds: []string{
            "facilis",
            "sed",
            "deleniti",
            "dolores",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("modi"),
        Ids: []string{
            "perspiciatis",
            "totam",
            "ipsam",
        },
        Key: sdk.String("alias"),
        MaxResults: sdk.Int64(921976),
        OauthToken: sdk.String("fugiat"),
        PageToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "doloribus",
        QuotaUser: sdk.String("dolore"),
        SearchString: sdk.String("est"),
        SortField: operations.DfareportingProjectsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingProjectsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("eligendi"),
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

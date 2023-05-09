# Files

### Available Operations

* [DfareportingFilesGet](#dfareportingfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [DfareportingFilesList](#dfareportingfileslist) - Lists files for a user profile.

## DfareportingFilesGet

Retrieves a report file by its report ID and file ID. This method supports media download.

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
    res, err := s.Files.DfareportingFilesGet(ctx, operations.DfareportingFilesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("porro"),
        FileID: "consequatur",
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        ReportID: "optio",
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DfareportingFilesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DfareportingFilesList

Lists files for a user profile.

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
    res, err := s.Files.DfareportingFilesList(ctx, operations.DfareportingFilesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("laudantium"),
        MaxResults: sdk.Int64(147883),
        OauthToken: sdk.String("corporis"),
        PageToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "necessitatibus",
        QuotaUser: sdk.String("explicabo"),
        Scope: operations.DfareportingFilesListScopeEnumAll.ToPointer(),
        SortField: operations.DfareportingFilesListSortFieldEnumLastModifiedTime.ToPointer(),
        SortOrder: operations.DfareportingFilesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("optio"),
    }, operations.DfareportingFilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileList != nil {
        // handle response
    }
}
```

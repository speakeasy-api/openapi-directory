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
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("repudiandae"),
        FileID: "accusantium",
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        ReportID: "natus",
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("sunt"),
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
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("cupiditate"),
        MaxResults: sdk.Int64(939368),
        OauthToken: sdk.String("nobis"),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "necessitatibus",
        QuotaUser: sdk.String("unde"),
        Scope: operations.DfareportingFilesListScopeEnumSharedWithMe.ToPointer(),
        SortField: operations.DfareportingFilesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingFilesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("eligendi"),
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

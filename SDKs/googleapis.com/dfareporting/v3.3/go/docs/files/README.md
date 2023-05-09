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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("modi"),
        FileID: "enim",
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        ReportID: "quibusdam",
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("maiores"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("enim"),
        MaxResults: sdk.Int64(55600),
        OauthToken: sdk.String("ipsa"),
        PageToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nesciunt",
        QuotaUser: sdk.String("aperiam"),
        Scope: operations.DfareportingFilesListScopeEnumSharedWithMe.ToPointer(),
        SortField: operations.DfareportingFilesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingFilesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("quia"),
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

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
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("quae"),
        FileID: "possimus",
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        ReportID: "minima",
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("et"),
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
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("laborum"),
        MaxResults: sdk.Int64(742739),
        OauthToken: sdk.String("quas"),
        PageToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eos",
        QuotaUser: sdk.String("quam"),
        Scope: operations.DfareportingFilesListScopeEnumMine.ToPointer(),
        SortField: operations.DfareportingFilesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingFilesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("quo"),
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

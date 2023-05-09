# Revisions

### Available Operations

* [DriveRevisionsDelete](#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [DriveRevisionsGet](#driverevisionsget) - Gets a revision's metadata or content by ID.
* [DriveRevisionsList](#driverevisionslist) - Lists a file's revisions.
* [DriveRevisionsUpdate](#driverevisionsupdate) - Updates a revision with patch semantics.

## DriveRevisionsDelete

Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

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
    res, err := s.Revisions.DriveRevisionsDelete(ctx, operations.DriveRevisionsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("voluptatibus"),
        FileID: "consequuntur",
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        RevisionID: "eos",
        UserIP: sdk.String("reprehenderit"),
    }, operations.DriveRevisionsDeleteSecurity{
        Option1: &operations.DriveRevisionsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DriveRevisionsGet

Gets a revision's metadata or content by ID.

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
    res, err := s.Revisions.DriveRevisionsGet(ctx, operations.DriveRevisionsGetRequest{
        AcknowledgeAbuse: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nostrum"),
        FileID: "neque",
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        RevisionID: "eligendi",
        UserIP: sdk.String("fugiat"),
    }, operations.DriveRevisionsGetSecurity{
        Option1: &operations.DriveRevisionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Revision != nil {
        // handle response
    }
}
```

## DriveRevisionsList

Lists a file's revisions.

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
    res, err := s.Revisions.DriveRevisionsList(ctx, operations.DriveRevisionsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("unde"),
        FileID: "officiis",
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("dolor"),
        PageSize: sdk.Int64(118041),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UserIP: sdk.String("vitae"),
    }, operations.DriveRevisionsListSecurity{
        Option1: &operations.DriveRevisionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevisionList != nil {
        // handle response
    }
}
```

## DriveRevisionsUpdate

Updates a revision with patch semantics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Revisions.DriveRevisionsUpdate(ctx, operations.DriveRevisionsUpdateRequest{
        Revision: &shared.Revision{
            ExportLinks: map[string]string{
                "esse": "fugiat",
                "ad": "aspernatur",
            },
            ID: sdk.String("5f77b114-eeb5-42ff-b85f-c37814d4c98e"),
            KeepForever: sdk.Bool(false),
            Kind: sdk.String("consequatur"),
            LastModifyingUser: &shared.User{
                DisplayName: sdk.String("maxime"),
                EmailAddress: sdk.String("aspernatur"),
                Kind: sdk.String("nam"),
                Me: sdk.Bool(false),
                PermissionID: sdk.String("expedita"),
                PhotoLink: sdk.String("quas"),
            },
            Md5Checksum: sdk.String("provident"),
            MimeType: sdk.String("repudiandae"),
            ModifiedTime: types.MustTimeFromString("2022-01-06T13:49:40.637Z"),
            OriginalFilename: sdk.String("corporis"),
            PublishAuto: sdk.Bool(false),
            Published: sdk.Bool(false),
            PublishedLink: sdk.String("vero"),
            PublishedOutsideDomain: sdk.Bool(false),
            Size: sdk.String("similique"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("repellendus"),
        FileID: "iure",
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        RevisionID: "commodi",
        UserIP: sdk.String("aut"),
    }, operations.DriveRevisionsUpdateSecurity{
        Option1: &operations.DriveRevisionsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Revision != nil {
        // handle response
    }
}
```

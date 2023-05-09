# Revisions

### Available Operations

* [DriveRevisionsDelete](#driverevisionsdelete) - Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
* [DriveRevisionsGet](#driverevisionsget) - Gets a specific revision.
* [DriveRevisionsList](#driverevisionslist) - Lists a file's revisions.
* [DriveRevisionsPatch](#driverevisionspatch) - Updates a revision.
* [DriveRevisionsUpdate](#driverevisionsupdate) - Updates a revision.

## DriveRevisionsDelete

Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.

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
        Fields: sdk.String("nulla"),
        FileID: "repudiandae",
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        RevisionID: "animi",
        UserIP: sdk.String("unde"),
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

Gets a specific revision.

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
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quae"),
        FileID: "eum",
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        RevisionID: "ratione",
        UserIP: sdk.String("blanditiis"),
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
        Fields: sdk.String("quidem"),
        FileID: "illum",
        Key: sdk.String("reiciendis"),
        MaxResults: sdk.Int64(809567),
        OauthToken: sdk.String("dolores"),
        PageToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nesciunt"),
        UserIP: sdk.String("quia"),
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

## DriveRevisionsPatch

Updates a revision.

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
    res, err := s.Revisions.DriveRevisionsPatch(ctx, operations.DriveRevisionsPatchRequest{
        Revision: &shared.Revision{
            DownloadURL: sdk.String("quidem"),
            Etag: sdk.String("voluptas"),
            ExportLinks: map[string]string{
                "laudantium": "dignissimos",
                "omnis": "omnis",
                "fugit": "dolorem",
                "quidem": "molestiae",
            },
            FileSize: sdk.String("debitis"),
            ID: sdk.String("13584f7a-e12c-4689-9f82-ce1157172305"),
            Kind: sdk.String("amet"),
            LastModifyingUser: &shared.User{
                DisplayName: sdk.String("voluptate"),
                EmailAddress: sdk.String("voluptate"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("pariatur"),
                PermissionID: sdk.String("minus"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("a"),
                },
            },
            LastModifyingUserName: sdk.String("fuga"),
            Md5Checksum: sdk.String("totam"),
            MimeType: sdk.String("cupiditate"),
            ModifiedDate: types.MustTimeFromString("2020-01-16T16:18:57.466Z"),
            OriginalFilename: sdk.String("omnis"),
            Pinned: sdk.Bool(false),
            PublishAuto: sdk.Bool(false),
            Published: sdk.Bool(false),
            PublishedLink: sdk.String("quam"),
            PublishedOutsideDomain: sdk.Bool(false),
            SelfLink: sdk.String("exercitationem"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("voluptates"),
        FileID: "sequi",
        Key: sdk.String("quis"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        RevisionID: "rem",
        UserIP: sdk.String("aliquid"),
    }, operations.DriveRevisionsPatchSecurity{
        Option1: &operations.DriveRevisionsPatchSecurityOption1{
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

## DriveRevisionsUpdate

Updates a revision.

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
            DownloadURL: sdk.String("aperiam"),
            Etag: sdk.String("perspiciatis"),
            ExportLinks: map[string]string{
                "itaque": "unde",
            },
            FileSize: sdk.String("cumque"),
            ID: sdk.String("3ddc5f11-1dea-4102-ad54-1a4d190feb21"),
            Kind: sdk.String("odio"),
            LastModifyingUser: &shared.User{
                DisplayName: sdk.String("quas"),
                EmailAddress: sdk.String("ipsa"),
                IsAuthenticatedUser: sdk.Bool(false),
                Kind: sdk.String("distinctio"),
                PermissionID: sdk.String("placeat"),
                Picture: &shared.UserPicture{
                    URL: sdk.String("quod"),
                },
            },
            LastModifyingUserName: sdk.String("eligendi"),
            Md5Checksum: sdk.String("sit"),
            MimeType: sdk.String("possimus"),
            ModifiedDate: types.MustTimeFromString("2021-07-28T04:05:19.840Z"),
            OriginalFilename: sdk.String("assumenda"),
            Pinned: sdk.Bool(false),
            PublishAuto: sdk.Bool(false),
            Published: sdk.Bool(false),
            PublishedLink: sdk.String("illum"),
            PublishedOutsideDomain: sdk.Bool(false),
            SelfLink: sdk.String("soluta"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("magnam"),
        FileID: "laudantium",
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        RevisionID: "corrupti",
        UserIP: sdk.String("reiciendis"),
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

# Changes

### Available Operations

* [DriveChangesGetStartPageToken](#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [DriveChangesList](#drivechangeslist) - Lists the changes for a user or shared drive.
* [DriveChangesWatch](#drivechangeswatch) - Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

## DriveChangesGetStartPageToken

Gets the starting pageToken for listing future changes.

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
    res, err := s.Changes.DriveChangesGetStartPageToken(ctx, operations.DriveChangesGetStartPageTokenRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("ipsa"),
        UserIP: sdk.String("delectus"),
    }, operations.DriveChangesGetStartPageTokenSecurity{
        Option1: &operations.DriveChangesGetStartPageTokenSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartPageToken != nil {
        // handle response
    }
}
```

## DriveChangesList

Lists the changes for a user or shared drive.

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
    res, err := s.Changes.DriveChangesList(ctx, operations.DriveChangesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        IncludeCorpusRemovals: sdk.Bool(false),
        IncludeItemsFromAllDrives: sdk.Bool(false),
        IncludeLabels: sdk.String("molestiae"),
        IncludePermissionsForView: sdk.String("minus"),
        IncludeRemoved: sdk.Bool(false),
        IncludeTeamDriveItems: sdk.Bool(false),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        PageSize: sdk.Int64(479977),
        PageToken: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        RestrictToMyDrive: sdk.Bool(false),
        Spaces: sdk.String("recusandae"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("temporibus"),
        UserIP: sdk.String("ab"),
    }, operations.DriveChangesListSecurity{
        Option1: &operations.DriveChangesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChangeList != nil {
        // handle response
    }
}
```

## DriveChangesWatch

Subscribes to changes for a user. To use this method, you must include the pageToken query parameter.

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
    res, err := s.Changes.DriveChangesWatch(ctx, operations.DriveChangesWatchRequest{
        Channel: &shared.Channel{
            Address: sdk.String("0603 Will Shoals"),
            Expiration: sdk.String("odit"),
            ID: sdk.String("ddf7cc78-ca1b-4a92-8fc8-16742cb73920"),
            Kind: sdk.String("ad"),
            Params: map[string]string{
                "sed": "iste",
                "dolor": "natus",
                "laboriosam": "hic",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("saepe"),
            ResourceURI: sdk.String("fuga"),
            Token: sdk.String("in"),
            Type: sdk.String("corporis"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: sdk.String("iste"),
        Fields: sdk.String("iure"),
        IncludeCorpusRemovals: sdk.Bool(false),
        IncludeItemsFromAllDrives: sdk.Bool(false),
        IncludeLabels: sdk.String("saepe"),
        IncludePermissionsForView: sdk.String("quidem"),
        IncludeRemoved: sdk.Bool(false),
        IncludeTeamDriveItems: sdk.Bool(false),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("ipsa"),
        PageSize: sdk.Int64(969810),
        PageToken: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        RestrictToMyDrive: sdk.Bool(false),
        Spaces: sdk.String("laborum"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("dolores"),
        UserIP: sdk.String("dolorem"),
    }, operations.DriveChangesWatchSecurity{
        Option1: &operations.DriveChangesWatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```

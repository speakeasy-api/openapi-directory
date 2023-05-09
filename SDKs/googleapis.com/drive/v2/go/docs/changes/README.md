# Changes

### Available Operations

* [DriveChangesGet](#drivechangesget) - Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
* [DriveChangesGetStartPageToken](#drivechangesgetstartpagetoken) - Gets the starting pageToken for listing future changes.
* [DriveChangesList](#drivechangeslist) - Lists the changes for a user or shared drive.
* [DriveChangesWatch](#drivechangeswatch) - Subscribe to changes for a user.

## DriveChangesGet

Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.

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
    res, err := s.Changes.DriveChangesGet(ctx, operations.DriveChangesGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        ChangeID: "ab",
        DriveID: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("repellendus"),
        UserIP: sdk.String("sapiente"),
    }, operations.DriveChangesGetSecurity{
        Option1: &operations.DriveChangesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Change != nil {
        // handle response
    }
}
```

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
        DriveID: sdk.String("quo"),
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("molestiae"),
        UserIP: sdk.String("quod"),
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
        DriveID: sdk.String("quod"),
        Fields: sdk.String("esse"),
        IncludeCorpusRemovals: sdk.Bool(false),
        IncludeDeleted: sdk.Bool(false),
        IncludeItemsFromAllDrives: sdk.Bool(false),
        IncludeLabels: sdk.String("totam"),
        IncludePermissionsForView: sdk.String("porro"),
        IncludeSubscribed: sdk.Bool(false),
        IncludeTeamDriveItems: sdk.Bool(false),
        Key: sdk.String("dolorum"),
        MaxResults: sdk.Int64(118274),
        OauthToken: sdk.String("nam"),
        PageToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        Spaces: sdk.String("fugit"),
        StartChangeID: sdk.String("deleniti"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("hic"),
        UserIP: sdk.String("optio"),
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

Subscribe to changes for a user.

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
            Address: sdk.String("1442 Ona River"),
            Expiration: sdk.String("esse"),
            ID: sdk.String("39205929-396f-4ea7-996e-b10faaa2352c"),
            Kind: sdk.String("enim"),
            Params: map[string]string{
                "nemo": "minima",
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("doloribus"),
            ResourceURI: sdk.String("sapiente"),
            Token: sdk.String("architecto"),
            Type: sdk.String("mollitia"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DriveID: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        IncludeCorpusRemovals: sdk.Bool(false),
        IncludeDeleted: sdk.Bool(false),
        IncludeItemsFromAllDrives: sdk.Bool(false),
        IncludeLabels: sdk.String("consequuntur"),
        IncludePermissionsForView: sdk.String("repellat"),
        IncludeSubscribed: sdk.Bool(false),
        IncludeTeamDriveItems: sdk.Bool(false),
        Key: sdk.String("mollitia"),
        MaxResults: sdk.Int64(581850),
        OauthToken: sdk.String("numquam"),
        PageToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        Spaces: sdk.String("molestiae"),
        StartChangeID: sdk.String("velit"),
        SupportsAllDrives: sdk.Bool(false),
        SupportsTeamDrives: sdk.Bool(false),
        TeamDriveID: sdk.String("error"),
        UserIP: sdk.String("quia"),
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

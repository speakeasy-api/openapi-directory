# UserProfiles

### Available Operations

* [DfareportingUserProfilesGet](#dfareportinguserprofilesget) - Gets one user profile by ID.
* [DfareportingUserProfilesList](#dfareportinguserprofileslist) - Retrieves list of user profiles for a user.

## DfareportingUserProfilesGet

Gets one user profile by ID.

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
    res, err := s.UserProfiles.DfareportingUserProfilesGet(ctx, operations.DfareportingUserProfilesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "tempora",
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DfareportingUserProfilesGetSecurity{
        Option1: &operations.DfareportingUserProfilesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserProfile != nil {
        // handle response
    }
}
```

## DfareportingUserProfilesList

Retrieves list of user profiles for a user.

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
    res, err := s.UserProfiles.DfareportingUserProfilesList(ctx, operations.DfareportingUserProfilesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("quae"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("sed"),
    }, operations.DfareportingUserProfilesListSecurity{
        Option1: &operations.DfareportingUserProfilesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserProfileList != nil {
        // handle response
    }
}
```

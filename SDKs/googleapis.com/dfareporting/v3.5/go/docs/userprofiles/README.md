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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquid",
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("cupiditate"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("ipsa"),
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

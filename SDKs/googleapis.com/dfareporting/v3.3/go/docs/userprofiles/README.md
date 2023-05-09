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
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "asperiores",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("accusantium"),
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
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("quam"),
        Key: sdk.String("illo"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("accusamus"),
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

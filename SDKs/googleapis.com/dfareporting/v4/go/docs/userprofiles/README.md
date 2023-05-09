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
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("non"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eveniet",
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("corrupti"),
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
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("iusto"),
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

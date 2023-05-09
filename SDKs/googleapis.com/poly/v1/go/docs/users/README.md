# Users

### Available Operations

* [PolyUsersAssetsList](#polyusersassetslist) - Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.
* [PolyUsersLikedassetsList](#polyuserslikedassetslist) - Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.

## PolyUsersAssetsList

Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.

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
    res, err := s.Users.PolyUsersAssetsList(ctx, operations.PolyUsersAssetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        Format: sdk.String("fugit"),
        Key: sdk.String("deleniti"),
        Name: "Ms. Earnest Lebsack",
        OauthToken: sdk.String("modi"),
        OrderBy: sdk.String("qui"),
        PageSize: sdk.Int64(774234),
        PageToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("excepturi"),
        Visibility: operations.PolyUsersAssetsListVisibilityEnumVisibilityUnspecified.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserAssetsResponse != nil {
        // handle response
    }
}
```

## PolyUsersLikedassetsList

Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.

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
    res, err := s.Users.PolyUsersLikedassetsList(ctx, operations.PolyUsersLikedassetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("iste"),
        Format: sdk.String("dolor"),
        Key: sdk.String("natus"),
        Name: "May Turcotte",
        OauthToken: sdk.String("corporis"),
        OrderBy: sdk.String("iste"),
        PageSize: sdk.Int64(437032),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLikedAssetsResponse != nil {
        // handle response
    }
}
```

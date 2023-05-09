# PostUserInfos

### Available Operations

* [BloggerPostUserInfosGet](#bloggerpostuserinfosget) - Gets one post and user info pair, by post_id and user_id.
* [BloggerPostUserInfosList](#bloggerpostuserinfoslist) - Lists post and user info pairs.

## BloggerPostUserInfosGet

Gets one post and user info pair, by post_id and user_id.

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
    res, err := s.PostUserInfos.BloggerPostUserInfosGet(ctx, operations.BloggerPostUserInfosGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "consectetur",
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("minima"),
        MaxComments: sdk.Int64(53427),
        OauthToken: sdk.String("a"),
        PostID: "libero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("deleniti"),
        UserID: "impedit",
    }, operations.BloggerPostUserInfosGetSecurity{
        Option1: &operations.BloggerPostUserInfosGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUserInfo != nil {
        // handle response
    }
}
```

## BloggerPostUserInfosList

Lists post and user info pairs.

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
    res, err := s.PostUserInfos.BloggerPostUserInfosList(ctx, operations.BloggerPostUserInfosListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumProto.ToPointer(),
        BlogID: "inventore",
        Callback: sdk.String("non"),
        EndDate: sdk.String("et"),
        FetchBodies: sdk.Bool(false),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("laborum"),
        Labels: sdk.String("placeat"),
        MaxResults: sdk.Int64(245367),
        OauthToken: sdk.String("eum"),
        OrderBy: operations.BloggerPostUserInfosListOrderByEnumPublished.ToPointer(),
        PageToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        StartDate: sdk.String("assumenda"),
        Status: []BloggerPostUserInfosListStatusEnum{
            operations.BloggerPostUserInfosListStatusEnumDraft,
            operations.BloggerPostUserInfosListStatusEnumScheduled,
            operations.BloggerPostUserInfosListStatusEnumLive,
            operations.BloggerPostUserInfosListStatusEnumDraft,
        },
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("explicabo"),
        UserID: "provident",
        View: operations.BloggerPostUserInfosListViewEnumViewTypeUnspecified.ToPointer(),
    }, operations.BloggerPostUserInfosListSecurity{
        Option1: &operations.BloggerPostUserInfosListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostUserInfosList != nil {
        // handle response
    }
}
```

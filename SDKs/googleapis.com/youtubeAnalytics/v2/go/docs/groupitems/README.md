# GroupItems

### Available Operations

* [YoutubeAnalyticsGroupItemsDelete](#youtubeanalyticsgroupitemsdelete) - Removes an item from a group.
* [YoutubeAnalyticsGroupItemsInsert](#youtubeanalyticsgroupitemsinsert) - Creates a group item.
* [YoutubeAnalyticsGroupItemsList](#youtubeanalyticsgroupitemslist) - Returns a collection of group items that match the API request parameters.

## YoutubeAnalyticsGroupItemsDelete

Removes an item from a group.

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
    res, err := s.GroupItems.YoutubeAnalyticsGroupItemsDelete(ctx, operations.YoutubeAnalyticsGroupItemsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        ID: sdk.String("a1ba928f-c816-4742-8b73-9205929396fe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        OnBehalfOfContentOwner: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.YoutubeAnalyticsGroupItemsDeleteSecurity{
        Option1: &operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## YoutubeAnalyticsGroupItemsInsert

Creates a group item.

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
    res, err := s.GroupItems.YoutubeAnalyticsGroupItemsInsert(ctx, operations.YoutubeAnalyticsGroupItemsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GroupItem: &shared.GroupItem{
            Errors: &shared.Errors{
                Code: shared.ErrorsCodeEnumBadRequest.ToPointer(),
                Error: []shared.ErrorProto{
                    shared.ErrorProto{
                        Argument: []string{
                            "est",
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                        Code: sdk.String("dolorem"),
                        DebugInfo: sdk.String("corporis"),
                        Domain: sdk.String("explicabo"),
                        ExternalErrorMessage: sdk.String("nobis"),
                        Location: sdk.String("enim"),
                        LocationType: shared.ErrorProtoLocationTypeEnumOther.ToPointer(),
                    },
                },
                RequestID: sdk.String("nemo"),
            },
            Etag: sdk.String("minima"),
            GroupID: sdk.String("excepturi"),
            ID: sdk.String("07aff1a3-a2fa-4946-b739-251aa52c3f5a"),
            Kind: sdk.String("possimus"),
            Resource: &shared.GroupItemResource{
                ID: sdk.String("019da1ff-e78f-4097-b007-4f15471b5e6e"),
                Kind: sdk.String("quae"),
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("modi"),
        OnBehalfOfContentOwner: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.YoutubeAnalyticsGroupItemsInsertSecurity{
        Option1: &operations.YoutubeAnalyticsGroupItemsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupItem != nil {
        // handle response
    }
}
```

## YoutubeAnalyticsGroupItemsList

Returns a collection of group items that match the API request parameters.

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
    res, err := s.GroupItems.YoutubeAnalyticsGroupItemsList(ctx, operations.YoutubeAnalyticsGroupItemsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("incidunt"),
        GroupID: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        OnBehalfOfContentOwner: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.YoutubeAnalyticsGroupItemsListSecurity{
        Option1: &operations.YoutubeAnalyticsGroupItemsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupItemsResponse != nil {
        // handle response
    }
}
```

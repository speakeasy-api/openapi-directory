# Groups

### Available Operations

* [YoutubeAnalyticsGroupsDelete](#youtubeanalyticsgroupsdelete) - Deletes a group.
* [YoutubeAnalyticsGroupsInsert](#youtubeanalyticsgroupsinsert) - Creates a group.
* [YoutubeAnalyticsGroupsList](#youtubeanalyticsgroupslist) - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* [YoutubeAnalyticsGroupsUpdate](#youtubeanalyticsgroupsupdate) - Modifies a group. For example, you could change a group's title.

## YoutubeAnalyticsGroupsDelete

Deletes a group.

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
    res, err := s.Groups.YoutubeAnalyticsGroupsDelete(ctx, operations.YoutubeAnalyticsGroupsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("aliquid"),
        ID: sdk.String("9802d502-a94b-4b4f-a3c9-69e9a3efa77d"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("rerum"),
        OnBehalfOfContentOwner: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("facere"),
    }, operations.YoutubeAnalyticsGroupsDeleteSecurity{
        Option1: &operations.YoutubeAnalyticsGroupsDeleteSecurityOption1{
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

## YoutubeAnalyticsGroupsInsert

Creates a group.

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
    res, err := s.Groups.YoutubeAnalyticsGroupsInsert(ctx, operations.YoutubeAnalyticsGroupsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Group: &shared.Group{
            ContentDetails: &shared.GroupContentDetails{
                ItemCount: sdk.String("aliquid"),
                ItemType: sdk.String("laborum"),
            },
            Errors: &shared.Errors{
                Code: shared.ErrorsCodeEnumServiceUnavailable.ToPointer(),
                Error: []shared.ErrorProto{
                    shared.ErrorProto{
                        Argument: []string{
                            "enim",
                            "accusamus",
                            "delectus",
                        },
                        Code: sdk.String("quidem"),
                        DebugInfo: sdk.String("provident"),
                        Domain: sdk.String("nam"),
                        ExternalErrorMessage: sdk.String("id"),
                        Location: sdk.String("blanditiis"),
                        LocationType: shared.ErrorProtoLocationTypeEnumOther.ToPointer(),
                    },
                },
                RequestID: sdk.String("sapiente"),
            },
            Etag: sdk.String("amet"),
            ID: sdk.String("a6699707-4ba4-4469-b6e2-141959890afa"),
            Kind: sdk.String("ad"),
            Snippet: &shared.GroupSnippet{
                PublishedAt: sdk.String("eum"),
                Title: sdk.String("Mrs."),
            },
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("doloribus"),
        OnBehalfOfContentOwner: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.YoutubeAnalyticsGroupsInsertSecurity{
        Option1: &operations.YoutubeAnalyticsGroupsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## YoutubeAnalyticsGroupsList

Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.

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
    res, err := s.Groups.YoutubeAnalyticsGroupsList(ctx, operations.YoutubeAnalyticsGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("repudiandae"),
        ID: sdk.String("5b7fd2ed-0289-421c-9dc6-92601fb576b0"),
        Key: sdk.String("pariatur"),
        Mine: sdk.Bool(false),
        OauthToken: sdk.String("nemo"),
        OnBehalfOfContentOwner: sdk.String("voluptatibus"),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("aut"),
    }, operations.YoutubeAnalyticsGroupsListSecurity{
        Option1: &operations.YoutubeAnalyticsGroupsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## YoutubeAnalyticsGroupsUpdate

Modifies a group. For example, you could change a group's title.

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
    res, err := s.Groups.YoutubeAnalyticsGroupsUpdate(ctx, operations.YoutubeAnalyticsGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Group: &shared.Group{
            ContentDetails: &shared.GroupContentDetails{
                ItemCount: sdk.String("corporis"),
                ItemType: sdk.String("hic"),
            },
            Errors: &shared.Errors{
                Code: shared.ErrorsCodeEnumPreconditionFailed.ToPointer(),
                Error: []shared.ErrorProto{
                    shared.ErrorProto{
                        Argument: []string{
                            "quis",
                        },
                        Code: sdk.String("totam"),
                        DebugInfo: sdk.String("dignissimos"),
                        Domain: sdk.String("eaque"),
                        ExternalErrorMessage: sdk.String("quis"),
                        Location: sdk.String("nesciunt"),
                        LocationType: shared.ErrorProtoLocationTypeEnumPath.ToPointer(),
                    },
                    shared.ErrorProto{
                        Argument: []string{
                            "dolores",
                        },
                        Code: sdk.String("minus"),
                        DebugInfo: sdk.String("quam"),
                        Domain: sdk.String("dolor"),
                        ExternalErrorMessage: sdk.String("vero"),
                        Location: sdk.String("nostrum"),
                        LocationType: shared.ErrorProtoLocationTypeEnumParameter.ToPointer(),
                    },
                    shared.ErrorProto{
                        Argument: []string{
                            "omnis",
                            "facilis",
                            "perspiciatis",
                            "voluptatem",
                        },
                        Code: sdk.String("porro"),
                        DebugInfo: sdk.String("consequuntur"),
                        Domain: sdk.String("blanditiis"),
                        ExternalErrorMessage: sdk.String("error"),
                        Location: sdk.String("eaque"),
                        LocationType: shared.ErrorProtoLocationTypeEnumOther.ToPointer(),
                    },
                },
                RequestID: sdk.String("rerum"),
            },
            Etag: sdk.String("adipisci"),
            ID: sdk.String("fe49a8d9-cbf4-4863-b323-f9b77f3a4100"),
            Kind: sdk.String("iure"),
            Snippet: &shared.GroupSnippet{
                PublishedAt: sdk.String("odio"),
                Title: sdk.String("Mrs."),
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("eos"),
        OnBehalfOfContentOwner: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("ab"),
    }, operations.YoutubeAnalyticsGroupsUpdateSecurity{
        Option1: &operations.YoutubeAnalyticsGroupsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

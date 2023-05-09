# Timeline

### Available Operations

* [MirrorTimelineAttachmentsDelete](#mirrortimelineattachmentsdelete) - Deletes an attachment from a timeline item.
* [MirrorTimelineAttachmentsGet](#mirrortimelineattachmentsget) - Retrieves an attachment on a timeline item by item ID and attachment ID.
* [MirrorTimelineAttachmentsInsert](#mirrortimelineattachmentsinsert) - Adds a new attachment to a timeline item.
* [MirrorTimelineAttachmentsList](#mirrortimelineattachmentslist) - Returns a list of attachments for a timeline item.
* [MirrorTimelineDelete](#mirrortimelinedelete) - Deletes a timeline item.
* [MirrorTimelineGet](#mirrortimelineget) - Gets a single timeline item by ID.
* [MirrorTimelineInsert](#mirrortimelineinsert) - Inserts a new item into the timeline.
* [MirrorTimelineList](#mirrortimelinelist) - Retrieves a list of timeline items for the authenticated user.
* [MirrorTimelinePatch](#mirrortimelinepatch) - Updates a timeline item in place. This method supports patch semantics.
* [MirrorTimelineUpdate](#mirrortimelineupdate) - Updates a timeline item in place.

## MirrorTimelineAttachmentsDelete

Deletes an attachment from a timeline item.

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
    res, err := s.Timeline.MirrorTimelineAttachmentsDelete(ctx, operations.MirrorTimelineAttachmentsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        AttachmentID: "laborum",
        Fields: sdk.String("placeat"),
        ItemID: "velit",
        Key: sdk.String("eum"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UserIP: sdk.String("quas"),
    }, operations.MirrorTimelineAttachmentsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MirrorTimelineAttachmentsGet

Retrieves an attachment on a timeline item by item ID and attachment ID.

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
    res, err := s.Timeline.MirrorTimelineAttachmentsGet(ctx, operations.MirrorTimelineAttachmentsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        AttachmentID: "assumenda",
        Fields: sdk.String("nulla"),
        ItemID: "voluptas",
        Key: sdk.String("libero"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UserIP: sdk.String("numquam"),
    }, operations.MirrorTimelineAttachmentsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorTimelineAttachmentsInsert

Adds a new attachment to a timeline item.

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
    res, err := s.Timeline.MirrorTimelineAttachmentsInsert(ctx, operations.MirrorTimelineAttachmentsInsertRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("explicabo"),
        ItemID: "provident",
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UserIP: sdk.String("odio"),
    }, operations.MirrorTimelineAttachmentsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorTimelineAttachmentsList

Returns a list of attachments for a timeline item.

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
    res, err := s.Timeline.MirrorTimelineAttachmentsList(ctx, operations.MirrorTimelineAttachmentsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eius"),
        ItemID: "esse",
        Key: sdk.String("esse"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UserIP: sdk.String("reprehenderit"),
    }, operations.MirrorTimelineAttachmentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorTimelineDelete

Deletes a timeline item.

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
    res, err := s.Timeline.MirrorTimelineDelete(ctx, operations.MirrorTimelineDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quidem"),
        ID: "d466d28c-10ab-43cd-8a42-51904e523c7e",
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UserIP: sdk.String("dignissimos"),
    }, operations.MirrorTimelineDeleteSecurity{
        Option1: &operations.MirrorTimelineDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## MirrorTimelineGet

Gets a single timeline item by ID.

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
    res, err := s.Timeline.MirrorTimelineGet(ctx, operations.MirrorTimelineGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("inventore"),
        ID: "78e4796f-2a70-4c68-8282-aa482562f222",
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UserIP: sdk.String("et"),
    }, operations.MirrorTimelineGetSecurity{
        Option1: &operations.MirrorTimelineGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorTimelineInsert

Inserts a new item into the timeline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Timeline.MirrorTimelineInsert(ctx, operations.MirrorTimelineInsertRequest{
        RequestBody: []byte("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UserIP: sdk.String("quod"),
    }, operations.MirrorTimelineInsertSecurity{
        Option1: &operations.MirrorTimelineInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorTimelineList

Retrieves a list of timeline items for the authenticated user.

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
    res, err := s.Timeline.MirrorTimelineList(ctx, operations.MirrorTimelineListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        BundleID: sdk.String("nam"),
        Fields: sdk.String("vero"),
        IncludeDeleted: sdk.Bool(false),
        Key: sdk.String("aliquid"),
        MaxResults: sdk.Int64(93459),
        OauthToken: sdk.String("saepe"),
        OrderBy: operations.MirrorTimelineListOrderByEnumDisplayTime.ToPointer(),
        PageToken: sdk.String("harum"),
        PinnedOnly: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        SourceItemID: sdk.String("rerum"),
        UserIP: sdk.String("occaecati"),
    }, operations.MirrorTimelineListSecurity{
        Option1: &operations.MirrorTimelineListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorTimelinePatch

Updates a timeline item in place. This method supports patch semantics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Timeline.MirrorTimelinePatch(ctx, operations.MirrorTimelinePatchRequest{
        TimelineItem: &shared.TimelineItem{
            Attachments: []shared.Attachment{
                shared.Attachment{
                    ContentType: sdk.String("distinctio"),
                    ContentURL: sdk.String("eligendi"),
                    ID: sdk.String("0ab3c20c-4f37-489f-9871-f99dd2efd121"),
                    IsProcessingContent: sdk.Bool(false),
                },
                shared.Attachment{
                    ContentType: sdk.String("similique"),
                    ContentURL: sdk.String("culpa"),
                    ID: sdk.String("6f1e674b-db04-4f15-b560-82d68ea19f1d"),
                    IsProcessingContent: sdk.Bool(false),
                },
            },
            BundleID: sdk.String("et"),
            CanonicalURL: sdk.String("voluptate"),
            Created: types.MustTimeFromString("2022-09-03T18:06:00.164Z"),
            Creator: &shared.Contact{
                AcceptCommands: []shared.Command{
                    shared.Command{
                        Type: sdk.String("consectetur"),
                    },
                },
                AcceptTypes: []string{
                    "iste",
                },
                DisplayName: sdk.String("temporibus"),
                ID: sdk.String("08086a18-4039-44c2-a071-f93f5f0642da"),
                ImageUrls: []string{
                    "dignissimos",
                    "officia",
                    "asperiores",
                    "nemo",
                },
                Kind: sdk.String("quae"),
                PhoneNumber: sdk.String("quaerat"),
                Priority: sdk.Int64(783235),
                SharingFeatures: []string{
                    "labore",
                    "ab",
                    "adipisci",
                    "fuga",
                },
                Source: sdk.String("id"),
                SpeakableName: sdk.String("suscipit"),
                Type: sdk.String("velit"),
            },
            DisplayTime: types.MustTimeFromString("2021-09-01T22:08:53.618Z"),
            Etag: sdk.String("recusandae"),
            HTML: sdk.String("totam"),
            ID: sdk.String("d67864db-b675-4fd5-a60b-375ed4f6fbee"),
            InReplyTo: sdk.String("dolore"),
            IsBundleCover: sdk.Bool(false),
            IsDeleted: sdk.Bool(false),
            IsPinned: sdk.Bool(false),
            Kind: sdk.String("sunt"),
            Location: &shared.Location{
                Accuracy: sdk.Float64(9920.12),
                Address: sdk.String("22149 Feest Harbor"),
                DisplayName: sdk.String("harum"),
                ID: sdk.String("60eb1ea4-2655-45ba-bc28-744ed53b88f3"),
                Kind: sdk.String("culpa"),
                Latitude: sdk.Float64(5485.19),
                Longitude: sdk.Float64(8672.9),
                Timestamp: types.MustTimeFromString("2021-02-13T15:31:34.151Z"),
            },
            MenuItems: []shared.MenuItem{
                shared.MenuItem{
                    Action: sdk.String("nobis"),
                    ContextualCommand: sdk.String("sit"),
                    ID: sdk.String("b2f2fb7b-194a-4276-b269-16fe1f08f429"),
                    Payload: sdk.String("eius"),
                    RemoveWhenSelected: sdk.Bool(false),
                    Values: []shared.MenuValue{
                        shared.MenuValue{
                            DisplayName: sdk.String("ipsum"),
                            IconURL: sdk.String("ea"),
                            State: sdk.String("occaecati"),
                        },
                        shared.MenuValue{
                            DisplayName: sdk.String("quos"),
                            IconURL: sdk.String("voluptatibus"),
                            State: sdk.String("tempora"),
                        },
                        shared.MenuValue{
                            DisplayName: sdk.String("tempora"),
                            IconURL: sdk.String("voluptate"),
                            State: sdk.String("reiciendis"),
                        },
                        shared.MenuValue{
                            DisplayName: sdk.String("ex"),
                            IconURL: sdk.String("sit"),
                            State: sdk.String("non"),
                        },
                    },
                },
                shared.MenuItem{
                    Action: sdk.String("officiis"),
                    ContextualCommand: sdk.String("praesentium"),
                    ID: sdk.String("b445e80c-a55e-4fd2-8e45-7e1858b6a89f"),
                    Payload: sdk.String("expedita"),
                    RemoveWhenSelected: sdk.Bool(false),
                    Values: []shared.MenuValue{
                        shared.MenuValue{
                            DisplayName: sdk.String("neque"),
                            IconURL: sdk.String("dolorum"),
                            State: sdk.String("nostrum"),
                        },
                        shared.MenuValue{
                            DisplayName: sdk.String("officia"),
                            IconURL: sdk.String("dolorum"),
                            State: sdk.String("corrupti"),
                        },
                        shared.MenuValue{
                            DisplayName: sdk.String("accusamus"),
                            IconURL: sdk.String("tempora"),
                            State: sdk.String("atque"),
                        },
                        shared.MenuValue{
                            DisplayName: sdk.String("fugit"),
                            IconURL: sdk.String("ut"),
                            State: sdk.String("fugiat"),
                        },
                    },
                },
            },
            Notification: &shared.NotificationConfig{
                DeliveryTime: types.MustTimeFromString("2022-05-14T04:54:08.545Z"),
                Level: sdk.String("expedita"),
            },
            PinScore: sdk.Int(299643),
            Recipients: []shared.Contact{
                shared.Contact{
                    AcceptCommands: []shared.Command{
                        shared.Command{
                            Type: sdk.String("ipsam"),
                        },
                        shared.Command{
                            Type: sdk.String("sit"),
                        },
                    },
                    AcceptTypes: []string{
                        "quas",
                        "repudiandae",
                        "corporis",
                    },
                    DisplayName: sdk.String("et"),
                    ID: sdk.String("862065e9-04f3-4b11-94b8-abf603a79f9d"),
                    ImageUrls: []string{
                        "voluptates",
                        "perferendis",
                        "est",
                        "quidem",
                    },
                    Kind: sdk.String("reprehenderit"),
                    PhoneNumber: sdk.String("facere"),
                    Priority: sdk.Int64(685092),
                    SharingFeatures: []string{
                        "mollitia",
                        "veniam",
                        "voluptatem",
                    },
                    Source: sdk.String("quisquam"),
                    SpeakableName: sdk.String("repudiandae"),
                    Type: sdk.String("quasi"),
                },
            },
            SelfLink: sdk.String("atque"),
            SourceItemID: sdk.String("reprehenderit"),
            SpeakableText: sdk.String("asperiores"),
            SpeakableType: sdk.String("totam"),
            Text: sdk.String("suscipit"),
            Title: sdk.String("Miss"),
            Updated: types.MustTimeFromString("2022-09-23T11:31:21.970Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("esse"),
        ID: "3d689eee-9526-4f8d-986e-881ead4f0e10",
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UserIP: sdk.String("laboriosam"),
    }, operations.MirrorTimelinePatchSecurity{
        Option1: &operations.MirrorTimelinePatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## MirrorTimelineUpdate

Updates a timeline item in place.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Timeline.MirrorTimelineUpdate(ctx, operations.MirrorTimelineUpdateRequest{
        RequestBody: []byte("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("a"),
        ID: "94e29e97-3e92-42a5-ba15-be3e060807e2",
        Key: sdk.String("cum"),
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UserIP: sdk.String("ratione"),
    }, operations.MirrorTimelineUpdateSecurity{
        Option1: &operations.MirrorTimelineUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

# Messages

## Overview

Send or track messages to one contact, a group of contacts or your entire address book

### Available Operations

* [MessagesFetch](#messagesfetch) - Fetch message by id
* [MessagesFetchAll](#messagesfetchall) - Fetch messages
* [MessagesSend](#messagessend) - Send Messages

## MessagesFetch

Returns a single messag

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Messages.MessagesFetch(ctx, operations.MessagesFetchRequest{
        AccountID: "mollitia",
        MessageID: "occaecati",
    }, operations.MessagesFetchSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageResponse != nil {
        // handle response
    }
}
```

## MessagesFetchAll

Fetch messages

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Messages.MessagesFetchAll(ctx, operations.MessagesFetchAllRequest{
        AccountID: "numquam",
        ContactID: sdk.String("commodi"),
        ConversationID: sdk.String("quam"),
        Limit: sdk.Int64(474697),
        Offset: sdk.Int64(244425),
    }, operations.MessagesFetchAllSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagesResponse != nil {
        // handle response
    }
}
```

## MessagesSend

Send Messages

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
    res, err := s.Messages.MessagesSend(ctx, operations.MessagesSendRequest{
        SendMessagesRequest: &shared.SendMessagesRequest{
            Contacts: []shared.ContactRequest{
                shared.ContactRequest{
                    Attributes: map[string]interface{}{
                        "quis": "vitae",
                    },
                    Email: sdk.String("chris@sakari.io"),
                    FirstName: sdk.String("Chris"),
                    ID: sdk.String("aa52c3f5-ad01-49da-9ffe-78f097b0074f"),
                    LastName: sdk.String("Bloggs"),
                    Mobile: &shared.ContactRequestMobile{
                        Country: sdk.String("Brazil"),
                        Number: sdk.String("123-456-7890"),
                    },
                    Tags: []shared.Tag{
                        shared.Tag{
                            Tag: sdk.String("dolore"),
                            Visible: sdk.Bool(false),
                        },
                        shared.Tag{
                            Tag: sdk.String("iusto"),
                            Visible: sdk.Bool(false),
                        },
                    },
                },
                shared.ContactRequest{
                    Attributes: map[string]interface{}{
                        "harum": "enim",
                    },
                    Email: sdk.String("chris@sakari.io"),
                    FirstName: sdk.String("Chris"),
                    ID: sdk.String("e6e13b99-d488-4e1e-91e4-50ad2abd4426"),
                    LastName: sdk.String("Bloggs"),
                    Mobile: &shared.ContactRequestMobile{
                        Country: sdk.String("Mongolia"),
                        Number: sdk.String("123-456-7890"),
                    },
                    Tags: []shared.Tag{
                        shared.Tag{
                            Tag: sdk.String("perferendis"),
                            Visible: sdk.Bool(false),
                        },
                        shared.Tag{
                            Tag: sdk.String("magni"),
                            Visible: sdk.Bool(false),
                        },
                        shared.Tag{
                            Tag: sdk.String("assumenda"),
                            Visible: sdk.Bool(false),
                        },
                    },
                },
                shared.ContactRequest{
                    Attributes: map[string]interface{}{
                        "alias": "fugit",
                        "dolorum": "excepturi",
                    },
                    Email: sdk.String("chris@sakari.io"),
                    FirstName: sdk.String("Chris"),
                    ID: sdk.String("4bb4f63c-969e-49a3-afa7-7dfb14cd66ae"),
                    LastName: sdk.String("Bloggs"),
                    Mobile: &shared.ContactRequestMobile{
                        Country: sdk.String("Ecuador"),
                        Number: sdk.String("123-456-7890"),
                    },
                    Tags: []shared.Tag{
                        shared.Tag{
                            Tag: sdk.String("enim"),
                            Visible: sdk.Bool(false),
                        },
                        shared.Tag{
                            Tag: sdk.String("accusamus"),
                            Visible: sdk.Bool(false),
                        },
                        shared.Tag{
                            Tag: sdk.String("delectus"),
                            Visible: sdk.Bool(false),
                        },
                    },
                },
            },
            ConversationStrategy: sdk.String("quidem"),
            Conversations: []string{
                "nam",
                "id",
                "blanditiis",
            },
            Filters: &shared.SendMessagesRequestFilters{
                Attributes: []map[string]interface{}{
                    map[string]interface{}{
                        "amet": "deserunt",
                        "nisi": "vel",
                        "natus": "omnis",
                        "molestiae": "perferendis",
                    },
                    map[string]interface{}{
                        "magnam": "distinctio",
                        "id": "labore",
                    },
                    map[string]interface{}{
                        "suscipit": "natus",
                        "nobis": "eum",
                    },
                },
                Tags: []string{
                    "aspernatur",
                    "architecto",
                    "magnam",
                    "et",
                },
            },
            Media: []shared.SendMessagesRequestMedia{
                shared.SendMessagesRequestMedia{
                    URL: sdk.String("ullam"),
                },
                shared.SendMessagesRequestMedia{
                    URL: sdk.String("provident"),
                },
                shared.SendMessagesRequestMedia{
                    URL: sdk.String("quos"),
                },
            },
            PhoneNumberFilter: &shared.SendMessagesRequestPhoneNumberFilter{
                Group: &shared.SendMessagesRequestPhoneNumberFilterGroup{
                    ID: sdk.String("90afa563-e251-46fe-8c8b-711e5b7fd2ed"),
                },
            },
            Template: sdk.String("accusantium"),
            Type: shared.SendMessagesRequestTypeEnumSms.ToPointer(),
        },
        AccountID: "praesentium",
    }, operations.MessagesSendSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendMessagesResponse != nil {
        // handle response
    }
}
```

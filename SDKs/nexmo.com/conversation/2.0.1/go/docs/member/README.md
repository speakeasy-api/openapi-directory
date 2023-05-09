# Member

## Overview

Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.

### Available Operations

* [CreateMember](#createmember) - Create a member
* [DeleteMember](#deletemember) - Delete a member
* [GetMember](#getmember) - Retrieve a member
* [~~GetMembers~~](#getmembers) - List members :warning: **Deprecated**
* [UpdateMember](#updatemember) - Update a member

## CreateMember

Create a member

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Member.CreateMember(ctx, operations.CreateMemberRequest{
        RequestBody: &operations.CreateMemberRequestBody{
            Action: shared.MemberActionEnumJoin.ToPointer(),
            Channel: shared.Channel{
                From: &shared.ChannelFrom{},
                LegID: sdk.String("a595959595959595995"),
                LegIds: []shared.ChannelLegIds{
                    shared.ChannelLegIds{
                        LegID: sdk.String("a595959595959595995"),
                    },
                    shared.ChannelLegIds{
                        LegID: sdk.String("a595959595959595995"),
                    },
                },
                To: &shared.ChannelTo{},
                Type: shared.ChannelTypeEnumPhone.ToPointer(),
            },
            KnockingID: sdk.String("a972836a-450f-35fa-156c-52a2ab5b7d25"),
            Media: map[string]interface{}{
                "nisi": "recusandae",
                "temporibus": "ab",
                "quis": "veritatis",
            },
            MemberID: sdk.String("MEM-63f61863-4a51-4f6b-86e1-46edebio0391"),
            MemberIDInviting: sdk.String("MEM-63f61863-4a51-4f6b-86e1-46edebio0391"),
            UserID: "USR-63f61863-4a51-4f6b-86e1-46edebio0391",
        },
        ConversationID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMember201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteMember

Delete a member

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Member.DeleteMember(ctx, operations.DeleteMemberRequest{
        ConversationID: "perferendis",
        MemberID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMember200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetMember

Retrieve a member

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Member.GetMember(ctx, operations.GetMemberRequest{
        ConversationID: "repellendus",
        MemberID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMember200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~GetMembers~~

This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Member.GetMembers(ctx, operations.GetMembersRequest{
        ConversationID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMembers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateMember

Update a member

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Member.UpdateMember(ctx, operations.UpdateMemberRequest{
        RequestBody: &operations.UpdateMemberRequestBody{
            Action: shared.MemberActionEnumJoin.ToPointer(),
            Channel: &shared.Channel{
                From: &shared.ChannelFrom{},
                LegID: sdk.String("a595959595959595995"),
                LegIds: []shared.ChannelLegIds{
                    shared.ChannelLegIds{
                        LegID: sdk.String("a595959595959595995"),
                    },
                },
                To: &shared.ChannelTo{},
                Type: shared.ChannelTypeEnumPhone.ToPointer(),
            },
        },
        ConversationID: "at",
        MemberID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMember200ApplicationJSONObject != nil {
        // handle response
    }
}
```

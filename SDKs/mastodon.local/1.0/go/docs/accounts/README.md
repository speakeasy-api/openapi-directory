# Accounts

### Available Operations

* [GetAPIV1AccountsRelationships](#getapiv1accountsrelationships) - Sets a private note on a user.
* [GetAPIV1AccountsSearch](#getapiv1accountssearch) - Search for matching accounts by username or display name.
* [GetAPIV1AccountsVerifyCredentials](#getapiv1accountsverifycredentials) - Test to make sure that the user token works.
* [GetAPIV1AccountsID](#getapiv1accountsid)
* [GetAPIV1AccountsIDFeaturedTags](#getapiv1accountsidfeaturedtags) - Tags featured by this account.
* [GetAPIV1AccountsIDFollowers](#getapiv1accountsidfollowers) - Accounts which follow the given account, if network is not hidden by the account owner.
* [GetAPIV1AccountsIDFollowing](#getapiv1accountsidfollowing) - Accounts which the given account is following, if network is not hidden by the account owner.
* [GetAPIV1AccountsIDIdentityProofs](#getapiv1accountsididentityproofs) - Array of IdentityProof
* [GetAPIV1AccountsIDLists](#getapiv1accountsidlists) - User lists that you have added this account to.
* [GetAPIV1AccountsIDStatuses](#getapiv1accountsidstatuses) - Statuses posted to the given account.
* [PatchAPIV1AccountsUpdateCredentials](#patchapiv1accountsupdatecredentials) - Update the user's display and preferences.
* [PostAPIV1Accounts](#postapiv1accounts) - Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.
* [PostAPIV1AccountsIDBlock](#postapiv1accountsidblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [PostAPIV1AccountsIDFollow](#postapiv1accountsidfollow) - Follow the given account. Can also be used to update whether to show reblogs or enable notifications.
* [PostAPIV1AccountsIDMute](#postapiv1accountsidmute) - Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
* [PostAPIV1AccountsIDNote](#postapiv1accountsidnote) - Sets a private note on a user.
* [PostAPIV1AccountsIDPin](#postapiv1accountsidpin) - Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
* [PostAPIV1AccountsIDUnblock](#postapiv1accountsidunblock) - Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).
* [PostAPIV1AccountsIDUnfollow](#postapiv1accountsidunfollow) - Unfollow the given account.
* [PostAPIV1AccountsIDUnmute](#postapiv1accountsidunmute) - Unmute the given account.
* [PostAPIV1AccountsIDUnpin](#postapiv1accountsidunpin) - Remove the given account from the user's featured profiles.

## GetAPIV1AccountsRelationships

Sets a private note on a user.

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
    res, err := s.Accounts.GetAPIV1AccountsRelationships(ctx, operations.GetAPIV1AccountsRelationshipsRequest{
        ID: []string{
            "animi",
            "quas",
            "totam",
            "molestias",
        },
    }, operations.GetAPIV1AccountsRelationshipsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationships != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsSearch

Search for matching accounts by username or display name.

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
    res, err := s.Accounts.GetAPIV1AccountsSearch(ctx, operations.GetAPIV1AccountsSearchRequest{
        Following: sdk.Bool(false),
        Limit: sdk.Int64(484966),
        Q: "eaque",
        Resolve: sdk.String("saepe"),
    }, operations.GetAPIV1AccountsSearchSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsVerifyCredentials

Test to make sure that the user token works.

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
    res, err := s.Accounts.GetAPIV1AccountsVerifyCredentials(ctx, operations.GetAPIV1AccountsVerifyCredentialsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsID

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
    res, err := s.Accounts.GetAPIV1AccountsID(ctx, operations.GetAPIV1AccountsIDRequest{
        ID: "189dbb30-fcb3-43ea-855b-197cd44e2f52",
    }, operations.GetAPIV1AccountsIDSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsIDFeaturedTags

Tags featured by this account.

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
    res, err := s.Accounts.GetAPIV1AccountsIDFeaturedTags(ctx, operations.GetAPIV1AccountsIDFeaturedTagsRequest{
        ID: "d82d3513-bb6f-448b-a56b-cdb35ff2e4b2",
    }, operations.GetAPIV1AccountsIDFeaturedTagsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FeaturedTags != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsIDFollowers

Accounts which follow the given account, if network is not hidden by the account owner.

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
    res, err := s.Accounts.GetAPIV1AccountsIDFollowers(ctx, operations.GetAPIV1AccountsIDFollowersRequest{
        ID: "7537a8cd-9e73-419c-977d-525f77b114ee",
        Limit: sdk.Int64(734814),
        MaxID: sdk.String("veniam"),
        SinceID: sdk.String("eos"),
    }, operations.GetAPIV1AccountsIDFollowersSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsIDFollowing

Accounts which the given account is following, if network is not hidden by the account owner.

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
    res, err := s.Accounts.GetAPIV1AccountsIDFollowing(ctx, operations.GetAPIV1AccountsIDFollowingRequest{
        ID: "ff785fc3-7814-4d4c-98e0-c2bb89eb75da",
        Limit: sdk.Int64(833982),
        MaxID: sdk.String("iure"),
        SinceID: sdk.String("dolorem"),
    }, operations.GetAPIV1AccountsIDFollowingSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsIDIdentityProofs

Array of IdentityProof

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
    res, err := s.Accounts.GetAPIV1AccountsIDIdentityProofs(ctx, operations.GetAPIV1AccountsIDIdentityProofsRequest{
        ID: "6c600503-d8bb-4311-80f7-39ae9e057eb8",
    }, operations.GetAPIV1AccountsIDIdentityProofsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IdentityProofs != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsIDLists

User lists that you have added this account to.

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
    res, err := s.Accounts.GetAPIV1AccountsIDLists(ctx, operations.GetAPIV1AccountsIDListsRequest{
        ID: "09e28103-31f3-4981-94c7-00b607f3c93c",
    }, operations.GetAPIV1AccountsIDListsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lists != nil {
        // handle response
    }
}
```

## GetAPIV1AccountsIDStatuses

Statuses posted to the given account.

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
    res, err := s.Accounts.GetAPIV1AccountsIDStatuses(ctx, operations.GetAPIV1AccountsIDStatusesRequest{
        ID: "73b9da3f-2ced-4a7e-a3f2-257411faf4b7",
    }, operations.GetAPIV1AccountsIDStatusesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Statuses != nil {
        // handle response
    }
}
```

## PatchAPIV1AccountsUpdateCredentials

Update the user's display and preferences.

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
    res, err := s.Accounts.PatchAPIV1AccountsUpdateCredentials(ctx, []byte("exercitationem"), operations.PatchAPIV1AccountsUpdateCredentialsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## PostAPIV1Accounts

Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.

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
    res, err := s.Accounts.PostAPIV1Accounts(ctx, []byte("labore"), operations.PostAPIV1AccountsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAPIV1AccountsIDBlock

Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

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
    res, err := s.Accounts.PostAPIV1AccountsIDBlock(ctx, operations.PostAPIV1AccountsIDBlockRequest{
        ID: "4e472e80-2857-4a5b-8046-3a7d575f1400",
    }, operations.PostAPIV1AccountsIDBlockSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1AccountsIDFollow

Follow the given account. Can also be used to update whether to show reblogs or enable notifications.

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
    res, err := s.Accounts.PostAPIV1AccountsIDFollow(ctx, operations.PostAPIV1AccountsIDFollowRequest{
        RequestBody: []byte("eveniet"),
        ID: "764ad733-4ec1-4b78-9b36-a08088d100ef",
    }, operations.PostAPIV1AccountsIDFollowSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1AccountsIDMute

Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).

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
    res, err := s.Accounts.PostAPIV1AccountsIDMute(ctx, operations.PostAPIV1AccountsIDMuteRequest{
        RequestBody: []byte("mollitia"),
        ID: "da200ef0-422e-4b21-a4cf-9ab8366c723f",
    }, operations.PostAPIV1AccountsIDMuteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1AccountsIDNote

Sets a private note on a user.

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
    res, err := s.Accounts.PostAPIV1AccountsIDNote(ctx, operations.PostAPIV1AccountsIDNoteRequest{
        RequestBody: []byte("repellat"),
        ID: "da9e06be-e482-45c1-bc0e-115c80bff918",
    }, operations.PostAPIV1AccountsIDNoteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1AccountsIDPin

Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)

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
    res, err := s.Accounts.PostAPIV1AccountsIDPin(ctx, operations.PostAPIV1AccountsIDPinRequest{
        ID: "544ec42d-efcc-4e8f-9977-773e63562a7b",
    }, operations.PostAPIV1AccountsIDPinSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1AccountsIDUnblock

Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).

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
    res, err := s.Accounts.PostAPIV1AccountsIDUnblock(ctx, operations.PostAPIV1AccountsIDUnblockRequest{
        ID: "408f05e3-d48f-4daf-b13a-1f5fd94259c0",
    }, operations.PostAPIV1AccountsIDUnblockSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1AccountsIDUnfollow

Unfollow the given account.

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
    res, err := s.Accounts.PostAPIV1AccountsIDUnfollow(ctx, operations.PostAPIV1AccountsIDUnfollowRequest{
        ID: "b36f25ea-944f-43b7-96c1-1f6c37a51262",
    }, operations.PostAPIV1AccountsIDUnfollowSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1AccountsIDUnmute

Unmute the given account.

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
    res, err := s.Accounts.PostAPIV1AccountsIDUnmute(ctx, operations.PostAPIV1AccountsIDUnmuteRequest{
        ID: "43835bbc-05a2-43a4-9cef-c5fde10a0ce2",
    }, operations.PostAPIV1AccountsIDUnmuteSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

## PostAPIV1AccountsIDUnpin

Remove the given account from the user's featured profiles.

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
    res, err := s.Accounts.PostAPIV1AccountsIDUnpin(ctx, operations.PostAPIV1AccountsIDUnpinRequest{
        ID: "169e5100-19c6-4dc5-a347-62799bfbbe69",
    }, operations.PostAPIV1AccountsIDUnpinSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Relationship != nil {
        // handle response
    }
}
```

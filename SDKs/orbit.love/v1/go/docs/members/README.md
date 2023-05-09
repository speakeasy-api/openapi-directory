# Members

### Available Operations

* [DeleteWorkspaceSlugMembersMemberSlug](#deleteworkspaceslugmembersmemberslug) - Delete a member
* [DeleteWorkspaceSlugMembersMemberSlugIdentities](#deleteworkspaceslugmembersmemberslugidentities) - Remove identity from a member
* [GetWorkspaceSlugMembers](#getworkspaceslugmembers) - List members in a workspace
* [GetWorkspaceSlugMembersFind](#getworkspaceslugmembersfind) - Find a member by an identity
* [GetWorkspaceSlugMembersMemberSlug](#getworkspaceslugmembersmemberslug) - Get a member
* [GetWorkspaceSlugOrganizationsOrganizationIDMembers](#getworkspaceslugorganizationsorganizationidmembers) - List members in an organization
* [PostWorkspaceSlugMembers](#postworkspaceslugmembers) - Create or update a member
* [PostWorkspaceSlugMembersMemberSlugIdentities](#postworkspaceslugmembersmemberslugidentities) - Add identity to a member
* [PutWorkspaceSlugMembersMemberSlug](#putworkspaceslugmembersmemberslug) - Update a member

## DeleteWorkspaceSlugMembersMemberSlug

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Members.DeleteWorkspaceSlugMembersMemberSlug(ctx, operations.DeleteWorkspaceSlugMembersMemberSlugRequest{
        MemberSlug: "delectus",
        WorkspaceSlug: "eum",
    }, operations.DeleteWorkspaceSlugMembersMemberSlugSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkspaceSlugMembersMemberSlugIdentities

Remove identity from a member

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
    res, err := s.Members.DeleteWorkspaceSlugMembersMemberSlugIdentities(ctx, operations.DeleteWorkspaceSlugMembersMemberSlugIdentitiesRequest{
        Identity: &shared.Identity{
            Email: sdk.String("Nigel_Mayer@gmail.com"),
            Name: sdk.String("Perry Nikolaus"),
            Source: "a",
            SourceHost: sdk.String("dolorum"),
            UID: sdk.String("in"),
            URL: sdk.String("in"),
            Username: sdk.String("Rose.Wolff29"),
        },
        MemberSlug: "cumque",
        WorkspaceSlug: "facere",
    }, operations.DeleteWorkspaceSlugMembersMemberSlugIdentitiesSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspaceSlugMembers

List members in a workspace

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
    res, err := s.Members.GetWorkspaceSlugMembers(ctx, operations.GetWorkspaceSlugMembersRequest{
        ActivitiesCountMax: sdk.String("ea"),
        ActivitiesCountMin: sdk.String("aliquid"),
        ActivityType: operations.GetWorkspaceSlugMembersActivityTypeEnumInsidedConversationReplied.ToPointer(),
        Affiliation: operations.GetWorkspaceSlugMembersAffiliationEnumTeammate.ToPointer(),
        Cities: sdk.String("non"),
        Company: sdk.String("occaecati"),
        Countries: sdk.String("enim"),
        Direction: operations.GetWorkspaceSlugMembersDirectionEnumDesc.ToPointer(),
        EndDate: sdk.String("delectus"),
        Identity: operations.GetWorkspaceSlugMembersIdentityEnumDevto.ToPointer(),
        Items: operations.GetWorkspaceSlugMembersItemsEnumFifty.ToPointer(),
        MemberTags: sdk.String("nam"),
        Orbit: sdk.String("id"),
        Page: sdk.String("blanditiis"),
        Query: sdk.String("deleniti"),
        Regions: sdk.String("sapiente"),
        Relative: sdk.String("amet"),
        Sort: operations.GetWorkspaceSlugMembersSortEnumName.ToPointer(),
        StartDate: sdk.String("nisi"),
        Title: sdk.String("vel"),
        Type: sdk.String("natus"),
        WorkspaceSlug: "omnis",
    }, operations.GetWorkspaceSlugMembersSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspaceSlugMembersFind

Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.

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
    res, err := s.Members.GetWorkspaceSlugMembersFind(ctx, operations.GetWorkspaceSlugMembersFindRequest{
        Email: sdk.String("Aileen71@yahoo.com"),
        Github: sdk.String("id"),
        Source: sdk.String("labore"),
        SourceHost: sdk.String("labore"),
        UID: sdk.String("suscipit"),
        Username: sdk.String("Liana_Rohan"),
        WorkspaceSlug: "aspernatur",
    }, operations.GetWorkspaceSlugMembersFindSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspaceSlugMembersMemberSlug

Get a member

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
    res, err := s.Members.GetWorkspaceSlugMembersMemberSlug(ctx, operations.GetWorkspaceSlugMembersMemberSlugRequest{
        MemberSlug: "architecto",
        WorkspaceSlug: "magnam",
    }, operations.GetWorkspaceSlugMembersMemberSlugSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspaceSlugOrganizationsOrganizationIDMembers

List members in an organization

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
    res, err := s.Members.GetWorkspaceSlugOrganizationsOrganizationIDMembers(ctx, operations.GetWorkspaceSlugOrganizationsOrganizationIDMembersRequest{
        Items: operations.GetWorkspaceSlugOrganizationsOrganizationIDMembersItemsEnumTen.ToPointer(),
        OrganizationID: "excepturi",
        Page: sdk.String("ullam"),
        WorkspaceSlug: "provident",
    }, operations.GetWorkspaceSlugOrganizationsOrganizationIDMembersSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostWorkspaceSlugMembers

This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.

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
    res, err := s.Members.PostWorkspaceSlugMembers(ctx, operations.PostWorkspaceSlugMembersRequest{
        MemberAndIdentity: &shared.MemberAndIdentity{
            Identity: &shared.Identity{
                Email: sdk.String("Kiley_Bartoletti@yahoo.com"),
                Name: sdk.String("Tommy Kemmer"),
                Source: "odit",
                SourceHost: sdk.String("nemo"),
                UID: sdk.String("quasi"),
                URL: sdk.String("iure"),
                Username: sdk.String("Wilton80"),
            },
            Member: &shared.Member{
                Bio: sdk.String("deleniti"),
                Birthday: sdk.String("facilis"),
                Company: sdk.String("Bradtke - Bradtke"),
                Devto: sdk.String("repudiandae"),
                Email: sdk.String("Michael_Koss14@yahoo.com"),
                Github: sdk.String("saepe"),
                Linkedin: sdk.String("pariatur"),
                Location: sdk.String("accusantium"),
                Name: sdk.String("Irma Morissette DDS"),
                Pronouns: sdk.String("illum"),
                ShippingAddress: sdk.String("pariatur"),
                Slug: sdk.String("maxime"),
                TagList: sdk.String("ea"),
                Tags: sdk.String("excepturi"),
                TagsToAdd: sdk.String("odit"),
                Teammate: sdk.Bool(false),
                Title: sdk.String("Ms."),
                Tshirt: sdk.String("accusantium"),
                Twitter: sdk.String("ab"),
                URL: sdk.String("maiores"),
            },
        },
        WorkspaceSlug: "quidem",
    }, operations.PostWorkspaceSlugMembersSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostWorkspaceSlugMembersMemberSlugIdentities

Add identity to a member

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
    res, err := s.Members.PostWorkspaceSlugMembersMemberSlugIdentities(ctx, operations.PostWorkspaceSlugMembersMemberSlugIdentitiesRequest{
        Identity: &shared.Identity{
            Email: sdk.String("Jacey.Johnston86@yahoo.com"),
            Name: sdk.String("Camille Armstrong"),
            Source: "aut",
            SourceHost: sdk.String("cumque"),
            UID: sdk.String("corporis"),
            URL: sdk.String("hic"),
            Username: sdk.String("Morgan33"),
        },
        MemberSlug: "totam",
        WorkspaceSlug: "dignissimos",
    }, operations.PostWorkspaceSlugMembersMemberSlugIdentitiesSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutWorkspaceSlugMembersMemberSlug

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Members.PutWorkspaceSlugMembersMemberSlug(ctx, operations.PutWorkspaceSlugMembersMemberSlugRequest{
        Member: &shared.Member{
            Bio: sdk.String("eaque"),
            Birthday: sdk.String("quis"),
            Company: sdk.String("Daugherty Inc"),
            Devto: sdk.String("dolores"),
            Email: sdk.String("Jalyn.Fadel94@hotmail.com"),
            Github: sdk.String("recusandae"),
            Linkedin: sdk.String("omnis"),
            Location: sdk.String("facilis"),
            Name: sdk.String("George Sawayn"),
            Pronouns: sdk.String("error"),
            ShippingAddress: sdk.String("eaque"),
            Slug: sdk.String("occaecati"),
            TagList: sdk.String("rerum"),
            Tags: sdk.String("adipisci"),
            TagsToAdd: sdk.String("asperiores"),
            Teammate: sdk.Bool(false),
            Title: sdk.String("Dr."),
            Tshirt: sdk.String("modi"),
            Twitter: sdk.String("iste"),
            URL: sdk.String("dolorum"),
        },
        MemberSlug: "deleniti",
        WorkspaceSlug: "pariatur",
    }, operations.PutWorkspaceSlugMembersMemberSlugSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

# Activities

### Available Operations

* [DeleteWorkspaceSlugMembersMemberSlugActivitiesID](#deleteworkspaceslugmembersmemberslugactivitiesid) - Delete a post activity
* [GetWorkspaceSlugActivities](#getworkspaceslugactivities) - List activities for a workspace
* [GetWorkspaceSlugActivitiesID](#getworkspaceslugactivitiesid) - Get an activity in the workspace
* [GetWorkspaceSlugMembersMemberSlugActivities](#getworkspaceslugmembersmemberslugactivities) - List activities for a member
* [GetWorkspaceSlugOrganizationsOrganizationIDActivities](#getworkspaceslugorganizationsorganizationidactivities) - List member activities in an organization
* [PostWorkspaceSlugActivities](#postworkspaceslugactivities) - Create a Custom or a Content activity for a new or existing member
* [PostWorkspaceSlugMembersMemberSlugActivities](#postworkspaceslugmembersmemberslugactivities) - Create a Custom or a Content activity for a member
* [PutWorkspaceSlugMembersMemberSlugActivitiesID](#putworkspaceslugmembersmemberslugactivitiesid) - Update a custom activity for a member

## DeleteWorkspaceSlugMembersMemberSlugActivitiesID

Delete a post activity

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
    res, err := s.Activities.DeleteWorkspaceSlugMembersMemberSlugActivitiesID(ctx, operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDRequest{
        ID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
        MemberSlug: "esse",
        WorkspaceSlug: "ipsum",
    }, operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDSecurity{
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

## GetWorkspaceSlugActivities

List activities for a workspace

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
    res, err := s.Activities.GetWorkspaceSlugActivities(ctx, operations.GetWorkspaceSlugActivitiesRequest{
        ActivityType: operations.GetWorkspaceSlugActivitiesActivityTypeEnumInsidedQuestionReplied.ToPointer(),
        Affiliation: operations.GetWorkspaceSlugActivitiesAffiliationEnumMember.ToPointer(),
        Cities: sdk.String("perferendis"),
        Company: sdk.String("ad"),
        Countries: sdk.String("natus"),
        Direction: operations.GetWorkspaceSlugActivitiesDirectionEnumAsc.ToPointer(),
        EndDate: sdk.String("iste"),
        Identity: operations.GetWorkspaceSlugActivitiesIdentityEnumTwitter.ToPointer(),
        Items: operations.GetWorkspaceSlugActivitiesItemsEnumFifty.ToPointer(),
        MemberTags: sdk.String("laboriosam"),
        Orbit: sdk.String("hic"),
        Page: sdk.String("saepe"),
        Regions: sdk.String("fuga"),
        Relative: sdk.String("in"),
        Sort: operations.GetWorkspaceSlugActivitiesSortEnumOccurredAt.ToPointer(),
        StartDate: sdk.String("iste"),
        Title: sdk.String("iure"),
        Type: sdk.String("saepe"),
        WorkspaceSlug: "quidem",
    }, operations.GetWorkspaceSlugActivitiesSecurity{
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

## GetWorkspaceSlugActivitiesID

Get an activity in the workspace

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
    res, err := s.Activities.GetWorkspaceSlugActivitiesID(ctx, operations.GetWorkspaceSlugActivitiesIDRequest{
        ID: "10faaa23-52c5-4955-907a-ff1a3a2fa946",
        WorkspaceSlug: "quam",
    }, operations.GetWorkspaceSlugActivitiesIDSecurity{
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

## GetWorkspaceSlugMembersMemberSlugActivities

List activities for a member

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
    res, err := s.Activities.GetWorkspaceSlugMembersMemberSlugActivities(ctx, operations.GetWorkspaceSlugMembersMemberSlugActivitiesRequest{
        ActivityType: sdk.String("molestiae"),
        Direction: operations.GetWorkspaceSlugMembersMemberSlugActivitiesDirectionEnumAsc.ToPointer(),
        Items: operations.GetWorkspaceSlugMembersMemberSlugActivitiesItemsEnumFifty.ToPointer(),
        MemberSlug: "quia",
        Page: sdk.String("quis"),
        Sort: operations.GetWorkspaceSlugMembersMemberSlugActivitiesSortEnumOccurredAt.ToPointer(),
        Type: sdk.String("laborum"),
        WorkspaceSlug: "animi",
    }, operations.GetWorkspaceSlugMembersMemberSlugActivitiesSecurity{
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

## GetWorkspaceSlugOrganizationsOrganizationIDActivities

List member activities in an organization

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
    res, err := s.Activities.GetWorkspaceSlugOrganizationsOrganizationIDActivities(ctx, operations.GetWorkspaceSlugOrganizationsOrganizationIDActivitiesRequest{
        ActivityType: operations.GetWorkspaceSlugOrganizationsOrganizationIDActivitiesActivityTypeEnumDiscord.ToPointer(),
        Direction: operations.GetWorkspaceSlugOrganizationsOrganizationIDActivitiesDirectionEnumAsc.ToPointer(),
        Items: operations.GetWorkspaceSlugOrganizationsOrganizationIDActivitiesItemsEnumOneHundred.ToPointer(),
        OrganizationID: "sequi",
        Page: sdk.String("tenetur"),
        Sort: operations.GetWorkspaceSlugOrganizationsOrganizationIDActivitiesSortEnumOccurredAt.ToPointer(),
        WorkspaceSlug: "id",
    }, operations.GetWorkspaceSlugOrganizationsOrganizationIDActivitiesSecurity{
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

## PostWorkspaceSlugActivities

Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.

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
    res, err := s.Activities.PostWorkspaceSlugActivities(ctx, operations.PostWorkspaceSlugActivitiesRequest{
        ActivityAndIdentity: &shared.ActivityAndIdentity{
            Activity: &shared.ActivityAndIdentityActivity{},
            Identity: &shared.Identity{
                Email: sdk.String("Adrain_Boyer@hotmail.com"),
                Name: sdk.String("Ryan Witting"),
                Source: "nihil",
                SourceHost: sdk.String("praesentium"),
                UID: sdk.String("voluptatibus"),
                URL: sdk.String("ipsa"),
                Username: sdk.String("Lelah.Klein3"),
            },
        },
        WorkspaceSlug: "reprehenderit",
    }, operations.PostWorkspaceSlugActivitiesSecurity{
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

## PostWorkspaceSlugMembersMemberSlugActivities

Create a Custom or a Content activity for a member

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
    res, err := s.Activities.PostWorkspaceSlugMembersMemberSlugActivities(ctx, operations.PostWorkspaceSlugMembersMemberSlugActivitiesRequest{
        CustomOrPostActivity: &shared.CustomOrPostActivity{},
        MemberSlug: "ut",
        WorkspaceSlug: "maiores",
    }, operations.PostWorkspaceSlugMembersMemberSlugActivitiesSecurity{
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

## PutWorkspaceSlugMembersMemberSlugActivitiesID

Update a custom activity for a member

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
    res, err := s.Activities.PutWorkspaceSlugMembersMemberSlugActivitiesID(ctx, operations.PutWorkspaceSlugMembersMemberSlugActivitiesIDRequest{
        Activity: &shared.Activity{
            ActivityType: sdk.String("dicta"),
            ActivityTypeKey: sdk.String("corporis"),
            Description: sdk.String("dolore"),
            Key: sdk.String("iusto"),
            Link: sdk.String("dicta"),
            LinkText: sdk.String("harum"),
            OccurredAt: sdk.String("enim"),
            Properties: map[string]interface{}{
                "commodi": "repudiandae",
                "quae": "ipsum",
                "quidem": "molestias",
                "excepturi": "pariatur",
            },
            Title: "Mrs.",
            Weight: sdk.String("praesentium"),
        },
        ID: "8e1e91e4-50ad-42ab-9442-69802d502a94",
        MemberSlug: "facilis",
        WorkspaceSlug: "tempore",
    }, operations.PutWorkspaceSlugMembersMemberSlugActivitiesIDSecurity{
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

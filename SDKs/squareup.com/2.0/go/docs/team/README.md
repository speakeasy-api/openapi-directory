# Team

### Available Operations

* [BulkCreateTeamMembers](#bulkcreateteammembers) - BulkCreateTeamMembers
* [BulkUpdateTeamMembers](#bulkupdateteammembers) - BulkUpdateTeamMembers
* [CreateTeamMember](#createteammember) - CreateTeamMember
* [RetrieveTeamMember](#retrieveteammember) - RetrieveTeamMember
* [RetrieveWageSetting](#retrievewagesetting) - RetrieveWageSetting
* [SearchTeamMembers](#searchteammembers) - SearchTeamMembers
* [UpdateTeamMember](#updateteammember) - UpdateTeamMember
* [UpdateWageSetting](#updatewagesetting) - UpdateWageSetting

## BulkCreateTeamMembers

Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful creates.
This process is non-transactional and processes as much of the request as possible. If one of the creates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed create.

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-create-team-members).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Team.BulkCreateTeamMembers(ctx, shared.BulkCreateTeamMembersRequest{
        TeamMembers: map[string]shared.CreateTeamMemberRequest{
            "rem": shared.CreateTeamMemberRequest{
                IdempotencyKey: sdk.String("placeat"),
                TeamMember: &shared.TeamMember{
                    AssignedLocations: &shared.TeamMemberAssignedLocations{
                        AssignmentType: sdk.String("suscipit"),
                        LocationIds: []string{
                            "odit",
                            "alias",
                        },
                    },
                    CreatedAt: sdk.String("impedit"),
                    EmailAddress: sdk.String("ipsum"),
                    FamilyName: sdk.String("illo"),
                    GivenName: sdk.String("aperiam"),
                    ID: sdk.String("3f1a40c0-f3ec-4868-8fd8-ec6fc03128f0"),
                    IsOwner: sdk.Bool(false),
                    PhoneNumber: sdk.String("officia"),
                    ReferenceID: sdk.String("mollitia"),
                    Status: sdk.String("animi"),
                    UpdatedAt: sdk.String("officiis"),
                },
            },
            "vero": shared.CreateTeamMemberRequest{
                IdempotencyKey: sdk.String("repudiandae"),
                TeamMember: &shared.TeamMember{
                    AssignedLocations: &shared.TeamMemberAssignedLocations{
                        AssignmentType: sdk.String("sit"),
                        LocationIds: []string{
                            "labore",
                        },
                    },
                    CreatedAt: sdk.String("accusamus"),
                    EmailAddress: sdk.String("distinctio"),
                    FamilyName: sdk.String("dolorum"),
                    GivenName: sdk.String("voluptate"),
                    ID: sdk.String("bf8732be-509c-4508-b131-f06f0bce55a8"),
                    IsOwner: sdk.Bool(false),
                    PhoneNumber: sdk.String("ex"),
                    ReferenceID: sdk.String("voluptatum"),
                    Status: sdk.String("iure"),
                    UpdatedAt: sdk.String("veritatis"),
                },
            },
            "modi": shared.CreateTeamMemberRequest{
                IdempotencyKey: sdk.String("ratione"),
                TeamMember: &shared.TeamMember{
                    AssignedLocations: &shared.TeamMemberAssignedLocations{
                        AssignmentType: sdk.String("quisquam"),
                        LocationIds: []string{
                            "quam",
                            "iste",
                            "doloremque",
                        },
                    },
                    CreatedAt: sdk.String("ullam"),
                    EmailAddress: sdk.String("hic"),
                    FamilyName: sdk.String("asperiores"),
                    GivenName: sdk.String("ducimus"),
                    ID: sdk.String("97a5da66-4b7e-4778-a74b-aaa2832bb658"),
                    IsOwner: sdk.Bool(false),
                    PhoneNumber: sdk.String("laboriosam"),
                    ReferenceID: sdk.String("fugit"),
                    Status: sdk.String("illum"),
                    UpdatedAt: sdk.String("odit"),
                },
            },
        },
    }, operations.BulkCreateTeamMembersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCreateTeamMembersResponse != nil {
        // handle response
    }
}
```

## BulkUpdateTeamMembers

Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful updates.
This process is non-transactional and processes as much of the request as possible. If one of the updates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-update-team-members).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Team.BulkUpdateTeamMembers(ctx, shared.BulkUpdateTeamMembersRequest{
        TeamMembers: map[string]shared.UpdateTeamMemberRequest{
            "velit": shared.UpdateTeamMemberRequest{
                TeamMember: &shared.TeamMember{
                    AssignedLocations: &shared.TeamMemberAssignedLocations{
                        AssignmentType: sdk.String("veritatis"),
                        LocationIds: []string{
                            "molestias",
                            "distinctio",
                            "veritatis",
                            "tempora",
                        },
                    },
                    CreatedAt: sdk.String("deserunt"),
                    EmailAddress: sdk.String("deserunt"),
                    FamilyName: sdk.String("nisi"),
                    GivenName: sdk.String("harum"),
                    ID: sdk.String("dec7f444-232e-49a5-9ee1-acd72a89981b"),
                    IsOwner: sdk.Bool(false),
                    PhoneNumber: sdk.String("quis"),
                    ReferenceID: sdk.String("corrupti"),
                    Status: sdk.String("tenetur"),
                    UpdatedAt: sdk.String("repudiandae"),
                },
            },
            "ex": shared.UpdateTeamMemberRequest{
                TeamMember: &shared.TeamMember{
                    AssignedLocations: &shared.TeamMemberAssignedLocations{
                        AssignmentType: sdk.String("quos"),
                        LocationIds: []string{
                            "repudiandae",
                        },
                    },
                    CreatedAt: sdk.String("sunt"),
                    EmailAddress: sdk.String("maxime"),
                    FamilyName: sdk.String("aspernatur"),
                    GivenName: sdk.String("illum"),
                    ID: sdk.String("be23d58e-8247-4d12-ac9f-67678fa27958"),
                    IsOwner: sdk.Bool(false),
                    PhoneNumber: sdk.String("sequi"),
                    ReferenceID: sdk.String("commodi"),
                    Status: sdk.String("quam"),
                    UpdatedAt: sdk.String("dolor"),
                },
            },
            "voluptas": shared.UpdateTeamMemberRequest{
                TeamMember: &shared.TeamMember{
                    AssignedLocations: &shared.TeamMemberAssignedLocations{
                        AssignmentType: sdk.String("dolor"),
                        LocationIds: []string{
                            "est",
                            "aut",
                            "iusto",
                            "excepturi",
                        },
                    },
                    CreatedAt: sdk.String("doloremque"),
                    EmailAddress: sdk.String("natus"),
                    FamilyName: sdk.String("ea"),
                    GivenName: sdk.String("doloribus"),
                    ID: sdk.String("aeb86480-730d-48f8-b89d-9ca6075656fc"),
                    IsOwner: sdk.Bool(false),
                    PhoneNumber: sdk.String("alias"),
                    ReferenceID: sdk.String("debitis"),
                    Status: sdk.String("cum"),
                    UpdatedAt: sdk.String("earum"),
                },
            },
        },
    }, operations.BulkUpdateTeamMembersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkUpdateTeamMembersResponse != nil {
        // handle response
    }
}
```

## CreateTeamMember

Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
You must provide the following values in your request to this endpoint:
- `given_name`
- `family_name`

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#createteammember).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Team.CreateTeamMember(ctx, shared.CreateTeamMemberRequest{
        IdempotencyKey: sdk.String("ex"),
        TeamMember: &shared.TeamMember{
            AssignedLocations: &shared.TeamMemberAssignedLocations{
                AssignmentType: sdk.String("iusto"),
                LocationIds: []string{
                    "veniam",
                },
            },
            CreatedAt: sdk.String("corporis"),
            EmailAddress: sdk.String("debitis"),
            FamilyName: sdk.String("explicabo"),
            GivenName: sdk.String("assumenda"),
            ID: sdk.String("06a3070d-6e29-47f5-81fa-baaa7d801088"),
            IsOwner: sdk.Bool(false),
            PhoneNumber: sdk.String("eaque"),
            ReferenceID: sdk.String("quam"),
            Status: sdk.String("laboriosam"),
            UpdatedAt: sdk.String("asperiores"),
        },
    }, operations.CreateTeamMemberSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTeamMemberResponse != nil {
        // handle response
    }
}
```

## RetrieveTeamMember

Retrieves a `TeamMember` object for the given `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrieve-a-team-member).

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
    res, err := s.Team.RetrieveTeamMember(ctx, operations.RetrieveTeamMemberRequest{
        TeamMemberID: "delectus",
    }, operations.RetrieveTeamMemberSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveTeamMemberResponse != nil {
        // handle response
    }
}
```

## RetrieveWageSetting

Retrieves a `WageSetting` object for a team member specified
by `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).

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
    res, err := s.Team.RetrieveWageSetting(ctx, operations.RetrieveWageSettingRequest{
        TeamMemberID: "corporis",
    }, operations.RetrieveWageSettingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveWageSettingResponse != nil {
        // handle response
    }
}
```

## SearchTeamMembers

Returns a paginated list of `TeamMember` objects for a business.
The list can be filtered by the following:
- location IDs
- `status`

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Team.SearchTeamMembers(ctx, shared.SearchTeamMembersRequest{
        Cursor: sdk.String("tenetur"),
        Limit: sdk.Int64(389104),
        Query: &shared.SearchTeamMembersQuery{
            Filter: &shared.SearchTeamMembersFilter{
                LocationIds: []string{
                    "temporibus",
                    "quia",
                    "error",
                    "laudantium",
                },
                Status: sdk.String("ab"),
            },
        },
    }, operations.SearchTeamMembersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTeamMembersResponse != nil {
        // handle response
    }
}
```

## UpdateTeamMember

Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#update-a-team-member).

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
    res, err := s.Team.UpdateTeamMember(ctx, operations.UpdateTeamMemberRequest{
        UpdateTeamMemberRequest: shared.UpdateTeamMemberRequest{
            TeamMember: &shared.TeamMember{
                AssignedLocations: &shared.TeamMemberAssignedLocations{
                    AssignmentType: sdk.String("numquam"),
                    LocationIds: []string{
                        "quos",
                    },
                },
                CreatedAt: sdk.String("voluptatum"),
                EmailAddress: sdk.String("explicabo"),
                FamilyName: sdk.String("aliquid"),
                GivenName: sdk.String("perspiciatis"),
                ID: sdk.String("b6a70b0d-d82f-494f-bfbd-1e1e21ddc690"),
                IsOwner: sdk.Bool(false),
                PhoneNumber: sdk.String("sequi"),
                ReferenceID: sdk.String("deleniti"),
                Status: sdk.String("quidem"),
                UpdatedAt: sdk.String("dicta"),
            },
        },
        TeamMemberID: "quibusdam",
    }, operations.UpdateTeamMemberSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTeamMemberResponse != nil {
        // handle response
    }
}
```

## UpdateWageSetting

Creates or updates a `WageSetting` object. The object is created if a
`WageSetting` with the specified `team_member_id` does not exist. Otherwise,
it fully replaces the `WageSetting` object for the team member.
The `WageSetting` is returned on a successful update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).

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
    res, err := s.Team.UpdateWageSetting(ctx, operations.UpdateWageSettingRequest{
        UpdateWageSettingRequest: shared.UpdateWageSettingRequest{
            WageSetting: shared.WageSetting{
                CreatedAt: sdk.String("inventore"),
                IsOvertimeExempt: sdk.Bool(false),
                JobAssignments: []shared.JobAssignment{
                    shared.JobAssignment{
                        AnnualRate: &shared.Money{
                            Amount: sdk.Int64(467579),
                            Currency: sdk.String("quidem"),
                        },
                        HourlyRate: &shared.Money{
                            Amount: sdk.Int64(314769),
                            Currency: sdk.String("vitae"),
                        },
                        JobTitle: "Human Mobility Specialist",
                        PayType: "doloribus",
                        WeeklyHours: sdk.Int64(822577),
                    },
                    shared.JobAssignment{
                        AnnualRate: &shared.Money{
                            Amount: sdk.Int64(249861),
                            Currency: sdk.String("alias"),
                        },
                        HourlyRate: &shared.Money{
                            Amount: sdk.Int64(735371),
                            Currency: sdk.String("tenetur"),
                        },
                        JobTitle: "Chief Brand Engineer",
                        PayType: "eius",
                        WeeklyHours: sdk.Int64(583840),
                    },
                    shared.JobAssignment{
                        AnnualRate: &shared.Money{
                            Amount: sdk.Int64(24886),
                            Currency: sdk.String("minus"),
                        },
                        HourlyRate: &shared.Money{
                            Amount: sdk.Int64(959355),
                            Currency: sdk.String("odit"),
                        },
                        JobTitle: "Senior Marketing Director",
                        PayType: "aliquam",
                        WeeklyHours: sdk.Int64(663840),
                    },
                },
                TeamMemberID: sdk.String("omnis"),
                UpdatedAt: sdk.String("ad"),
                Version: sdk.Int64(601227),
            },
        },
        TeamMemberID: "consequatur",
    }, operations.UpdateWageSettingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWageSettingResponse != nil {
        // handle response
    }
}
```

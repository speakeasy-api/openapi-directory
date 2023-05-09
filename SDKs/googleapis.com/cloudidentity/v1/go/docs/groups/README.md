# Groups

### Available Operations

* [CloudidentityGroupsCreate](#cloudidentitygroupscreate) - Creates a Group.
* [CloudidentityGroupsList](#cloudidentitygroupslist) - Lists the `Group` resources under a customer or namespace.
* [CloudidentityGroupsLookup](#cloudidentitygroupslookup) - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
* [CloudidentityGroupsMembershipsCheckTransitiveMembership](#cloudidentitygroupsmembershipschecktransitivemembership) - Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
* [CloudidentityGroupsMembershipsCreate](#cloudidentitygroupsmembershipscreate) - Creates a `Membership`.
* [CloudidentityGroupsMembershipsGetMembershipGraph](#cloudidentitygroupsmembershipsgetmembershipgraph) - Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
* [CloudidentityGroupsMembershipsList](#cloudidentitygroupsmembershipslist) - Lists the `Membership`s within a `Group`.
* [CloudidentityGroupsMembershipsLookup](#cloudidentitygroupsmembershipslookup) - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
* [CloudidentityGroupsMembershipsModifyMembershipRoles](#cloudidentitygroupsmembershipsmodifymembershiproles) - Modifies the `MembershipRole`s of a `Membership`.
* [CloudidentityGroupsMembershipsSearchDirectGroups](#cloudidentitygroupsmembershipssearchdirectgroups) - Searches direct groups of a member.
* [CloudidentityGroupsMembershipsSearchTransitiveGroups](#cloudidentitygroupsmembershipssearchtransitivegroups) - Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
* [CloudidentityGroupsMembershipsSearchTransitiveMemberships](#cloudidentitygroupsmembershipssearchtransitivememberships) - Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
* [CloudidentityGroupsSearch](#cloudidentitygroupssearch) - Searches for `Group` resources matching a specified query.

## CloudidentityGroupsCreate

Creates a Group.

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
    res, err := s.Groups.CloudidentityGroupsCreate(ctx, operations.CloudidentityGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GroupInput: &shared.GroupInput{
            Description: sdk.String("id"),
            DisplayName: sdk.String("blanditiis"),
            DynamicGroupMetadata: &shared.DynamicGroupMetadata{
                Queries: []shared.DynamicGroupQuery{
                    shared.DynamicGroupQuery{
                        Query: sdk.String("sapiente"),
                        ResourceType: shared.DynamicGroupQueryResourceTypeEnumResourceTypeUnspecified.ToPointer(),
                    },
                    shared.DynamicGroupQuery{
                        Query: sdk.String("deserunt"),
                        ResourceType: shared.DynamicGroupQueryResourceTypeEnumResourceTypeUnspecified.ToPointer(),
                    },
                    shared.DynamicGroupQuery{
                        Query: sdk.String("vel"),
                        ResourceType: shared.DynamicGroupQueryResourceTypeEnumUser.ToPointer(),
                    },
                },
                Status: &shared.DynamicGroupStatus{
                    Status: shared.DynamicGroupStatusStatusEnumUpdatingMemberships.ToPointer(),
                    StatusTime: sdk.String("molestiae"),
                },
            },
            GroupKey: &shared.EntityKey{
                ID: sdk.String("074ba446-9b6e-4214-9959-890afa563e25"),
                Namespace: sdk.String("quasi"),
            },
            Labels: map[string]string{
                "doloribus": "debitis",
                "eius": "maxime",
            },
            Parent: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("architecto"),
        InitialGroupConfig: operations.CloudidentityGroupsCreateInitialGroupConfigEnumEmpty.ToPointer(),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.CloudidentityGroupsCreateSecurity{
        Option1: &operations.CloudidentityGroupsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudidentityGroupsList

Lists the `Group` resources under a customer or namespace.

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
    res, err := s.Groups.CloudidentityGroupsList(ctx, operations.CloudidentityGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(166847),
        PageToken: sdk.String("sunt"),
        Parent: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("maxime"),
        View: operations.CloudidentityGroupsListViewEnumBasic.ToPointer(),
    }, operations.CloudidentityGroupsListSecurity{
        Option1: &operations.CloudidentityGroupsListSecurityOption1{
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

## CloudidentityGroupsLookup

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.

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
    res, err := s.Groups.CloudidentityGroupsLookup(ctx, operations.CloudidentityGroupsLookupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("ab"),
        GroupKeyID: sdk.String("maiores"),
        GroupKeyNamespace: sdk.String("quidem"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.CloudidentityGroupsLookupSecurity{
        Option1: &operations.CloudidentityGroupsLookupSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupGroupNameResponse != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsCheckTransitiveMembership

Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsCheckTransitiveMembership(ctx, operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("aut"),
        Parent: "cumque",
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("corporis"),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity{
        Option1: &operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckTransitiveMembershipResponse != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsCreate

Creates a `Membership`.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsCreate(ctx, operations.CloudidentityGroupsMembershipsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        MembershipInput: &shared.MembershipInput{
            PreferredMemberKey: &shared.EntityKey{
                ID: sdk.String("58705320-2c73-4d5f-a9b9-0c28909b3fe4"),
                Namespace: sdk.String("iste"),
            },
            Roles: []shared.MembershipRoleInput{
                shared.MembershipRoleInput{
                    ExpiryDetail: &shared.ExpiryDetail{
                        ExpireTime: sdk.String("deleniti"),
                    },
                    Name: sdk.String("Rene Rolfson"),
                },
                shared.MembershipRoleInput{
                    ExpiryDetail: &shared.ExpiryDetail{
                        ExpireTime: sdk.String("quaerat"),
                    },
                    Name: sdk.String("Gene Effertz"),
                },
                shared.MembershipRoleInput{
                    ExpiryDetail: &shared.ExpiryDetail{
                        ExpireTime: sdk.String("qui"),
                    },
                    Name: sdk.String("Mindy Marks"),
                },
            },
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("veritatis"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("odio"),
    }, operations.CloudidentityGroupsMembershipsCreateSecurity{
        Option1: &operations.CloudidentityGroupsMembershipsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsGetMembershipGraph

Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsGetMembershipGraph(ctx, operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("eos"),
        Parent: "atque",
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("sit"),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.CloudidentityGroupsMembershipsGetMembershipGraphSecurity{
        Option1: &operations.CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsList

Lists the `Membership`s within a `Group`.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsList(ctx, operations.CloudidentityGroupsMembershipsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(714697),
        PageToken: sdk.String("asperiores"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("id"),
        View: operations.CloudidentityGroupsMembershipsListViewEnumFull.ToPointer(),
    }, operations.CloudidentityGroupsMembershipsListSecurity{
        Option1: &operations.CloudidentityGroupsMembershipsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMembershipsResponse != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsLookup

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsLookup(ctx, operations.CloudidentityGroupsMembershipsLookupRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("optio"),
        Key: sdk.String("accusamus"),
        MemberKeyID: sdk.String("ad"),
        MemberKeyNamespace: sdk.String("saepe"),
        OauthToken: sdk.String("suscipit"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.CloudidentityGroupsMembershipsLookupSecurity{
        Option1: &operations.CloudidentityGroupsMembershipsLookupSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupMembershipNameResponse != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsModifyMembershipRoles

Modifies the `MembershipRole`s of a `Membership`.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsModifyMembershipRoles(ctx, operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModifyMembershipRolesRequestInput: &shared.ModifyMembershipRolesRequestInput{
            AddRoles: []shared.MembershipRoleInput{
                shared.MembershipRoleInput{
                    ExpiryDetail: &shared.ExpiryDetail{
                        ExpireTime: sdk.String("alias"),
                    },
                    Name: sdk.String("Alex Goodwin"),
                },
                shared.MembershipRoleInput{
                    ExpiryDetail: &shared.ExpiryDetail{
                        ExpireTime: sdk.String("officiis"),
                    },
                    Name: sdk.String("Jan Wilderman"),
                },
                shared.MembershipRoleInput{
                    ExpiryDetail: &shared.ExpiryDetail{
                        ExpireTime: sdk.String("iusto"),
                    },
                    Name: sdk.String("Rosalie White"),
                },
            },
            RemoveRoles: []string{
                "numquam",
                "enim",
                "dolorem",
                "sapiente",
            },
            UpdateRolesParams: []shared.UpdateMembershipRolesParamsInput{
                shared.UpdateMembershipRolesParamsInput{
                    FieldMask: sdk.String("nihil"),
                    MembershipRole: &shared.MembershipRoleInput{
                        ExpiryDetail: &shared.ExpiryDetail{
                            ExpireTime: sdk.String("sit"),
                        },
                        Name: sdk.String("Luis Cremin"),
                    },
                },
                shared.UpdateMembershipRolesParamsInput{
                    FieldMask: sdk.String("voluptas"),
                    MembershipRole: &shared.MembershipRoleInput{
                        ExpiryDetail: &shared.ExpiryDetail{
                            ExpireTime: sdk.String("deserunt"),
                        },
                        Name: sdk.String("Tracy Gottlieb"),
                    },
                },
                shared.UpdateMembershipRolesParamsInput{
                    FieldMask: sdk.String("maxime"),
                    MembershipRole: &shared.MembershipRoleInput{
                        ExpiryDetail: &shared.ExpiryDetail{
                            ExpireTime: sdk.String("pariatur"),
                        },
                        Name: sdk.String("Keith Padberg"),
                    },
                },
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("aliquid"),
        Name: "Felicia Spencer",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.CloudidentityGroupsMembershipsModifyMembershipRolesSecurity{
        Option1: &operations.CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyMembershipRolesResponse != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsSearchDirectGroups

Searches direct groups of a member.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsSearchDirectGroups(ctx, operations.CloudidentityGroupsMembershipsSearchDirectGroupsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("nobis"),
        OrderBy: sdk.String("et"),
        PageSize: sdk.Int64(903720),
        PageToken: sdk.String("ipsum"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("nobis"),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchDirectGroupsResponse != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsSearchTransitiveGroups

Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsSearchTransitiveGroups(ctx, operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(100294),
        PageToken: sdk.String("quae"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("quas"),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("est"),
    }, operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity{
        Option1: &operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTransitiveGroupsResponse != nil {
        // handle response
    }
}
```

## CloudidentityGroupsMembershipsSearchTransitiveMemberships

Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.

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
    res, err := s.Groups.CloudidentityGroupsMembershipsSearchTransitiveMemberships(ctx, operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("qui"),
        PageSize: sdk.Int64(63955),
        PageToken: sdk.String("laudantium"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity{
        Option1: &operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchTransitiveMembershipsResponse != nil {
        // handle response
    }
}
```

## CloudidentityGroupsSearch

Searches for `Group` resources matching a specified query.

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
    res, err := s.Groups.CloudidentityGroupsSearch(ctx, operations.CloudidentityGroupsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("consectetur"),
        PageSize: sdk.Int64(878870),
        PageToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("dignissimos"),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quod"),
        View: operations.CloudidentityGroupsSearchViewEnumBasic.ToPointer(),
    }, operations.CloudidentityGroupsSearchSecurity{
        Option1: &operations.CloudidentityGroupsSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchGroupsResponse != nil {
        // handle response
    }
}
```

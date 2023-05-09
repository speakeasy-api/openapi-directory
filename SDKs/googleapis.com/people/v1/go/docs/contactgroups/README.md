# ContactGroups

### Available Operations

* [PeopleContactGroupsBatchGet](#peoplecontactgroupsbatchget) - Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
* [PeopleContactGroupsCreate](#peoplecontactgroupscreate) - Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeopleContactGroupsDelete](#peoplecontactgroupsdelete) - Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeopleContactGroupsList](#peoplecontactgroupslist) - List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
* [PeopleContactGroupsMembersModify](#peoplecontactgroupsmembersmodify) - Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.
* [PeopleContactGroupsUpdate](#peoplecontactgroupsupdate) - Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

## PeopleContactGroupsBatchGet

Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.

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
    res, err := s.ContactGroups.PeopleContactGroupsBatchGet(ctx, operations.PeopleContactGroupsBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("minus"),
        GroupFields: sdk.String("placeat"),
        Key: sdk.String("voluptatum"),
        MaxMembers: sdk.Int64(479977),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        ResourceNames: []string{
            "temporibus",
            "ab",
            "quis",
            "veritatis",
        },
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.PeopleContactGroupsBatchGetSecurity{
        Option1: &operations.PeopleContactGroupsBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetContactGroupsResponse != nil {
        // handle response
    }
}
```

## PeopleContactGroupsCreate

Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

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
    res, err := s.ContactGroups.PeopleContactGroupsCreate(ctx, operations.PeopleContactGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateContactGroupRequestInput: &shared.CreateContactGroupRequestInput{
            ContactGroup: &shared.ContactGroupInput{
                ClientData: []shared.GroupClientData{
                    shared.GroupClientData{
                        Key: sdk.String("sapiente"),
                        Value: sdk.String("quo"),
                    },
                    shared.GroupClientData{
                        Key: sdk.String("odit"),
                        Value: sdk.String("at"),
                    },
                    shared.GroupClientData{
                        Key: sdk.String("at"),
                        Value: sdk.String("maiores"),
                    },
                    shared.GroupClientData{
                        Key: sdk.String("molestiae"),
                        Value: sdk.String("quod"),
                    },
                },
                Etag: sdk.String("quod"),
                Name: sdk.String("Deanna Sauer MD"),
                ResourceName: sdk.String("officia"),
            },
            ReadGroupFields: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
    }, operations.PeopleContactGroupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactGroup != nil {
        // handle response
    }
}
```

## PeopleContactGroupsDelete

Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

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
    res, err := s.ContactGroups.PeopleContactGroupsDelete(ctx, operations.PeopleContactGroupsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        DeleteContacts: sdk.Bool(false),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        ResourceName: "ad",
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    }, operations.PeopleContactGroupsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PeopleContactGroupsList

List all contact groups owned by the authenticated user. Members of the contact groups are not populated.

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
    res, err := s.ContactGroups.PeopleContactGroupsList(ctx, operations.PeopleContactGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        GroupFields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(359508),
        PageToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        SyncToken: sdk.String("saepe"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.PeopleContactGroupsListSecurity{
        Option1: &operations.PeopleContactGroupsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContactGroupsResponse != nil {
        // handle response
    }
}
```

## PeopleContactGroupsMembersModify

Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.

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
    res, err := s.ContactGroups.PeopleContactGroupsMembersModify(ctx, operations.PeopleContactGroupsMembersModifyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ModifyContactGroupMembersRequest: &shared.ModifyContactGroupMembersRequest{
            ResourceNamesToAdd: []string{
                "est",
                "mollitia",
                "laborum",
                "dolores",
            },
            ResourceNamesToRemove: []string{
                "corporis",
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        ResourceName: "accusantium",
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.PeopleContactGroupsMembersModifySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyContactGroupMembersResponse != nil {
        // handle response
    }
}
```

## PeopleContactGroupsUpdate

Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

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
    res, err := s.ContactGroups.PeopleContactGroupsUpdate(ctx, operations.PeopleContactGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateContactGroupRequestInput: &shared.UpdateContactGroupRequestInput{
            ContactGroup: &shared.ContactGroupInput{
                ClientData: []shared.GroupClientData{
                    shared.GroupClientData{
                        Key: sdk.String("architecto"),
                        Value: sdk.String("mollitia"),
                    },
                    shared.GroupClientData{
                        Key: sdk.String("dolorem"),
                        Value: sdk.String("culpa"),
                    },
                    shared.GroupClientData{
                        Key: sdk.String("consequuntur"),
                        Value: sdk.String("repellat"),
                    },
                    shared.GroupClientData{
                        Key: sdk.String("mollitia"),
                        Value: sdk.String("occaecati"),
                    },
                },
                Etag: sdk.String("numquam"),
                Name: sdk.String("Claudia Krajcik"),
                ResourceName: sdk.String("quia"),
            },
            ReadGroupFields: sdk.String("quis"),
            UpdateGroupFields: sdk.String("vitae"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("odit"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        ResourceName: "ipsam",
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.PeopleContactGroupsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactGroup != nil {
        // handle response
    }
}
```

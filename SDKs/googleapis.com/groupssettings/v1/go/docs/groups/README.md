# Groups

### Available Operations

* [GroupsSettingsGroupsGet](#groupssettingsgroupsget) - Gets one resource by id.
* [GroupsSettingsGroupsPatch](#groupssettingsgroupspatch) - Updates an existing resource. This method supports patch semantics.
* [GroupsSettingsGroupsUpdate](#groupssettingsgroupsupdate) - Updates an existing resource.

## GroupsSettingsGroupsGet

Gets one resource by id.

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
    res, err := s.Groups.GroupsSettingsGroupsGet(ctx, operations.GroupsSettingsGroupsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("vel"),
        GroupUniqueID: "error",
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UserIP: sdk.String("magnam"),
    }, operations.GroupsSettingsGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```

## GroupsSettingsGroupsPatch

Updates an existing resource. This method supports patch semantics.

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
    res, err := s.Groups.GroupsSettingsGroupsPatch(ctx, operations.GroupsSettingsGroupsPatchRequest{
        Groups: &shared.Groups{
            AllowExternalMembers: sdk.String("debitis"),
            AllowGoogleCommunication: sdk.String("ipsa"),
            AllowWebPosting: sdk.String("delectus"),
            ArchiveOnly: sdk.String("tempora"),
            CustomFooterText: sdk.String("suscipit"),
            CustomReplyTo: sdk.String("molestiae"),
            CustomRolesEnabledForSettingsToBeMerged: sdk.String("minus"),
            DefaultMessageDenyNotificationText: sdk.String("placeat"),
            DefaultSender: sdk.String("voluptatum"),
            Description: sdk.String("iusto"),
            Email: sdk.String("Glen.Walsh33@yahoo.com"),
            EnableCollaborativeInbox: sdk.String("veritatis"),
            FavoriteRepliesOnTop: sdk.String("deserunt"),
            IncludeCustomFooter: sdk.String("perferendis"),
            IncludeInGlobalAddressList: sdk.String("ipsam"),
            IsArchived: sdk.String("repellendus"),
            Kind: sdk.String("sapiente"),
            MaxMessageBytes: sdk.Int(778157),
            MembersCanPostAsTheGroup: sdk.String("odit"),
            MessageDisplayFont: sdk.String("at"),
            MessageModerationLevel: sdk.String("at"),
            Name: sdk.String("Javier Schmidt"),
            PrimaryLanguage: sdk.String("totam"),
            ReplyTo: sdk.String("porro"),
            SendMessageDenyNotification: sdk.String("dolorum"),
            ShowInGroupDirectory: sdk.String("dicta"),
            SpamModerationLevel: sdk.String("nam"),
            WhoCanAdd: sdk.String("officia"),
            WhoCanAddReferences: sdk.String("occaecati"),
            WhoCanApproveMembers: sdk.String("fugit"),
            WhoCanApproveMessages: sdk.String("deleniti"),
            WhoCanAssignTopics: sdk.String("hic"),
            WhoCanAssistContent: sdk.String("optio"),
            WhoCanBanUsers: sdk.String("totam"),
            WhoCanContactOwner: sdk.String("beatae"),
            WhoCanDeleteAnyPost: sdk.String("commodi"),
            WhoCanDeleteTopics: sdk.String("molestiae"),
            WhoCanDiscoverGroup: sdk.String("modi"),
            WhoCanEnterFreeFormTags: sdk.String("qui"),
            WhoCanHideAbuse: sdk.String("impedit"),
            WhoCanInvite: sdk.String("cum"),
            WhoCanJoin: sdk.String("esse"),
            WhoCanLeaveGroup: sdk.String("ipsum"),
            WhoCanLockTopics: sdk.String("excepturi"),
            WhoCanMakeTopicsSticky: sdk.String("aspernatur"),
            WhoCanMarkDuplicate: sdk.String("perferendis"),
            WhoCanMarkFavoriteReplyOnAnyTopic: sdk.String("ad"),
            WhoCanMarkFavoriteReplyOnOwnTopic: sdk.String("natus"),
            WhoCanMarkNoResponseNeeded: sdk.String("sed"),
            WhoCanModerateContent: sdk.String("iste"),
            WhoCanModerateMembers: sdk.String("dolor"),
            WhoCanModifyMembers: sdk.String("natus"),
            WhoCanModifyTagsAndCategories: sdk.String("laboriosam"),
            WhoCanMoveTopicsIn: sdk.String("hic"),
            WhoCanMoveTopicsOut: sdk.String("saepe"),
            WhoCanPostAnnouncements: sdk.String("fuga"),
            WhoCanPostMessage: sdk.String("in"),
            WhoCanTakeTopics: sdk.String("corporis"),
            WhoCanUnassignTopic: sdk.String("iste"),
            WhoCanUnmarkFavoriteReplyOnAnyTopic: sdk.String("iure"),
            WhoCanViewGroup: sdk.String("saepe"),
            WhoCanViewMembership: sdk.String("quidem"),
        },
        Alt: shared.AltEnumAtom.ToPointer(),
        Fields: sdk.String("ipsa"),
        GroupUniqueID: "reiciendis",
        Key: sdk.String("est"),
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UserIP: sdk.String("dolores"),
    }, operations.GroupsSettingsGroupsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```

## GroupsSettingsGroupsUpdate

Updates an existing resource.

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
    res, err := s.Groups.GroupsSettingsGroupsUpdate(ctx, operations.GroupsSettingsGroupsUpdateRequest{
        Groups: &shared.Groups{
            AllowExternalMembers: sdk.String("dolorem"),
            AllowGoogleCommunication: sdk.String("corporis"),
            AllowWebPosting: sdk.String("explicabo"),
            ArchiveOnly: sdk.String("nobis"),
            CustomFooterText: sdk.String("enim"),
            CustomReplyTo: sdk.String("omnis"),
            CustomRolesEnabledForSettingsToBeMerged: sdk.String("nemo"),
            DefaultMessageDenyNotificationText: sdk.String("minima"),
            DefaultSender: sdk.String("excepturi"),
            Description: sdk.String("accusantium"),
            Email: sdk.String("Lorenza.Yundt65@yahoo.com"),
            EnableCollaborativeInbox: sdk.String("dolorem"),
            FavoriteRepliesOnTop: sdk.String("culpa"),
            IncludeCustomFooter: sdk.String("consequuntur"),
            IncludeInGlobalAddressList: sdk.String("repellat"),
            IsArchived: sdk.String("mollitia"),
            Kind: sdk.String("occaecati"),
            MaxMessageBytes: sdk.Int(253291),
            MembersCanPostAsTheGroup: sdk.String("commodi"),
            MessageDisplayFont: sdk.String("quam"),
            MessageModerationLevel: sdk.String("molestiae"),
            Name: sdk.String("Sabrina Cronin MD"),
            PrimaryLanguage: sdk.String("animi"),
            ReplyTo: sdk.String("enim"),
            SendMessageDenyNotification: sdk.String("odit"),
            ShowInGroupDirectory: sdk.String("quo"),
            SpamModerationLevel: sdk.String("sequi"),
            WhoCanAdd: sdk.String("tenetur"),
            WhoCanAddReferences: sdk.String("ipsam"),
            WhoCanApproveMembers: sdk.String("id"),
            WhoCanApproveMessages: sdk.String("possimus"),
            WhoCanAssignTopics: sdk.String("aut"),
            WhoCanAssistContent: sdk.String("quasi"),
            WhoCanBanUsers: sdk.String("error"),
            WhoCanContactOwner: sdk.String("temporibus"),
            WhoCanDeleteAnyPost: sdk.String("laborum"),
            WhoCanDeleteTopics: sdk.String("quasi"),
            WhoCanDiscoverGroup: sdk.String("reiciendis"),
            WhoCanEnterFreeFormTags: sdk.String("voluptatibus"),
            WhoCanHideAbuse: sdk.String("vero"),
            WhoCanInvite: sdk.String("nihil"),
            WhoCanJoin: sdk.String("praesentium"),
            WhoCanLeaveGroup: sdk.String("voluptatibus"),
            WhoCanLockTopics: sdk.String("ipsa"),
            WhoCanMakeTopicsSticky: sdk.String("omnis"),
            WhoCanMarkDuplicate: sdk.String("voluptate"),
            WhoCanMarkFavoriteReplyOnAnyTopic: sdk.String("cum"),
            WhoCanMarkFavoriteReplyOnOwnTopic: sdk.String("perferendis"),
            WhoCanMarkNoResponseNeeded: sdk.String("doloremque"),
            WhoCanModerateContent: sdk.String("reprehenderit"),
            WhoCanModerateMembers: sdk.String("ut"),
            WhoCanModifyMembers: sdk.String("maiores"),
            WhoCanModifyTagsAndCategories: sdk.String("dicta"),
            WhoCanMoveTopicsIn: sdk.String("corporis"),
            WhoCanMoveTopicsOut: sdk.String("dolore"),
            WhoCanPostAnnouncements: sdk.String("iusto"),
            WhoCanPostMessage: sdk.String("dicta"),
            WhoCanTakeTopics: sdk.String("harum"),
            WhoCanUnassignTopic: sdk.String("enim"),
            WhoCanUnmarkFavoriteReplyOnAnyTopic: sdk.String("accusamus"),
            WhoCanViewGroup: sdk.String("commodi"),
            WhoCanViewMembership: sdk.String("repudiandae"),
        },
        Alt: shared.AltEnumAtom.ToPointer(),
        Fields: sdk.String("ipsum"),
        GroupUniqueID: "quidem",
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UserIP: sdk.String("modi"),
    }, operations.GroupsSettingsGroupsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```

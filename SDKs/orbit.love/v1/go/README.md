# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/orbit.love/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        MemberSlug: "deserunt",
        WorkspaceSlug: "perferendis",
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Activities](docs/activities/README.md)

* [DeleteWorkspaceSlugMembersMemberSlugActivitiesID](docs/activities/README.md#deleteworkspaceslugmembersmemberslugactivitiesid) - Delete a post activity
* [GetWorkspaceSlugActivities](docs/activities/README.md#getworkspaceslugactivities) - List activities for a workspace
* [GetWorkspaceSlugActivitiesID](docs/activities/README.md#getworkspaceslugactivitiesid) - Get an activity in the workspace
* [GetWorkspaceSlugMembersMemberSlugActivities](docs/activities/README.md#getworkspaceslugmembersmemberslugactivities) - List activities for a member
* [GetWorkspaceSlugOrganizationsOrganizationIDActivities](docs/activities/README.md#getworkspaceslugorganizationsorganizationidactivities) - List member activities in an organization
* [PostWorkspaceSlugActivities](docs/activities/README.md#postworkspaceslugactivities) - Create a Custom or a Content activity for a new or existing member
* [PostWorkspaceSlugMembersMemberSlugActivities](docs/activities/README.md#postworkspaceslugmembersmemberslugactivities) - Create a Custom or a Content activity for a member
* [PutWorkspaceSlugMembersMemberSlugActivitiesID](docs/activities/README.md#putworkspaceslugmembersmemberslugactivitiesid) - Update a custom activity for a member

### [ActivityTypes](docs/activitytypes/README.md)

* [GetWorkspaceSlugActivityTypes](docs/activitytypes/README.md#getworkspaceslugactivitytypes) - List all activity types for a workspace

### [Members](docs/members/README.md)

* [DeleteWorkspaceSlugMembersMemberSlug](docs/members/README.md#deleteworkspaceslugmembersmemberslug) - Delete a member
* [DeleteWorkspaceSlugMembersMemberSlugIdentities](docs/members/README.md#deleteworkspaceslugmembersmemberslugidentities) - Remove identity from a member
* [GetWorkspaceSlugMembers](docs/members/README.md#getworkspaceslugmembers) - List members in a workspace
* [GetWorkspaceSlugMembersFind](docs/members/README.md#getworkspaceslugmembersfind) - Find a member by an identity
* [GetWorkspaceSlugMembersMemberSlug](docs/members/README.md#getworkspaceslugmembersmemberslug) - Get a member
* [GetWorkspaceSlugOrganizationsOrganizationIDMembers](docs/members/README.md#getworkspaceslugorganizationsorganizationidmembers) - List members in an organization
* [PostWorkspaceSlugMembers](docs/members/README.md#postworkspaceslugmembers) - Create or update a member
* [PostWorkspaceSlugMembersMemberSlugIdentities](docs/members/README.md#postworkspaceslugmembersmemberslugidentities) - Add identity to a member
* [PutWorkspaceSlugMembersMemberSlug](docs/members/README.md#putworkspaceslugmembersmemberslug) - Update a member

### [Notes](docs/notes/README.md)

* [GetWorkspaceSlugMembersMemberSlugNotes](docs/notes/README.md#getworkspaceslugmembersmemberslugnotes) - Get the member's notes
* [PostWorkspaceSlugMembersMemberSlugNotes](docs/notes/README.md#postworkspaceslugmembersmemberslugnotes) - Create a note
* [PutWorkspaceSlugMembersMemberSlugNotesID](docs/notes/README.md#putworkspaceslugmembersmemberslugnotesid) - Update a note

### [Organizations](docs/organizations/README.md)

* [GetWorkspaceSlugOrganizations](docs/organizations/README.md#getworkspaceslugorganizations) - List organizations in a workspace
* [GetWorkspaceSlugOrganizationsOrganizationID](docs/organizations/README.md#getworkspaceslugorganizationsorganizationid) - Get an organization
* [PutWorkspaceSlugOrganizationsOrganizationID](docs/organizations/README.md#putworkspaceslugorganizationsorganizationid) - Update an organization

### [Reports](docs/reports/README.md)

* [GetWorkspaceSlugReports](docs/reports/README.md#getworkspaceslugreports) - Get a workspace stats

### [Users](docs/users/README.md)

* [GetUser](docs/users/README.md#getuser) - Get info about the current user

### [Webhooks](docs/webhooks/README.md)

* [DeleteWorkspaceSlugWebhooksID](docs/webhooks/README.md#deleteworkspaceslugwebhooksid) - Delete a webhook
* [GetWorkspaceSlugWebhooks](docs/webhooks/README.md#getworkspaceslugwebhooks) - List webhooks in a workspace
* [GetWorkspaceSlugWebhooksID](docs/webhooks/README.md#getworkspaceslugwebhooksid) - Get a webhook
* [PostWorkspaceSlugWebhooks](docs/webhooks/README.md#postworkspaceslugwebhooks) - Create a webhook
* [PutWorkspaceSlugWebhooksID](docs/webhooks/README.md#putworkspaceslugwebhooksid) - Update a webhook

### [Workspaces](docs/workspaces/README.md)

* [GetWorkspaces](docs/workspaces/README.md#getworkspaces) - Get all workspaces for the current user
* [GetWorkspacesWorkspaceSlug](docs/workspaces/README.md#getworkspacesworkspaceslug) - Get a workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

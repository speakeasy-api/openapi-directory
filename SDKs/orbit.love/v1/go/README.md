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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDRequest{
        ID: "corrupti",
        MemberSlug: "provident",
        WorkspaceSlug: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Activities.DeleteWorkspaceSlugMembersMemberSlugActivitiesID(ctx, req, operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIDSecurity{
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


### Activities

* `DeleteWorkspaceSlugMembersMemberSlugActivitiesID` - Delete a post activity
* `GetWorkspaceSlugActivities` - List activities for a workspace
* `GetWorkspaceSlugActivitiesID` - Get an activity in the workspace
* `GetWorkspaceSlugMembersMemberSlugActivities` - List activities for a member
* `GetWorkspaceSlugOrganizationsOrganizationIDActivities` - List member activities in an organization
* `PostWorkspaceSlugActivities` - Create a Custom or a Content activity for a new or existing member
* `PostWorkspaceSlugMembersMemberSlugActivities` - Create a Custom or a Content activity for a member
* `PutWorkspaceSlugMembersMemberSlugActivitiesID` - Update a custom activity for a member

### ActivityTypes

* `GetWorkspaceSlugActivityTypes` - List all activity types for a workspace

### Members

* `DeleteWorkspaceSlugMembersMemberSlug` - Delete a member
* `DeleteWorkspaceSlugMembersMemberSlugIdentities` - Remove identity from a member
* `GetWorkspaceSlugMembers` - List members in a workspace
* `GetWorkspaceSlugMembersFind` - Find a member by an identity
* `GetWorkspaceSlugMembersMemberSlug` - Get a member
* `GetWorkspaceSlugOrganizationsOrganizationIDMembers` - List members in an organization
* `PostWorkspaceSlugMembers` - Create or update a member
* `PostWorkspaceSlugMembersMemberSlugIdentities` - Add identity to a member
* `PutWorkspaceSlugMembersMemberSlug` - Update a member

### Notes

* `GetWorkspaceSlugMembersMemberSlugNotes` - Get the member's notes
* `PostWorkspaceSlugMembersMemberSlugNotes` - Create a note
* `PutWorkspaceSlugMembersMemberSlugNotesID` - Update a note

### Organizations

* `GetWorkspaceSlugOrganizations` - List organizations in a workspace
* `GetWorkspaceSlugOrganizationsOrganizationID` - Get an organization
* `PutWorkspaceSlugOrganizationsOrganizationID` - Update an organization

### Reports

* `GetWorkspaceSlugReports` - Get a workspace stats

### Users

* `GetUser` - Get info about the current user

### Webhooks

* `DeleteWorkspaceSlugWebhooksID` - Delete a webhook
* `GetWorkspaceSlugWebhooks` - List webhooks in a workspace
* `GetWorkspaceSlugWebhooksID` - Get a webhook
* `PostWorkspaceSlugWebhooks` - Create a webhook
* `PutWorkspaceSlugWebhooksID` - Update a webhook

### Workspaces

* `GetWorkspaces` - Get all workspaces for the current user
* `GetWorkspacesWorkspaceSlug` - Get a workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

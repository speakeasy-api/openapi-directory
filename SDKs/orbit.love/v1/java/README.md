# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest req = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest() {{
                id = "corrupti";
                memberSlug = "provident";
                workspaceSlug = "distinctio";
            }}            

            DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse res = sdk.activities.deleteWorkspaceSlugMembersMemberSlugActivitiesId(req, new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity() {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activities

* `deleteWorkspaceSlugMembersMemberSlugActivitiesId` - Delete a post activity
* `getWorkspaceSlugActivities` - List activities for a workspace
* `getWorkspaceSlugActivitiesId` - Get an activity in the workspace
* `getWorkspaceSlugMembersMemberSlugActivities` - List activities for a member
* `getWorkspaceSlugOrganizationsOrganizationIdActivities` - List member activities in an organization
* `postWorkspaceSlugActivities` - Create a Custom or a Content activity for a new or existing member
* `postWorkspaceSlugMembersMemberSlugActivities` - Create a Custom or a Content activity for a member
* `putWorkspaceSlugMembersMemberSlugActivitiesId` - Update a custom activity for a member

### activityTypes

* `getWorkspaceSlugActivityTypes` - List all activity types for a workspace

### members

* `deleteWorkspaceSlugMembersMemberSlug` - Delete a member
* `deleteWorkspaceSlugMembersMemberSlugIdentities` - Remove identity from a member
* `getWorkspaceSlugMembers` - List members in a workspace
* `getWorkspaceSlugMembersFind` - Find a member by an identity
* `getWorkspaceSlugMembersMemberSlug` - Get a member
* `getWorkspaceSlugOrganizationsOrganizationIdMembers` - List members in an organization
* `postWorkspaceSlugMembers` - Create or update a member
* `postWorkspaceSlugMembersMemberSlugIdentities` - Add identity to a member
* `putWorkspaceSlugMembersMemberSlug` - Update a member

### notes

* `getWorkspaceSlugMembersMemberSlugNotes` - Get the member's notes
* `postWorkspaceSlugMembersMemberSlugNotes` - Create a note
* `putWorkspaceSlugMembersMemberSlugNotesId` - Update a note

### organizations

* `getWorkspaceSlugOrganizations` - List organizations in a workspace
* `getWorkspaceSlugOrganizationsOrganizationId` - Get an organization
* `putWorkspaceSlugOrganizationsOrganizationId` - Update an organization

### reports

* `getWorkspaceSlugReports` - Get a workspace stats

### users

* `getUser` - Get info about the current user

### webhooks

* `deleteWorkspaceSlugWebhooksId` - Delete a webhook
* `getWorkspaceSlugWebhooks` - List webhooks in a workspace
* `getWorkspaceSlugWebhooksId` - Get a webhook
* `postWorkspaceSlugWebhooks` - Create a webhook
* `putWorkspaceSlugWebhooksId` - Update a webhook

### workspaces

* `getWorkspaces` - Get all workspaces for the current user
* `getWorkspacesWorkspaceSlug` - Get a workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->memberSlug = 'deserunt';
    $request->workspaceSlug = 'perferendis';

    $requestSecurity = new DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity();
    $requestSecurity->bearer = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->activities->deleteWorkspaceSlugMembersMemberSlugActivitiesId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [activities](docs/activities/README.md)

* [deleteWorkspaceSlugMembersMemberSlugActivitiesId](docs/activities/README.md#deleteworkspaceslugmembersmemberslugactivitiesid) - Delete a post activity
* [getWorkspaceSlugActivities](docs/activities/README.md#getworkspaceslugactivities) - List activities for a workspace
* [getWorkspaceSlugActivitiesId](docs/activities/README.md#getworkspaceslugactivitiesid) - Get an activity in the workspace
* [getWorkspaceSlugMembersMemberSlugActivities](docs/activities/README.md#getworkspaceslugmembersmemberslugactivities) - List activities for a member
* [getWorkspaceSlugOrganizationsOrganizationIdActivities](docs/activities/README.md#getworkspaceslugorganizationsorganizationidactivities) - List member activities in an organization
* [postWorkspaceSlugActivities](docs/activities/README.md#postworkspaceslugactivities) - Create a Custom or a Content activity for a new or existing member
* [postWorkspaceSlugMembersMemberSlugActivities](docs/activities/README.md#postworkspaceslugmembersmemberslugactivities) - Create a Custom or a Content activity for a member
* [putWorkspaceSlugMembersMemberSlugActivitiesId](docs/activities/README.md#putworkspaceslugmembersmemberslugactivitiesid) - Update a custom activity for a member

### [activityTypes](docs/activitytypes/README.md)

* [getWorkspaceSlugActivityTypes](docs/activitytypes/README.md#getworkspaceslugactivitytypes) - List all activity types for a workspace

### [members](docs/members/README.md)

* [deleteWorkspaceSlugMembersMemberSlug](docs/members/README.md#deleteworkspaceslugmembersmemberslug) - Delete a member
* [deleteWorkspaceSlugMembersMemberSlugIdentities](docs/members/README.md#deleteworkspaceslugmembersmemberslugidentities) - Remove identity from a member
* [getWorkspaceSlugMembers](docs/members/README.md#getworkspaceslugmembers) - List members in a workspace
* [getWorkspaceSlugMembersFind](docs/members/README.md#getworkspaceslugmembersfind) - Find a member by an identity
* [getWorkspaceSlugMembersMemberSlug](docs/members/README.md#getworkspaceslugmembersmemberslug) - Get a member
* [getWorkspaceSlugOrganizationsOrganizationIdMembers](docs/members/README.md#getworkspaceslugorganizationsorganizationidmembers) - List members in an organization
* [postWorkspaceSlugMembers](docs/members/README.md#postworkspaceslugmembers) - Create or update a member
* [postWorkspaceSlugMembersMemberSlugIdentities](docs/members/README.md#postworkspaceslugmembersmemberslugidentities) - Add identity to a member
* [putWorkspaceSlugMembersMemberSlug](docs/members/README.md#putworkspaceslugmembersmemberslug) - Update a member

### [notes](docs/notes/README.md)

* [getWorkspaceSlugMembersMemberSlugNotes](docs/notes/README.md#getworkspaceslugmembersmemberslugnotes) - Get the member's notes
* [postWorkspaceSlugMembersMemberSlugNotes](docs/notes/README.md#postworkspaceslugmembersmemberslugnotes) - Create a note
* [putWorkspaceSlugMembersMemberSlugNotesId](docs/notes/README.md#putworkspaceslugmembersmemberslugnotesid) - Update a note

### [organizations](docs/organizations/README.md)

* [getWorkspaceSlugOrganizations](docs/organizations/README.md#getworkspaceslugorganizations) - List organizations in a workspace
* [getWorkspaceSlugOrganizationsOrganizationId](docs/organizations/README.md#getworkspaceslugorganizationsorganizationid) - Get an organization
* [putWorkspaceSlugOrganizationsOrganizationId](docs/organizations/README.md#putworkspaceslugorganizationsorganizationid) - Update an organization

### [reports](docs/reports/README.md)

* [getWorkspaceSlugReports](docs/reports/README.md#getworkspaceslugreports) - Get a workspace stats

### [users](docs/users/README.md)

* [getUser](docs/users/README.md#getuser) - Get info about the current user

### [webhooks](docs/webhooks/README.md)

* [deleteWorkspaceSlugWebhooksId](docs/webhooks/README.md#deleteworkspaceslugwebhooksid) - Delete a webhook
* [getWorkspaceSlugWebhooks](docs/webhooks/README.md#getworkspaceslugwebhooks) - List webhooks in a workspace
* [getWorkspaceSlugWebhooksId](docs/webhooks/README.md#getworkspaceslugwebhooksid) - Get a webhook
* [postWorkspaceSlugWebhooks](docs/webhooks/README.md#postworkspaceslugwebhooks) - Create a webhook
* [putWorkspaceSlugWebhooksId](docs/webhooks/README.md#putworkspaceslugwebhooksid) - Update a webhook

### [workspaces](docs/workspaces/README.md)

* [getWorkspaces](docs/workspaces/README.md#getworkspaces) - Get all workspaces for the current user
* [getWorkspacesWorkspaceSlug](docs/workspaces/README.md#getworkspacesworkspaceslug) - Get a workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

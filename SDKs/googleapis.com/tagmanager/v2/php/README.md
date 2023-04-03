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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `tagmanagerAccountsContainersCombine` - Combines Containers.
* `tagmanagerAccountsContainersCreate` - Creates a Container.
* `tagmanagerAccountsContainersDestinationsLink` - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* `tagmanagerAccountsContainersDestinationsList` - Lists all Destinations linked to a GTM Container.
* `tagmanagerAccountsContainersEnvironmentsCreate` - Creates a GTM Environment.
* `tagmanagerAccountsContainersEnvironmentsList` - Lists all GTM Environments of a GTM Container.
* `tagmanagerAccountsContainersEnvironmentsReauthorize` - Re-generates the authorization code for a GTM Environment.
* `tagmanagerAccountsContainersList` - Lists all Containers that belongs to a GTM Account.
* `tagmanagerAccountsContainersLookup` - Looks up a Container by destination ID.
* `tagmanagerAccountsContainersMoveTagId` - Move Tag ID out of a Container.
* `tagmanagerAccountsContainersSnippet` - Gets the tagging snippet for a Container.
* `tagmanagerAccountsContainersVersionHeadersLatest` - Gets the latest container version header
* `tagmanagerAccountsContainersVersionHeadersList` - Lists all Container Versions of a GTM Container.
* `tagmanagerAccountsContainersVersionsLive` - Gets the live (i.e. published) container version
* `tagmanagerAccountsContainersVersionsPublish` - Publishes a Container Version.
* `tagmanagerAccountsContainersVersionsSetLatest` - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* `tagmanagerAccountsContainersVersionsUndelete` - Undeletes a Container Version.
* `tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate` - Creates one or more GTM Built-In Variables.
* `tagmanagerAccountsContainersWorkspacesBuiltInVariablesList` - Lists all the enabled Built-In Variables of a GTM Container.
* `tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert` - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* `tagmanagerAccountsContainersWorkspacesClientsCreate` - Creates a GTM Client.
* `tagmanagerAccountsContainersWorkspacesClientsList` - Lists all GTM Clients of a GTM container workspace.
* `tagmanagerAccountsContainersWorkspacesCreate` - Creates a Workspace.
* `tagmanagerAccountsContainersWorkspacesCreateVersion` - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* `tagmanagerAccountsContainersWorkspacesFoldersCreate` - Creates a GTM Folder.
* `tagmanagerAccountsContainersWorkspacesFoldersEntities` - List all entities in a GTM Folder.
* `tagmanagerAccountsContainersWorkspacesFoldersList` - Lists all GTM Folders of a Container.
* `tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder` - Moves entities to a GTM Folder.
* `tagmanagerAccountsContainersWorkspacesGetStatus` - Finds conflicting and modified entities in the workspace.
* `tagmanagerAccountsContainersWorkspacesGtagConfigCreate` - Creates a Google tag config.
* `tagmanagerAccountsContainersWorkspacesGtagConfigList` - Lists all Google tag configs in a Container.
* `tagmanagerAccountsContainersWorkspacesList` - Lists all Workspaces that belong to a GTM Container.
* `tagmanagerAccountsContainersWorkspacesQuickPreview` - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* `tagmanagerAccountsContainersWorkspacesResolveConflict` - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* `tagmanagerAccountsContainersWorkspacesSync` - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* `tagmanagerAccountsContainersWorkspacesTagsCreate` - Creates a GTM Tag.
* `tagmanagerAccountsContainersWorkspacesTagsList` - Lists all GTM Tags of a Container.
* `tagmanagerAccountsContainersWorkspacesTemplatesCreate` - Creates a GTM Custom Template.
* `tagmanagerAccountsContainersWorkspacesTemplatesList` - Lists all GTM Templates of a GTM container workspace.
* `tagmanagerAccountsContainersWorkspacesTriggersCreate` - Creates a GTM Trigger.
* `tagmanagerAccountsContainersWorkspacesTriggersList` - Lists all GTM Triggers of a Container.
* `tagmanagerAccountsContainersWorkspacesVariablesCreate` - Creates a GTM Variable.
* `tagmanagerAccountsContainersWorkspacesVariablesList` - Lists all GTM Variables of a Container.
* `tagmanagerAccountsContainersWorkspacesZonesCreate` - Creates a GTM Zone.
* `tagmanagerAccountsContainersWorkspacesZonesList` - Lists all GTM Zones of a GTM container workspace.
* `tagmanagerAccountsContainersWorkspacesZonesRevert` - Reverts changes to a GTM Zone in a GTM Workspace.
* `tagmanagerAccountsList` - Lists all GTM Accounts that a user has access to.
* `tagmanagerAccountsUserPermissionsCreate` - Creates a user's Account & Container access.
* `tagmanagerAccountsUserPermissionsDelete` - Removes a user from the account, revoking access to it and all of its containers.
* `tagmanagerAccountsUserPermissionsGet` - Gets a user's Account & Container access.
* `tagmanagerAccountsUserPermissionsList` - List all users that have access to the account along with Account and Container user access granted to each of them.
* `tagmanagerAccountsUserPermissionsUpdate` - Updates a user's Account & Container access.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

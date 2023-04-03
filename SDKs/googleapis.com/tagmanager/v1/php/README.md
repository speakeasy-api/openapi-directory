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

* `tagmanagerAccountsContainersCreate` - Creates a Container.
* `tagmanagerAccountsContainersDelete` - Deletes a Container.
* `tagmanagerAccountsContainersEnvironmentsCreate` - Creates a GTM Environment.
* `tagmanagerAccountsContainersEnvironmentsDelete` - Deletes a GTM Environment.
* `tagmanagerAccountsContainersEnvironmentsGet` - Gets a GTM Environment.
* `tagmanagerAccountsContainersEnvironmentsList` - Lists all GTM Environments of a GTM Container.
* `tagmanagerAccountsContainersEnvironmentsUpdate` - Updates a GTM Environment.
* `tagmanagerAccountsContainersFoldersCreate` - Creates a GTM Folder.
* `tagmanagerAccountsContainersFoldersDelete` - Deletes a GTM Folder.
* `tagmanagerAccountsContainersFoldersEntitiesList` - List all entities in a GTM Folder.
* `tagmanagerAccountsContainersFoldersGet` - Gets a GTM Folder.
* `tagmanagerAccountsContainersFoldersList` - Lists all GTM Folders of a Container.
* `tagmanagerAccountsContainersFoldersUpdate` - Updates a GTM Folder.
* `tagmanagerAccountsContainersGet` - Gets a Container.
* `tagmanagerAccountsContainersList` - Lists all Containers that belongs to a GTM Account.
* `tagmanagerAccountsContainersMoveFoldersUpdate` - Moves entities to a GTM Folder.
* `tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate` - Re-generates the authorization code for a GTM Environment.
* `tagmanagerAccountsContainersTagsCreate` - Creates a GTM Tag.
* `tagmanagerAccountsContainersTagsDelete` - Deletes a GTM Tag.
* `tagmanagerAccountsContainersTagsGet` - Gets a GTM Tag.
* `tagmanagerAccountsContainersTagsList` - Lists all GTM Tags of a Container.
* `tagmanagerAccountsContainersTagsUpdate` - Updates a GTM Tag.
* `tagmanagerAccountsContainersTriggersCreate` - Creates a GTM Trigger.
* `tagmanagerAccountsContainersTriggersDelete` - Deletes a GTM Trigger.
* `tagmanagerAccountsContainersTriggersGet` - Gets a GTM Trigger.
* `tagmanagerAccountsContainersTriggersList` - Lists all GTM Triggers of a Container.
* `tagmanagerAccountsContainersTriggersUpdate` - Updates a GTM Trigger.
* `tagmanagerAccountsContainersUpdate` - Updates a Container.
* `tagmanagerAccountsContainersVariablesCreate` - Creates a GTM Variable.
* `tagmanagerAccountsContainersVariablesDelete` - Deletes a GTM Variable.
* `tagmanagerAccountsContainersVariablesGet` - Gets a GTM Variable.
* `tagmanagerAccountsContainersVariablesList` - Lists all GTM Variables of a Container.
* `tagmanagerAccountsContainersVariablesUpdate` - Updates a GTM Variable.
* `tagmanagerAccountsContainersVersionsCreate` - Creates a Container Version.
* `tagmanagerAccountsContainersVersionsDelete` - Deletes a Container Version.
* `tagmanagerAccountsContainersVersionsGet` - Gets a Container Version.
* `tagmanagerAccountsContainersVersionsList` - Lists all Container Versions of a GTM Container.
* `tagmanagerAccountsContainersVersionsPublish` - Publishes a Container Version.
* `tagmanagerAccountsContainersVersionsRestore` - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* `tagmanagerAccountsContainersVersionsUndelete` - Undeletes a Container Version.
* `tagmanagerAccountsContainersVersionsUpdate` - Updates a Container Version.
* `tagmanagerAccountsGet` - Gets a GTM Account.
* `tagmanagerAccountsList` - Lists all GTM Accounts that a user has access to.
* `tagmanagerAccountsPermissionsCreate` - Creates a user's Account & Container Permissions.
* `tagmanagerAccountsPermissionsDelete` - Removes a user from the account, revoking access to it and all of its containers.
* `tagmanagerAccountsPermissionsGet` - Gets a user's Account & Container Permissions.
* `tagmanagerAccountsPermissionsList` - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* `tagmanagerAccountsPermissionsUpdate` - Updates a user's Account & Container Permissions.
* `tagmanagerAccountsUpdate` - Updates a GTM Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

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
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSecurity;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCombineSettingSourceEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCombineRequest req = new TagmanagerAccountsContainersCombineRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                allowUserPermissionFeatureUpdate = false;
                alt = AltEnum.PROTO;
                callback = "unde";
                containerId = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                settingSource = TagmanagerAccountsContainersCombineSettingSourceEnum.CURRENT;
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            TagmanagerAccountsContainersCombineResponse res = sdk.accounts.tagmanagerAccountsContainersCombine(req, new TagmanagerAccountsContainersCombineSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.container != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [tagmanagerAccountsContainersCombine](docs/accounts/README.md#tagmanageraccountscontainerscombine) - Combines Containers.
* [tagmanagerAccountsContainersCreate](docs/accounts/README.md#tagmanageraccountscontainerscreate) - Creates a Container.
* [tagmanagerAccountsContainersDestinationsLink](docs/accounts/README.md#tagmanageraccountscontainersdestinationslink) - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* [tagmanagerAccountsContainersDestinationsList](docs/accounts/README.md#tagmanageraccountscontainersdestinationslist) - Lists all Destinations linked to a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsCreate](docs/accounts/README.md#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsList](docs/accounts/README.md#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsReauthorize](docs/accounts/README.md#tagmanageraccountscontainersenvironmentsreauthorize) - Re-generates the authorization code for a GTM Environment.
* [tagmanagerAccountsContainersList](docs/accounts/README.md#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [tagmanagerAccountsContainersLookup](docs/accounts/README.md#tagmanageraccountscontainerslookup) - Looks up a Container by destination ID.
* [tagmanagerAccountsContainersMoveTagId](docs/accounts/README.md#tagmanageraccountscontainersmovetagid) - Move Tag ID out of a Container.
* [tagmanagerAccountsContainersSnippet](docs/accounts/README.md#tagmanageraccountscontainerssnippet) - Gets the tagging snippet for a Container.
* [tagmanagerAccountsContainersVersionHeadersLatest](docs/accounts/README.md#tagmanageraccountscontainersversionheaderslatest) - Gets the latest container version header
* [tagmanagerAccountsContainersVersionHeadersList](docs/accounts/README.md#tagmanageraccountscontainersversionheaderslist) - Lists all Container Versions of a GTM Container.
* [tagmanagerAccountsContainersVersionsLive](docs/accounts/README.md#tagmanageraccountscontainersversionslive) - Gets the live (i.e. published) container version
* [tagmanagerAccountsContainersVersionsPublish](docs/accounts/README.md#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [tagmanagerAccountsContainersVersionsSetLatest](docs/accounts/README.md#tagmanageraccountscontainersversionssetlatest) - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* [tagmanagerAccountsContainersVersionsUndelete](docs/accounts/README.md#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesbuiltinvariablescreate) - Creates one or more GTM Built-In Variables.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesbuiltinvariableslist) - Lists all the enabled Built-In Variables of a GTM Container.
* [tagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert](docs/accounts/README.md#tagmanageraccountscontainersworkspacesbuiltinvariablesrevert) - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* [tagmanagerAccountsContainersWorkspacesClientsCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesclientscreate) - Creates a GTM Client.
* [tagmanagerAccountsContainersWorkspacesClientsList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesclientslist) - Lists all GTM Clients of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacescreate) - Creates a Workspace.
* [tagmanagerAccountsContainersWorkspacesCreateVersion](docs/accounts/README.md#tagmanageraccountscontainersworkspacescreateversion) - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* [tagmanagerAccountsContainersWorkspacesFoldersCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesfolderscreate) - Creates a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesFoldersEntities](docs/accounts/README.md#tagmanageraccountscontainersworkspacesfoldersentities) - List all entities in a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesFoldersList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesfolderslist) - Lists all GTM Folders of a Container.
* [tagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder](docs/accounts/README.md#tagmanageraccountscontainersworkspacesfoldersmoveentitiestofolder) - Moves entities to a GTM Folder.
* [tagmanagerAccountsContainersWorkspacesGetStatus](docs/accounts/README.md#tagmanageraccountscontainersworkspacesgetstatus) - Finds conflicting and modified entities in the workspace.
* [tagmanagerAccountsContainersWorkspacesGtagConfigCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesgtagconfigcreate) - Creates a Google tag config.
* [tagmanagerAccountsContainersWorkspacesGtagConfigList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesgtagconfiglist) - Lists all Google tag configs in a Container.
* [tagmanagerAccountsContainersWorkspacesList](docs/accounts/README.md#tagmanageraccountscontainersworkspaceslist) - Lists all Workspaces that belong to a GTM Container.
* [tagmanagerAccountsContainersWorkspacesQuickPreview](docs/accounts/README.md#tagmanageraccountscontainersworkspacesquickpreview) - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* [tagmanagerAccountsContainersWorkspacesResolveConflict](docs/accounts/README.md#tagmanageraccountscontainersworkspacesresolveconflict) - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* [tagmanagerAccountsContainersWorkspacesSync](docs/accounts/README.md#tagmanageraccountscontainersworkspacessync) - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* [tagmanagerAccountsContainersWorkspacesTagsCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacestagscreate) - Creates a GTM Tag.
* [tagmanagerAccountsContainersWorkspacesTagsList](docs/accounts/README.md#tagmanageraccountscontainersworkspacestagslist) - Lists all GTM Tags of a Container.
* [tagmanagerAccountsContainersWorkspacesTemplatesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacestemplatescreate) - Creates a GTM Custom Template.
* [tagmanagerAccountsContainersWorkspacesTemplatesList](docs/accounts/README.md#tagmanageraccountscontainersworkspacestemplateslist) - Lists all GTM Templates of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesTriggersCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacestriggerscreate) - Creates a GTM Trigger.
* [tagmanagerAccountsContainersWorkspacesTriggersList](docs/accounts/README.md#tagmanageraccountscontainersworkspacestriggerslist) - Lists all GTM Triggers of a Container.
* [tagmanagerAccountsContainersWorkspacesVariablesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesvariablescreate) - Creates a GTM Variable.
* [tagmanagerAccountsContainersWorkspacesVariablesList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesvariableslist) - Lists all GTM Variables of a Container.
* [tagmanagerAccountsContainersWorkspacesZonesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspaceszonescreate) - Creates a GTM Zone.
* [tagmanagerAccountsContainersWorkspacesZonesList](docs/accounts/README.md#tagmanageraccountscontainersworkspaceszoneslist) - Lists all GTM Zones of a GTM container workspace.
* [tagmanagerAccountsContainersWorkspacesZonesRevert](docs/accounts/README.md#tagmanageraccountscontainersworkspaceszonesrevert) - Reverts changes to a GTM Zone in a GTM Workspace.
* [tagmanagerAccountsList](docs/accounts/README.md#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [tagmanagerAccountsUserPermissionsCreate](docs/accounts/README.md#tagmanageraccountsuserpermissionscreate) - Creates a user's Account & Container access.
* [tagmanagerAccountsUserPermissionsDelete](docs/accounts/README.md#tagmanageraccountsuserpermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [tagmanagerAccountsUserPermissionsGet](docs/accounts/README.md#tagmanageraccountsuserpermissionsget) - Gets a user's Account & Container access.
* [tagmanagerAccountsUserPermissionsList](docs/accounts/README.md#tagmanageraccountsuserpermissionslist) - List all users that have access to the account along with Account and Container user access granted to each of them.
* [tagmanagerAccountsUserPermissionsUpdate](docs/accounts/README.md#tagmanageraccountsuserpermissionsupdate) - Updates a user's Account & Container access.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

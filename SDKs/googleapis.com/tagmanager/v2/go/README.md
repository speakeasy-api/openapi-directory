# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/tagmanager/v2/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.TagmanagerAccountsContainersCombine(ctx, operations.TagmanagerAccountsContainersCombineRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        AllowUserPermissionFeatureUpdate: sdk.Bool(false),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        ContainerID: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        Path: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        SettingSource: operations.TagmanagerAccountsContainersCombineSettingSourceEnumCurrent.ToPointer(),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.TagmanagerAccountsContainersCombineSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Container != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [TagmanagerAccountsContainersCombine](docs/accounts/README.md#tagmanageraccountscontainerscombine) - Combines Containers.
* [TagmanagerAccountsContainersCreate](docs/accounts/README.md#tagmanageraccountscontainerscreate) - Creates a Container.
* [TagmanagerAccountsContainersDestinationsLink](docs/accounts/README.md#tagmanageraccountscontainersdestinationslink) - Adds a Destination to this Container and removes it from the Container to which it is currently linked.
* [TagmanagerAccountsContainersDestinationsList](docs/accounts/README.md#tagmanageraccountscontainersdestinationslist) - Lists all Destinations linked to a GTM Container.
* [TagmanagerAccountsContainersEnvironmentsCreate](docs/accounts/README.md#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [TagmanagerAccountsContainersEnvironmentsList](docs/accounts/README.md#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [TagmanagerAccountsContainersEnvironmentsReauthorize](docs/accounts/README.md#tagmanageraccountscontainersenvironmentsreauthorize) - Re-generates the authorization code for a GTM Environment.
* [TagmanagerAccountsContainersList](docs/accounts/README.md#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [TagmanagerAccountsContainersLookup](docs/accounts/README.md#tagmanageraccountscontainerslookup) - Looks up a Container by destination ID.
* [TagmanagerAccountsContainersMoveTagID](docs/accounts/README.md#tagmanageraccountscontainersmovetagid) - Move Tag ID out of a Container.
* [TagmanagerAccountsContainersSnippet](docs/accounts/README.md#tagmanageraccountscontainerssnippet) - Gets the tagging snippet for a Container.
* [TagmanagerAccountsContainersVersionHeadersLatest](docs/accounts/README.md#tagmanageraccountscontainersversionheaderslatest) - Gets the latest container version header
* [TagmanagerAccountsContainersVersionHeadersList](docs/accounts/README.md#tagmanageraccountscontainersversionheaderslist) - Lists all Container Versions of a GTM Container.
* [TagmanagerAccountsContainersVersionsLive](docs/accounts/README.md#tagmanageraccountscontainersversionslive) - Gets the live (i.e. published) container version
* [TagmanagerAccountsContainersVersionsPublish](docs/accounts/README.md#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [TagmanagerAccountsContainersVersionsSetLatest](docs/accounts/README.md#tagmanageraccountscontainersversionssetlatest) - Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
* [TagmanagerAccountsContainersVersionsUndelete](docs/accounts/README.md#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [TagmanagerAccountsContainersWorkspacesBuiltInVariablesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesbuiltinvariablescreate) - Creates one or more GTM Built-In Variables.
* [TagmanagerAccountsContainersWorkspacesBuiltInVariablesList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesbuiltinvariableslist) - Lists all the enabled Built-In Variables of a GTM Container.
* [TagmanagerAccountsContainersWorkspacesBuiltInVariablesRevert](docs/accounts/README.md#tagmanageraccountscontainersworkspacesbuiltinvariablesrevert) - Reverts changes to a GTM Built-In Variables in a GTM Workspace.
* [TagmanagerAccountsContainersWorkspacesClientsCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesclientscreate) - Creates a GTM Client.
* [TagmanagerAccountsContainersWorkspacesClientsList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesclientslist) - Lists all GTM Clients of a GTM container workspace.
* [TagmanagerAccountsContainersWorkspacesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacescreate) - Creates a Workspace.
* [TagmanagerAccountsContainersWorkspacesCreateVersion](docs/accounts/README.md#tagmanageraccountscontainersworkspacescreateversion) - Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
* [TagmanagerAccountsContainersWorkspacesFoldersCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesfolderscreate) - Creates a GTM Folder.
* [TagmanagerAccountsContainersWorkspacesFoldersEntities](docs/accounts/README.md#tagmanageraccountscontainersworkspacesfoldersentities) - List all entities in a GTM Folder.
* [TagmanagerAccountsContainersWorkspacesFoldersList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesfolderslist) - Lists all GTM Folders of a Container.
* [TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolder](docs/accounts/README.md#tagmanageraccountscontainersworkspacesfoldersmoveentitiestofolder) - Moves entities to a GTM Folder.
* [TagmanagerAccountsContainersWorkspacesGetStatus](docs/accounts/README.md#tagmanageraccountscontainersworkspacesgetstatus) - Finds conflicting and modified entities in the workspace.
* [TagmanagerAccountsContainersWorkspacesGtagConfigCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesgtagconfigcreate) - Creates a Google tag config.
* [TagmanagerAccountsContainersWorkspacesGtagConfigList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesgtagconfiglist) - Lists all Google tag configs in a Container.
* [TagmanagerAccountsContainersWorkspacesList](docs/accounts/README.md#tagmanageraccountscontainersworkspaceslist) - Lists all Workspaces that belong to a GTM Container.
* [TagmanagerAccountsContainersWorkspacesQuickPreview](docs/accounts/README.md#tagmanageraccountscontainersworkspacesquickpreview) - Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
* [TagmanagerAccountsContainersWorkspacesResolveConflict](docs/accounts/README.md#tagmanageraccountscontainersworkspacesresolveconflict) - Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
* [TagmanagerAccountsContainersWorkspacesSync](docs/accounts/README.md#tagmanageraccountscontainersworkspacessync) - Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
* [TagmanagerAccountsContainersWorkspacesTagsCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacestagscreate) - Creates a GTM Tag.
* [TagmanagerAccountsContainersWorkspacesTagsList](docs/accounts/README.md#tagmanageraccountscontainersworkspacestagslist) - Lists all GTM Tags of a Container.
* [TagmanagerAccountsContainersWorkspacesTemplatesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacestemplatescreate) - Creates a GTM Custom Template.
* [TagmanagerAccountsContainersWorkspacesTemplatesList](docs/accounts/README.md#tagmanageraccountscontainersworkspacestemplateslist) - Lists all GTM Templates of a GTM container workspace.
* [TagmanagerAccountsContainersWorkspacesTriggersCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacestriggerscreate) - Creates a GTM Trigger.
* [TagmanagerAccountsContainersWorkspacesTriggersList](docs/accounts/README.md#tagmanageraccountscontainersworkspacestriggerslist) - Lists all GTM Triggers of a Container.
* [TagmanagerAccountsContainersWorkspacesVariablesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspacesvariablescreate) - Creates a GTM Variable.
* [TagmanagerAccountsContainersWorkspacesVariablesList](docs/accounts/README.md#tagmanageraccountscontainersworkspacesvariableslist) - Lists all GTM Variables of a Container.
* [TagmanagerAccountsContainersWorkspacesZonesCreate](docs/accounts/README.md#tagmanageraccountscontainersworkspaceszonescreate) - Creates a GTM Zone.
* [TagmanagerAccountsContainersWorkspacesZonesList](docs/accounts/README.md#tagmanageraccountscontainersworkspaceszoneslist) - Lists all GTM Zones of a GTM container workspace.
* [TagmanagerAccountsContainersWorkspacesZonesRevert](docs/accounts/README.md#tagmanageraccountscontainersworkspaceszonesrevert) - Reverts changes to a GTM Zone in a GTM Workspace.
* [TagmanagerAccountsList](docs/accounts/README.md#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [TagmanagerAccountsUserPermissionsCreate](docs/accounts/README.md#tagmanageraccountsuserpermissionscreate) - Creates a user's Account & Container access.
* [TagmanagerAccountsUserPermissionsDelete](docs/accounts/README.md#tagmanageraccountsuserpermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [TagmanagerAccountsUserPermissionsGet](docs/accounts/README.md#tagmanageraccountsuserpermissionsget) - Gets a user's Account & Container access.
* [TagmanagerAccountsUserPermissionsList](docs/accounts/README.md#tagmanageraccountsuserpermissionslist) - List all users that have access to the account along with Account and Container user access granted to each of them.
* [TagmanagerAccountsUserPermissionsUpdate](docs/accounts/README.md#tagmanageraccountsuserpermissionsupdate) - Updates a user's Account & Container access.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

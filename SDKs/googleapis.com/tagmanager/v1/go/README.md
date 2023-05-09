# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/tagmanager/v1/go
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
    res, err := s.Accounts.TagmanagerAccountsContainersCreate(ctx, operations.TagmanagerAccountsContainersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Container: &shared.Container{
            AccountID: sdk.String("provident"),
            ContainerID: sdk.String("distinctio"),
            DomainName: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                shared.ContainerEnabledBuiltInVariableEnumAmpGtmEvent,
                shared.ContainerEnabledBuiltInVariableEnumFirebaseEventParameterCampaign,
            },
            Fingerprint: sdk.String("suscipit"),
            Name: sdk.String("Dr. Valerie Toy"),
            Notes: sdk.String("suscipit"),
            PublicID: sdk.String("molestiae"),
            TimeZoneCountryID: sdk.String("minus"),
            TimeZoneID: sdk.String("placeat"),
            UsageContext: []shared.ContainerUsageContextEnum{
                shared.ContainerUsageContextEnumIos,
                shared.ContainerUsageContextEnumAndroidSdk5,
                shared.ContainerUsageContextEnumIos,
            },
        },
        AccessToken: sdk.String("recusandae"),
        AccountID: "temporibus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.TagmanagerAccountsContainersCreateSecurity{
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

* [TagmanagerAccountsContainersCreate](docs/accounts/README.md#tagmanageraccountscontainerscreate) - Creates a Container.
* [TagmanagerAccountsContainersDelete](docs/accounts/README.md#tagmanageraccountscontainersdelete) - Deletes a Container.
* [TagmanagerAccountsContainersEnvironmentsCreate](docs/accounts/README.md#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [TagmanagerAccountsContainersEnvironmentsDelete](docs/accounts/README.md#tagmanageraccountscontainersenvironmentsdelete) - Deletes a GTM Environment.
* [TagmanagerAccountsContainersEnvironmentsGet](docs/accounts/README.md#tagmanageraccountscontainersenvironmentsget) - Gets a GTM Environment.
* [TagmanagerAccountsContainersEnvironmentsList](docs/accounts/README.md#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [TagmanagerAccountsContainersEnvironmentsUpdate](docs/accounts/README.md#tagmanageraccountscontainersenvironmentsupdate) - Updates a GTM Environment.
* [TagmanagerAccountsContainersFoldersCreate](docs/accounts/README.md#tagmanageraccountscontainersfolderscreate) - Creates a GTM Folder.
* [TagmanagerAccountsContainersFoldersDelete](docs/accounts/README.md#tagmanageraccountscontainersfoldersdelete) - Deletes a GTM Folder.
* [TagmanagerAccountsContainersFoldersEntitiesList](docs/accounts/README.md#tagmanageraccountscontainersfoldersentitieslist) - List all entities in a GTM Folder.
* [TagmanagerAccountsContainersFoldersGet](docs/accounts/README.md#tagmanageraccountscontainersfoldersget) - Gets a GTM Folder.
* [TagmanagerAccountsContainersFoldersList](docs/accounts/README.md#tagmanageraccountscontainersfolderslist) - Lists all GTM Folders of a Container.
* [TagmanagerAccountsContainersFoldersUpdate](docs/accounts/README.md#tagmanageraccountscontainersfoldersupdate) - Updates a GTM Folder.
* [TagmanagerAccountsContainersGet](docs/accounts/README.md#tagmanageraccountscontainersget) - Gets a Container.
* [TagmanagerAccountsContainersList](docs/accounts/README.md#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [TagmanagerAccountsContainersMoveFoldersUpdate](docs/accounts/README.md#tagmanageraccountscontainersmovefoldersupdate) - Moves entities to a GTM Folder.
* [TagmanagerAccountsContainersReauthorizeEnvironmentsUpdate](docs/accounts/README.md#tagmanageraccountscontainersreauthorizeenvironmentsupdate) - Re-generates the authorization code for a GTM Environment.
* [TagmanagerAccountsContainersTagsCreate](docs/accounts/README.md#tagmanageraccountscontainerstagscreate) - Creates a GTM Tag.
* [TagmanagerAccountsContainersTagsDelete](docs/accounts/README.md#tagmanageraccountscontainerstagsdelete) - Deletes a GTM Tag.
* [TagmanagerAccountsContainersTagsGet](docs/accounts/README.md#tagmanageraccountscontainerstagsget) - Gets a GTM Tag.
* [TagmanagerAccountsContainersTagsList](docs/accounts/README.md#tagmanageraccountscontainerstagslist) - Lists all GTM Tags of a Container.
* [TagmanagerAccountsContainersTagsUpdate](docs/accounts/README.md#tagmanageraccountscontainerstagsupdate) - Updates a GTM Tag.
* [TagmanagerAccountsContainersTriggersCreate](docs/accounts/README.md#tagmanageraccountscontainerstriggerscreate) - Creates a GTM Trigger.
* [TagmanagerAccountsContainersTriggersDelete](docs/accounts/README.md#tagmanageraccountscontainerstriggersdelete) - Deletes a GTM Trigger.
* [TagmanagerAccountsContainersTriggersGet](docs/accounts/README.md#tagmanageraccountscontainerstriggersget) - Gets a GTM Trigger.
* [TagmanagerAccountsContainersTriggersList](docs/accounts/README.md#tagmanageraccountscontainerstriggerslist) - Lists all GTM Triggers of a Container.
* [TagmanagerAccountsContainersTriggersUpdate](docs/accounts/README.md#tagmanageraccountscontainerstriggersupdate) - Updates a GTM Trigger.
* [TagmanagerAccountsContainersUpdate](docs/accounts/README.md#tagmanageraccountscontainersupdate) - Updates a Container.
* [TagmanagerAccountsContainersVariablesCreate](docs/accounts/README.md#tagmanageraccountscontainersvariablescreate) - Creates a GTM Variable.
* [TagmanagerAccountsContainersVariablesDelete](docs/accounts/README.md#tagmanageraccountscontainersvariablesdelete) - Deletes a GTM Variable.
* [TagmanagerAccountsContainersVariablesGet](docs/accounts/README.md#tagmanageraccountscontainersvariablesget) - Gets a GTM Variable.
* [TagmanagerAccountsContainersVariablesList](docs/accounts/README.md#tagmanageraccountscontainersvariableslist) - Lists all GTM Variables of a Container.
* [TagmanagerAccountsContainersVariablesUpdate](docs/accounts/README.md#tagmanageraccountscontainersvariablesupdate) - Updates a GTM Variable.
* [TagmanagerAccountsContainersVersionsCreate](docs/accounts/README.md#tagmanageraccountscontainersversionscreate) - Creates a Container Version.
* [TagmanagerAccountsContainersVersionsDelete](docs/accounts/README.md#tagmanageraccountscontainersversionsdelete) - Deletes a Container Version.
* [TagmanagerAccountsContainersVersionsGet](docs/accounts/README.md#tagmanageraccountscontainersversionsget) - Gets a Container Version.
* [TagmanagerAccountsContainersVersionsList](docs/accounts/README.md#tagmanageraccountscontainersversionslist) - Lists all Container Versions of a GTM Container.
* [TagmanagerAccountsContainersVersionsPublish](docs/accounts/README.md#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [TagmanagerAccountsContainersVersionsRestore](docs/accounts/README.md#tagmanageraccountscontainersversionsrestore) - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* [TagmanagerAccountsContainersVersionsUndelete](docs/accounts/README.md#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [TagmanagerAccountsContainersVersionsUpdate](docs/accounts/README.md#tagmanageraccountscontainersversionsupdate) - Updates a Container Version.
* [TagmanagerAccountsGet](docs/accounts/README.md#tagmanageraccountsget) - Gets a GTM Account.
* [TagmanagerAccountsList](docs/accounts/README.md#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [TagmanagerAccountsPermissionsCreate](docs/accounts/README.md#tagmanageraccountspermissionscreate) - Creates a user's Account & Container Permissions.
* [TagmanagerAccountsPermissionsDelete](docs/accounts/README.md#tagmanageraccountspermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [TagmanagerAccountsPermissionsGet](docs/accounts/README.md#tagmanageraccountspermissionsget) - Gets a user's Account & Container Permissions.
* [TagmanagerAccountsPermissionsList](docs/accounts/README.md#tagmanageraccountspermissionslist) - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* [TagmanagerAccountsPermissionsUpdate](docs/accounts/README.md#tagmanageraccountspermissionsupdate) - Updates a user's Account & Container Permissions.
* [TagmanagerAccountsUpdate](docs/accounts/README.md#tagmanageraccountsupdate) - Updates a GTM Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

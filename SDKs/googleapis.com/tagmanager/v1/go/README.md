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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.TagmanagerAccountsContainersCreateRequest{
        DollarXgafv: "2",
        Container: &shared.Container{
            AccountID: "provident",
            ContainerID: "distinctio",
            DomainName: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            EnabledBuiltInVariable: []shared.ContainerEnabledBuiltInVariableEnum{
                "ampGtmEvent",
                "firebaseEventParameterCampaign",
            },
            Fingerprint: "suscipit",
            Name: "iure",
            Notes: "magnam",
            PublicID: "debitis",
            TimeZoneCountryID: "ipsa",
            TimeZoneID: "delectus",
            UsageContext: []shared.ContainerUsageContextEnum{
                "ios",
                "ios",
            },
        },
        AccessToken: "minus",
        AccountID: "placeat",
        Alt: "media",
        Callback: "iusto",
        Fields: "excepturi",
        Key: "nisi",
        OauthToken: "recusandae",
        PrettyPrint: false,
        QuotaUser: "temporibus",
        UploadType: "ab",
        UploadProtocol: "quis",
    }

    ctx := context.Background()
    res, err := s.Accounts.TagmanagerAccountsContainersCreate(ctx, req, operations.TagmanagerAccountsContainersCreateSecurity{
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


### Accounts

* `TagmanagerAccountsContainersCreate` - Creates a Container.
* `TagmanagerAccountsContainersDelete` - Deletes a Container.
* `TagmanagerAccountsContainersEnvironmentsCreate` - Creates a GTM Environment.
* `TagmanagerAccountsContainersEnvironmentsDelete` - Deletes a GTM Environment.
* `TagmanagerAccountsContainersEnvironmentsGet` - Gets a GTM Environment.
* `TagmanagerAccountsContainersEnvironmentsList` - Lists all GTM Environments of a GTM Container.
* `TagmanagerAccountsContainersEnvironmentsUpdate` - Updates a GTM Environment.
* `TagmanagerAccountsContainersFoldersCreate` - Creates a GTM Folder.
* `TagmanagerAccountsContainersFoldersDelete` - Deletes a GTM Folder.
* `TagmanagerAccountsContainersFoldersEntitiesList` - List all entities in a GTM Folder.
* `TagmanagerAccountsContainersFoldersGet` - Gets a GTM Folder.
* `TagmanagerAccountsContainersFoldersList` - Lists all GTM Folders of a Container.
* `TagmanagerAccountsContainersFoldersUpdate` - Updates a GTM Folder.
* `TagmanagerAccountsContainersGet` - Gets a Container.
* `TagmanagerAccountsContainersList` - Lists all Containers that belongs to a GTM Account.
* `TagmanagerAccountsContainersMoveFoldersUpdate` - Moves entities to a GTM Folder.
* `TagmanagerAccountsContainersReauthorizeEnvironmentsUpdate` - Re-generates the authorization code for a GTM Environment.
* `TagmanagerAccountsContainersTagsCreate` - Creates a GTM Tag.
* `TagmanagerAccountsContainersTagsDelete` - Deletes a GTM Tag.
* `TagmanagerAccountsContainersTagsGet` - Gets a GTM Tag.
* `TagmanagerAccountsContainersTagsList` - Lists all GTM Tags of a Container.
* `TagmanagerAccountsContainersTagsUpdate` - Updates a GTM Tag.
* `TagmanagerAccountsContainersTriggersCreate` - Creates a GTM Trigger.
* `TagmanagerAccountsContainersTriggersDelete` - Deletes a GTM Trigger.
* `TagmanagerAccountsContainersTriggersGet` - Gets a GTM Trigger.
* `TagmanagerAccountsContainersTriggersList` - Lists all GTM Triggers of a Container.
* `TagmanagerAccountsContainersTriggersUpdate` - Updates a GTM Trigger.
* `TagmanagerAccountsContainersUpdate` - Updates a Container.
* `TagmanagerAccountsContainersVariablesCreate` - Creates a GTM Variable.
* `TagmanagerAccountsContainersVariablesDelete` - Deletes a GTM Variable.
* `TagmanagerAccountsContainersVariablesGet` - Gets a GTM Variable.
* `TagmanagerAccountsContainersVariablesList` - Lists all GTM Variables of a Container.
* `TagmanagerAccountsContainersVariablesUpdate` - Updates a GTM Variable.
* `TagmanagerAccountsContainersVersionsCreate` - Creates a Container Version.
* `TagmanagerAccountsContainersVersionsDelete` - Deletes a Container Version.
* `TagmanagerAccountsContainersVersionsGet` - Gets a Container Version.
* `TagmanagerAccountsContainersVersionsList` - Lists all Container Versions of a GTM Container.
* `TagmanagerAccountsContainersVersionsPublish` - Publishes a Container Version.
* `TagmanagerAccountsContainersVersionsRestore` - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* `TagmanagerAccountsContainersVersionsUndelete` - Undeletes a Container Version.
* `TagmanagerAccountsContainersVersionsUpdate` - Updates a Container Version.
* `TagmanagerAccountsGet` - Gets a GTM Account.
* `TagmanagerAccountsList` - Lists all GTM Accounts that a user has access to.
* `TagmanagerAccountsPermissionsCreate` - Creates a user's Account & Container Permissions.
* `TagmanagerAccountsPermissionsDelete` - Removes a user from the account, revoking access to it and all of its containers.
* `TagmanagerAccountsPermissionsGet` - Gets a user's Account & Container Permissions.
* `TagmanagerAccountsPermissionsList` - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* `TagmanagerAccountsPermissionsUpdate` - Updates a user's Account & Container Permissions.
* `TagmanagerAccountsUpdate` - Updates a GTM Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

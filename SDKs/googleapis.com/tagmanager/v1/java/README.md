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
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateRequest;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateResponse;
import org.openapis.openapi.models.operations.TagmanagerAccountsContainersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Container;
import org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum;
import org.openapis.openapi.models.shared.ContainerUsageContextEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TagmanagerAccountsContainersCreateRequest req = new TagmanagerAccountsContainersCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                container = new Container() {{
                    accountId = "distinctio";
                    containerId = "quibusdam";
                    domainName = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    enabledBuiltInVariable = new org.openapis.openapi.models.shared.ContainerEnabledBuiltInVariableEnum[]{{
                        add(ContainerEnabledBuiltInVariableEnum.AMP_GTM_EVENT),
                        add(ContainerEnabledBuiltInVariableEnum.FIREBASE_EVENT_PARAMETER_CAMPAIGN),
                    }};
                    fingerprint = "suscipit";
                    name = "Dr. Valerie Toy";
                    notes = "suscipit";
                    publicId = "molestiae";
                    timeZoneCountryId = "minus";
                    timeZoneId = "placeat";
                    usageContext = new org.openapis.openapi.models.shared.ContainerUsageContextEnum[]{{
                        add(ContainerUsageContextEnum.IOS),
                        add(ContainerUsageContextEnum.ANDROID_SDK5),
                        add(ContainerUsageContextEnum.IOS),
                    }};
                }};;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "quis";
                key = "veritatis";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ipsam";
                uploadProtocol = "repellendus";
            }};            

            TagmanagerAccountsContainersCreateResponse res = sdk.accounts.tagmanagerAccountsContainersCreate(req, new TagmanagerAccountsContainersCreateSecurity("sapiente", "quo") {{
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

* [tagmanagerAccountsContainersCreate](docs/accounts/README.md#tagmanageraccountscontainerscreate) - Creates a Container.
* [tagmanagerAccountsContainersDelete](docs/accounts/README.md#tagmanageraccountscontainersdelete) - Deletes a Container.
* [tagmanagerAccountsContainersEnvironmentsCreate](docs/accounts/README.md#tagmanageraccountscontainersenvironmentscreate) - Creates a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsDelete](docs/accounts/README.md#tagmanageraccountscontainersenvironmentsdelete) - Deletes a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsGet](docs/accounts/README.md#tagmanageraccountscontainersenvironmentsget) - Gets a GTM Environment.
* [tagmanagerAccountsContainersEnvironmentsList](docs/accounts/README.md#tagmanageraccountscontainersenvironmentslist) - Lists all GTM Environments of a GTM Container.
* [tagmanagerAccountsContainersEnvironmentsUpdate](docs/accounts/README.md#tagmanageraccountscontainersenvironmentsupdate) - Updates a GTM Environment.
* [tagmanagerAccountsContainersFoldersCreate](docs/accounts/README.md#tagmanageraccountscontainersfolderscreate) - Creates a GTM Folder.
* [tagmanagerAccountsContainersFoldersDelete](docs/accounts/README.md#tagmanageraccountscontainersfoldersdelete) - Deletes a GTM Folder.
* [tagmanagerAccountsContainersFoldersEntitiesList](docs/accounts/README.md#tagmanageraccountscontainersfoldersentitieslist) - List all entities in a GTM Folder.
* [tagmanagerAccountsContainersFoldersGet](docs/accounts/README.md#tagmanageraccountscontainersfoldersget) - Gets a GTM Folder.
* [tagmanagerAccountsContainersFoldersList](docs/accounts/README.md#tagmanageraccountscontainersfolderslist) - Lists all GTM Folders of a Container.
* [tagmanagerAccountsContainersFoldersUpdate](docs/accounts/README.md#tagmanageraccountscontainersfoldersupdate) - Updates a GTM Folder.
* [tagmanagerAccountsContainersGet](docs/accounts/README.md#tagmanageraccountscontainersget) - Gets a Container.
* [tagmanagerAccountsContainersList](docs/accounts/README.md#tagmanageraccountscontainerslist) - Lists all Containers that belongs to a GTM Account.
* [tagmanagerAccountsContainersMoveFoldersUpdate](docs/accounts/README.md#tagmanageraccountscontainersmovefoldersupdate) - Moves entities to a GTM Folder.
* [tagmanagerAccountsContainersReauthorizeEnvironmentsUpdate](docs/accounts/README.md#tagmanageraccountscontainersreauthorizeenvironmentsupdate) - Re-generates the authorization code for a GTM Environment.
* [tagmanagerAccountsContainersTagsCreate](docs/accounts/README.md#tagmanageraccountscontainerstagscreate) - Creates a GTM Tag.
* [tagmanagerAccountsContainersTagsDelete](docs/accounts/README.md#tagmanageraccountscontainerstagsdelete) - Deletes a GTM Tag.
* [tagmanagerAccountsContainersTagsGet](docs/accounts/README.md#tagmanageraccountscontainerstagsget) - Gets a GTM Tag.
* [tagmanagerAccountsContainersTagsList](docs/accounts/README.md#tagmanageraccountscontainerstagslist) - Lists all GTM Tags of a Container.
* [tagmanagerAccountsContainersTagsUpdate](docs/accounts/README.md#tagmanageraccountscontainerstagsupdate) - Updates a GTM Tag.
* [tagmanagerAccountsContainersTriggersCreate](docs/accounts/README.md#tagmanageraccountscontainerstriggerscreate) - Creates a GTM Trigger.
* [tagmanagerAccountsContainersTriggersDelete](docs/accounts/README.md#tagmanageraccountscontainerstriggersdelete) - Deletes a GTM Trigger.
* [tagmanagerAccountsContainersTriggersGet](docs/accounts/README.md#tagmanageraccountscontainerstriggersget) - Gets a GTM Trigger.
* [tagmanagerAccountsContainersTriggersList](docs/accounts/README.md#tagmanageraccountscontainerstriggerslist) - Lists all GTM Triggers of a Container.
* [tagmanagerAccountsContainersTriggersUpdate](docs/accounts/README.md#tagmanageraccountscontainerstriggersupdate) - Updates a GTM Trigger.
* [tagmanagerAccountsContainersUpdate](docs/accounts/README.md#tagmanageraccountscontainersupdate) - Updates a Container.
* [tagmanagerAccountsContainersVariablesCreate](docs/accounts/README.md#tagmanageraccountscontainersvariablescreate) - Creates a GTM Variable.
* [tagmanagerAccountsContainersVariablesDelete](docs/accounts/README.md#tagmanageraccountscontainersvariablesdelete) - Deletes a GTM Variable.
* [tagmanagerAccountsContainersVariablesGet](docs/accounts/README.md#tagmanageraccountscontainersvariablesget) - Gets a GTM Variable.
* [tagmanagerAccountsContainersVariablesList](docs/accounts/README.md#tagmanageraccountscontainersvariableslist) - Lists all GTM Variables of a Container.
* [tagmanagerAccountsContainersVariablesUpdate](docs/accounts/README.md#tagmanageraccountscontainersvariablesupdate) - Updates a GTM Variable.
* [tagmanagerAccountsContainersVersionsCreate](docs/accounts/README.md#tagmanageraccountscontainersversionscreate) - Creates a Container Version.
* [tagmanagerAccountsContainersVersionsDelete](docs/accounts/README.md#tagmanageraccountscontainersversionsdelete) - Deletes a Container Version.
* [tagmanagerAccountsContainersVersionsGet](docs/accounts/README.md#tagmanageraccountscontainersversionsget) - Gets a Container Version.
* [tagmanagerAccountsContainersVersionsList](docs/accounts/README.md#tagmanageraccountscontainersversionslist) - Lists all Container Versions of a GTM Container.
* [tagmanagerAccountsContainersVersionsPublish](docs/accounts/README.md#tagmanageraccountscontainersversionspublish) - Publishes a Container Version.
* [tagmanagerAccountsContainersVersionsRestore](docs/accounts/README.md#tagmanageraccountscontainersversionsrestore) - Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
* [tagmanagerAccountsContainersVersionsUndelete](docs/accounts/README.md#tagmanageraccountscontainersversionsundelete) - Undeletes a Container Version.
* [tagmanagerAccountsContainersVersionsUpdate](docs/accounts/README.md#tagmanageraccountscontainersversionsupdate) - Updates a Container Version.
* [tagmanagerAccountsGet](docs/accounts/README.md#tagmanageraccountsget) - Gets a GTM Account.
* [tagmanagerAccountsList](docs/accounts/README.md#tagmanageraccountslist) - Lists all GTM Accounts that a user has access to.
* [tagmanagerAccountsPermissionsCreate](docs/accounts/README.md#tagmanageraccountspermissionscreate) - Creates a user's Account & Container Permissions.
* [tagmanagerAccountsPermissionsDelete](docs/accounts/README.md#tagmanageraccountspermissionsdelete) - Removes a user from the account, revoking access to it and all of its containers.
* [tagmanagerAccountsPermissionsGet](docs/accounts/README.md#tagmanageraccountspermissionsget) - Gets a user's Account & Container Permissions.
* [tagmanagerAccountsPermissionsList](docs/accounts/README.md#tagmanageraccountspermissionslist) - List all users that have access to the account along with Account and Container Permissions granted to each of them.
* [tagmanagerAccountsPermissionsUpdate](docs/accounts/README.md#tagmanageraccountspermissionsupdate) - Updates a user's Account & Container Permissions.
* [tagmanagerAccountsUpdate](docs/accounts/README.md#tagmanageraccountsupdate) - Updates a GTM Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

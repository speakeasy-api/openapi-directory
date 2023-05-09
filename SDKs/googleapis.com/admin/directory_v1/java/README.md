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
import org.openapis.openapi.models.operations.DirectoryAspsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryAspsDeleteRequest req = new DirectoryAspsDeleteRequest(548814L, "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            DirectoryAspsDeleteResponse res = sdk.asps.directoryAspsDelete(req, new DirectoryAspsDeleteSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
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


### [asps](docs/asps/README.md)

* [directoryAspsDelete](docs/asps/README.md#directoryaspsdelete) - Deletes an ASP issued by a user.
* [directoryAspsGet](docs/asps/README.md#directoryaspsget) - Gets information about an ASP issued by a user.
* [directoryAspsList](docs/asps/README.md#directoryaspslist) - Lists the ASPs issued by a user.

### [channels](docs/channels/README.md)

* [adminChannelsStop](docs/channels/README.md#adminchannelsstop) - Stops watching resources through this channel.

### [chromeosdevices](docs/chromeosdevices/README.md)

* [directoryChromeosdevicesAction](docs/chromeosdevices/README.md#directorychromeosdevicesaction) - Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
* [directoryChromeosdevicesGet](docs/chromeosdevices/README.md#directorychromeosdevicesget) - Retrieves a Chrome OS device's properties.
* [directoryChromeosdevicesList](docs/chromeosdevices/README.md#directorychromeosdeviceslist) - Retrieves a paginated list of Chrome OS devices within an account.
* [directoryChromeosdevicesMoveDevicesToOu](docs/chromeosdevices/README.md#directorychromeosdevicesmovedevicestoou) - Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
* [directoryChromeosdevicesPatch](docs/chromeosdevices/README.md#directorychromeosdevicespatch) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryChromeosdevicesUpdate](docs/chromeosdevices/README.md#directorychromeosdevicesupdate) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### [customer](docs/customer/README.md)

* [adminCustomerDevicesChromeosCommandsGet](docs/customer/README.md#admincustomerdeviceschromeoscommandsget) - Gets command data a specific command issued to the device.
* [adminCustomerDevicesChromeosIssueCommand](docs/customer/README.md#admincustomerdeviceschromeosissuecommand) - Issues a command for the device to execute.

### [customers](docs/customers/README.md)

* [adminCustomersChromePrintServersBatchCreatePrintServers](docs/customers/README.md#admincustomerschromeprintserversbatchcreateprintservers) - Creates multiple print servers.
* [adminCustomersChromePrintServersBatchDeletePrintServers](docs/customers/README.md#admincustomerschromeprintserversbatchdeleteprintservers) - Deletes multiple print servers.
* [adminCustomersChromePrintServersCreate](docs/customers/README.md#admincustomerschromeprintserverscreate) - Creates a print server.
* [adminCustomersChromePrintServersDelete](docs/customers/README.md#admincustomerschromeprintserversdelete) - Deletes a print server.
* [adminCustomersChromePrintServersGet](docs/customers/README.md#admincustomerschromeprintserversget) - Returns a print server's configuration.
* [adminCustomersChromePrintServersList](docs/customers/README.md#admincustomerschromeprintserverslist) - Lists print server configurations.
* [adminCustomersChromePrintServersPatch](docs/customers/README.md#admincustomerschromeprintserverspatch) - Updates a print server's configuration.
* [adminCustomersChromePrintersBatchCreatePrinters](docs/customers/README.md#admincustomerschromeprintersbatchcreateprinters) - Creates printers under given Organization Unit.
* [adminCustomersChromePrintersBatchDeletePrinters](docs/customers/README.md#admincustomerschromeprintersbatchdeleteprinters) - Deletes printers in batch.
* [adminCustomersChromePrintersCreate](docs/customers/README.md#admincustomerschromeprinterscreate) - Creates a printer under given Organization Unit.
* [adminCustomersChromePrintersList](docs/customers/README.md#admincustomerschromeprinterslist) - List printers configs.
* [adminCustomersChromePrintersListPrinterModels](docs/customers/README.md#admincustomerschromeprinterslistprintermodels) - Lists the supported printer models.
* [directoryCustomersGet](docs/customers/README.md#directorycustomersget) - Retrieves a customer.
* [directoryCustomersPatch](docs/customers/README.md#directorycustomerspatch) - Patches a customer.
* [directoryCustomersUpdate](docs/customers/README.md#directorycustomersupdate) - Updates a customer.

### [domainAliases](docs/domainaliases/README.md)

* [directoryDomainAliasesDelete](docs/domainaliases/README.md#directorydomainaliasesdelete) - Deletes a domain Alias of the customer.
* [directoryDomainAliasesGet](docs/domainaliases/README.md#directorydomainaliasesget) - Retrieves a domain alias of the customer.
* [directoryDomainAliasesInsert](docs/domainaliases/README.md#directorydomainaliasesinsert) - Inserts a domain alias of the customer.
* [directoryDomainAliasesList](docs/domainaliases/README.md#directorydomainaliaseslist) - Lists the domain aliases of the customer.

### [domains](docs/domains/README.md)

* [directoryDomainsDelete](docs/domains/README.md#directorydomainsdelete) - Deletes a domain of the customer.
* [directoryDomainsGet](docs/domains/README.md#directorydomainsget) - Retrieves a domain of the customer.
* [directoryDomainsInsert](docs/domains/README.md#directorydomainsinsert) - Inserts a domain of the customer.
* [directoryDomainsList](docs/domains/README.md#directorydomainslist) - Lists the domains of the customer.

### [groups](docs/groups/README.md)

* [directoryGroupsAliasesDelete](docs/groups/README.md#directorygroupsaliasesdelete) - Removes an alias.
* [directoryGroupsAliasesInsert](docs/groups/README.md#directorygroupsaliasesinsert) - Adds an alias for the group.
* [directoryGroupsAliasesList](docs/groups/README.md#directorygroupsaliaseslist) - Lists all aliases for a group.
* [directoryGroupsDelete](docs/groups/README.md#directorygroupsdelete) - Deletes a group.
* [directoryGroupsGet](docs/groups/README.md#directorygroupsget) - Retrieves a group's properties.
* [directoryGroupsInsert](docs/groups/README.md#directorygroupsinsert) - Creates a group.
* [directoryGroupsList](docs/groups/README.md#directorygroupslist) - Retrieves all groups of a domain or of a user given a userKey (paginated).
* [directoryGroupsPatch](docs/groups/README.md#directorygroupspatch) - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryGroupsUpdate](docs/groups/README.md#directorygroupsupdate) - Updates a group's properties.

### [members](docs/members/README.md)

* [directoryMembersDelete](docs/members/README.md#directorymembersdelete) - Removes a member from a group.
* [directoryMembersGet](docs/members/README.md#directorymembersget) - Retrieves a group member's properties.
* [directoryMembersHasMember](docs/members/README.md#directorymembershasmember) - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
* [directoryMembersInsert](docs/members/README.md#directorymembersinsert) - Adds a user to the specified group.
* [directoryMembersList](docs/members/README.md#directorymemberslist) - Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
* [directoryMembersPatch](docs/members/README.md#directorymemberspatch) - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryMembersUpdate](docs/members/README.md#directorymembersupdate) - Updates the membership of a user in the specified group.

### [mobiledevices](docs/mobiledevices/README.md)

* [directoryMobiledevicesAction](docs/mobiledevices/README.md#directorymobiledevicesaction) - Takes an action that affects a mobile device. For example, remotely wiping a device.
* [directoryMobiledevicesDelete](docs/mobiledevices/README.md#directorymobiledevicesdelete) - Removes a mobile device.
* [directoryMobiledevicesGet](docs/mobiledevices/README.md#directorymobiledevicesget) - Retrieves a mobile device's properties.
* [directoryMobiledevicesList](docs/mobiledevices/README.md#directorymobiledeviceslist) - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

### [orgunits](docs/orgunits/README.md)

* [directoryOrgunitsDelete](docs/orgunits/README.md#directoryorgunitsdelete) - Removes an organizational unit.
* [directoryOrgunitsGet](docs/orgunits/README.md#directoryorgunitsget) - Retrieves an organizational unit.
* [directoryOrgunitsInsert](docs/orgunits/README.md#directoryorgunitsinsert) - Adds an organizational unit.
* [directoryOrgunitsList](docs/orgunits/README.md#directoryorgunitslist) - Retrieves a list of all organizational units for an account.
* [directoryOrgunitsPatch](docs/orgunits/README.md#directoryorgunitspatch) - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
* [directoryOrgunitsUpdate](docs/orgunits/README.md#directoryorgunitsupdate) - Updates an organizational unit.

### [privileges](docs/privileges/README.md)

* [directoryPrivilegesList](docs/privileges/README.md#directoryprivilegeslist) - Retrieves a paginated list of all privileges for a customer.

### [resources](docs/resources/README.md)

* [directoryResourcesBuildingsDelete](docs/resources/README.md#directoryresourcesbuildingsdelete) - Deletes a building.
* [directoryResourcesBuildingsGet](docs/resources/README.md#directoryresourcesbuildingsget) - Retrieves a building.
* [directoryResourcesBuildingsInsert](docs/resources/README.md#directoryresourcesbuildingsinsert) - Inserts a building.
* [directoryResourcesBuildingsList](docs/resources/README.md#directoryresourcesbuildingslist) - Retrieves a list of buildings for an account.
* [directoryResourcesBuildingsPatch](docs/resources/README.md#directoryresourcesbuildingspatch) - Patches a building.
* [directoryResourcesBuildingsUpdate](docs/resources/README.md#directoryresourcesbuildingsupdate) - Updates a building.
* [directoryResourcesCalendarsDelete](docs/resources/README.md#directoryresourcescalendarsdelete) - Deletes a calendar resource.
* [directoryResourcesCalendarsGet](docs/resources/README.md#directoryresourcescalendarsget) - Retrieves a calendar resource.
* [directoryResourcesCalendarsInsert](docs/resources/README.md#directoryresourcescalendarsinsert) - Inserts a calendar resource.
* [directoryResourcesCalendarsList](docs/resources/README.md#directoryresourcescalendarslist) - Retrieves a list of calendar resources for an account.
* [directoryResourcesCalendarsPatch](docs/resources/README.md#directoryresourcescalendarspatch) - Patches a calendar resource.
* [directoryResourcesCalendarsUpdate](docs/resources/README.md#directoryresourcescalendarsupdate) - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
* [directoryResourcesFeaturesDelete](docs/resources/README.md#directoryresourcesfeaturesdelete) - Deletes a feature.
* [directoryResourcesFeaturesGet](docs/resources/README.md#directoryresourcesfeaturesget) - Retrieves a feature.
* [directoryResourcesFeaturesInsert](docs/resources/README.md#directoryresourcesfeaturesinsert) - Inserts a feature.
* [directoryResourcesFeaturesList](docs/resources/README.md#directoryresourcesfeatureslist) - Retrieves a list of features for an account.
* [directoryResourcesFeaturesPatch](docs/resources/README.md#directoryresourcesfeaturespatch) - Patches a feature.
* [directoryResourcesFeaturesRename](docs/resources/README.md#directoryresourcesfeaturesrename) - Renames a feature.
* [directoryResourcesFeaturesUpdate](docs/resources/README.md#directoryresourcesfeaturesupdate) - Updates a feature.

### [roleAssignments](docs/roleassignments/README.md)

* [directoryRoleAssignmentsDelete](docs/roleassignments/README.md#directoryroleassignmentsdelete) - Deletes a role assignment.
* [directoryRoleAssignmentsGet](docs/roleassignments/README.md#directoryroleassignmentsget) - Retrieves a role assignment.
* [directoryRoleAssignmentsInsert](docs/roleassignments/README.md#directoryroleassignmentsinsert) - Creates a role assignment.
* [directoryRoleAssignmentsList](docs/roleassignments/README.md#directoryroleassignmentslist) - Retrieves a paginated list of all roleAssignments.

### [roles](docs/roles/README.md)

* [directoryRolesDelete](docs/roles/README.md#directoryrolesdelete) - Deletes a role.
* [directoryRolesGet](docs/roles/README.md#directoryrolesget) - Retrieves a role.
* [directoryRolesInsert](docs/roles/README.md#directoryrolesinsert) - Creates a role.
* [directoryRolesList](docs/roles/README.md#directoryroleslist) - Retrieves a paginated list of all the roles in a domain.
* [directoryRolesPatch](docs/roles/README.md#directoryrolespatch) - Patches a role.
* [directoryRolesUpdate](docs/roles/README.md#directoryrolesupdate) - Updates a role.

### [schemas](docs/schemas/README.md)

* [directorySchemasDelete](docs/schemas/README.md#directoryschemasdelete) - Deletes a schema.
* [directorySchemasGet](docs/schemas/README.md#directoryschemasget) - Retrieves a schema.
* [directorySchemasInsert](docs/schemas/README.md#directoryschemasinsert) - Creates a schema.
* [directorySchemasList](docs/schemas/README.md#directoryschemaslist) - Retrieves all schemas for a customer.
* [directorySchemasPatch](docs/schemas/README.md#directoryschemaspatch) - Patches a schema.
* [directorySchemasUpdate](docs/schemas/README.md#directoryschemasupdate) - Updates a schema.

### [tokens](docs/tokens/README.md)

* [directoryTokensDelete](docs/tokens/README.md#directorytokensdelete) - Deletes all access tokens issued by a user for an application.
* [directoryTokensGet](docs/tokens/README.md#directorytokensget) - Gets information about an access token issued by a user.
* [directoryTokensList](docs/tokens/README.md#directorytokenslist) - Returns the set of tokens specified user has issued to 3rd party applications.

### [twoStepVerification](docs/twostepverification/README.md)

* [directoryTwoStepVerificationTurnOff](docs/twostepverification/README.md#directorytwostepverificationturnoff) - Turns off 2-Step Verification for user.

### [users](docs/users/README.md)

* [directoryUsersAliasesDelete](docs/users/README.md#directoryusersaliasesdelete) - Removes an alias.
* [directoryUsersAliasesInsert](docs/users/README.md#directoryusersaliasesinsert) - Adds an alias.
* [directoryUsersAliasesList](docs/users/README.md#directoryusersaliaseslist) - Lists all aliases for a user.
* [directoryUsersAliasesWatch](docs/users/README.md#directoryusersaliaseswatch) - Watches for changes in users list.
* [directoryUsersDelete](docs/users/README.md#directoryusersdelete) - Deletes a user.
* [directoryUsersGet](docs/users/README.md#directoryusersget) - Retrieves a user.
* [directoryUsersInsert](docs/users/README.md#directoryusersinsert) - Creates a user.
* [directoryUsersList](docs/users/README.md#directoryuserslist) - Retrieves a paginated list of either deleted users or all users in a domain.
* [directoryUsersMakeAdmin](docs/users/README.md#directoryusersmakeadmin) - Makes a user a super administrator.
* [directoryUsersPatch](docs/users/README.md#directoryuserspatch) - Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
* [directoryUsersPhotosDelete](docs/users/README.md#directoryusersphotosdelete) - Removes the user's photo.
* [directoryUsersPhotosGet](docs/users/README.md#directoryusersphotosget) - Retrieves the user's photo.
* [directoryUsersPhotosPatch](docs/users/README.md#directoryusersphotospatch) - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [directoryUsersPhotosUpdate](docs/users/README.md#directoryusersphotosupdate) - Adds a photo for the user.
* [directoryUsersSignOut](docs/users/README.md#directoryuserssignout) - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
* [directoryUsersUndelete](docs/users/README.md#directoryusersundelete) - Undeletes a deleted user.
* [directoryUsersUpdate](docs/users/README.md#directoryusersupdate) - Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.
* [directoryUsersWatch](docs/users/README.md#directoryuserswatch) - Watches for changes in users list.

### [verificationCodes](docs/verificationcodes/README.md)

* [directoryVerificationCodesGenerate](docs/verificationcodes/README.md#directoryverificationcodesgenerate) - Generates new backup verification codes for the user.
* [directoryVerificationCodesInvalidate](docs/verificationcodes/README.md#directoryverificationcodesinvalidate) - Invalidates the current backup verification codes for the user.
* [directoryVerificationCodesList](docs/verificationcodes/README.md#directoryverificationcodeslist) - Returns the current set of valid backup verification codes for the specified user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

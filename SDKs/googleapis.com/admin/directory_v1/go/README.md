# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/admin/directory_v1/go
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
    res, err := s.Asps.DirectoryAspsDelete(ctx, operations.DirectoryAspsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        CodeID: 602763,
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
        UserKey: "suscipit",
    }, operations.DirectoryAspsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Asps](docs/asps/README.md)

* [DirectoryAspsDelete](docs/asps/README.md#directoryaspsdelete) - Deletes an ASP issued by a user.
* [DirectoryAspsGet](docs/asps/README.md#directoryaspsget) - Gets information about an ASP issued by a user.
* [DirectoryAspsList](docs/asps/README.md#directoryaspslist) - Lists the ASPs issued by a user.

### [Channels](docs/channels/README.md)

* [AdminChannelsStop](docs/channels/README.md#adminchannelsstop) - Stops watching resources through this channel.

### [Chromeosdevices](docs/chromeosdevices/README.md)

* [DirectoryChromeosdevicesAction](docs/chromeosdevices/README.md#directorychromeosdevicesaction) - Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
* [DirectoryChromeosdevicesGet](docs/chromeosdevices/README.md#directorychromeosdevicesget) - Retrieves a Chrome OS device's properties.
* [DirectoryChromeosdevicesList](docs/chromeosdevices/README.md#directorychromeosdeviceslist) - Retrieves a paginated list of Chrome OS devices within an account.
* [DirectoryChromeosdevicesMoveDevicesToOu](docs/chromeosdevices/README.md#directorychromeosdevicesmovedevicestoou) - Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
* [DirectoryChromeosdevicesPatch](docs/chromeosdevices/README.md#directorychromeosdevicespatch) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [DirectoryChromeosdevicesUpdate](docs/chromeosdevices/README.md#directorychromeosdevicesupdate) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### [Customer](docs/customer/README.md)

* [AdminCustomerDevicesChromeosCommandsGet](docs/customer/README.md#admincustomerdeviceschromeoscommandsget) - Gets command data a specific command issued to the device.
* [AdminCustomerDevicesChromeosIssueCommand](docs/customer/README.md#admincustomerdeviceschromeosissuecommand) - Issues a command for the device to execute.

### [Customers](docs/customers/README.md)

* [AdminCustomersChromePrintServersBatchCreatePrintServers](docs/customers/README.md#admincustomerschromeprintserversbatchcreateprintservers) - Creates multiple print servers.
* [AdminCustomersChromePrintServersBatchDeletePrintServers](docs/customers/README.md#admincustomerschromeprintserversbatchdeleteprintservers) - Deletes multiple print servers.
* [AdminCustomersChromePrintServersCreate](docs/customers/README.md#admincustomerschromeprintserverscreate) - Creates a print server.
* [AdminCustomersChromePrintServersDelete](docs/customers/README.md#admincustomerschromeprintserversdelete) - Deletes a print server.
* [AdminCustomersChromePrintServersGet](docs/customers/README.md#admincustomerschromeprintserversget) - Returns a print server's configuration.
* [AdminCustomersChromePrintServersList](docs/customers/README.md#admincustomerschromeprintserverslist) - Lists print server configurations.
* [AdminCustomersChromePrintServersPatch](docs/customers/README.md#admincustomerschromeprintserverspatch) - Updates a print server's configuration.
* [AdminCustomersChromePrintersBatchCreatePrinters](docs/customers/README.md#admincustomerschromeprintersbatchcreateprinters) - Creates printers under given Organization Unit.
* [AdminCustomersChromePrintersBatchDeletePrinters](docs/customers/README.md#admincustomerschromeprintersbatchdeleteprinters) - Deletes printers in batch.
* [AdminCustomersChromePrintersCreate](docs/customers/README.md#admincustomerschromeprinterscreate) - Creates a printer under given Organization Unit.
* [AdminCustomersChromePrintersList](docs/customers/README.md#admincustomerschromeprinterslist) - List printers configs.
* [AdminCustomersChromePrintersListPrinterModels](docs/customers/README.md#admincustomerschromeprinterslistprintermodels) - Lists the supported printer models.
* [DirectoryCustomersGet](docs/customers/README.md#directorycustomersget) - Retrieves a customer.
* [DirectoryCustomersPatch](docs/customers/README.md#directorycustomerspatch) - Patches a customer.
* [DirectoryCustomersUpdate](docs/customers/README.md#directorycustomersupdate) - Updates a customer.

### [DomainAliases](docs/domainaliases/README.md)

* [DirectoryDomainAliasesDelete](docs/domainaliases/README.md#directorydomainaliasesdelete) - Deletes a domain Alias of the customer.
* [DirectoryDomainAliasesGet](docs/domainaliases/README.md#directorydomainaliasesget) - Retrieves a domain alias of the customer.
* [DirectoryDomainAliasesInsert](docs/domainaliases/README.md#directorydomainaliasesinsert) - Inserts a domain alias of the customer.
* [DirectoryDomainAliasesList](docs/domainaliases/README.md#directorydomainaliaseslist) - Lists the domain aliases of the customer.

### [Domains](docs/domains/README.md)

* [DirectoryDomainsDelete](docs/domains/README.md#directorydomainsdelete) - Deletes a domain of the customer.
* [DirectoryDomainsGet](docs/domains/README.md#directorydomainsget) - Retrieves a domain of the customer.
* [DirectoryDomainsInsert](docs/domains/README.md#directorydomainsinsert) - Inserts a domain of the customer.
* [DirectoryDomainsList](docs/domains/README.md#directorydomainslist) - Lists the domains of the customer.

### [Groups](docs/groups/README.md)

* [DirectoryGroupsAliasesDelete](docs/groups/README.md#directorygroupsaliasesdelete) - Removes an alias.
* [DirectoryGroupsAliasesInsert](docs/groups/README.md#directorygroupsaliasesinsert) - Adds an alias for the group.
* [DirectoryGroupsAliasesList](docs/groups/README.md#directorygroupsaliaseslist) - Lists all aliases for a group.
* [DirectoryGroupsDelete](docs/groups/README.md#directorygroupsdelete) - Deletes a group.
* [DirectoryGroupsGet](docs/groups/README.md#directorygroupsget) - Retrieves a group's properties.
* [DirectoryGroupsInsert](docs/groups/README.md#directorygroupsinsert) - Creates a group.
* [DirectoryGroupsList](docs/groups/README.md#directorygroupslist) - Retrieves all groups of a domain or of a user given a userKey (paginated).
* [DirectoryGroupsPatch](docs/groups/README.md#directorygroupspatch) - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [DirectoryGroupsUpdate](docs/groups/README.md#directorygroupsupdate) - Updates a group's properties.

### [Members](docs/members/README.md)

* [DirectoryMembersDelete](docs/members/README.md#directorymembersdelete) - Removes a member from a group.
* [DirectoryMembersGet](docs/members/README.md#directorymembersget) - Retrieves a group member's properties.
* [DirectoryMembersHasMember](docs/members/README.md#directorymembershasmember) - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
* [DirectoryMembersInsert](docs/members/README.md#directorymembersinsert) - Adds a user to the specified group.
* [DirectoryMembersList](docs/members/README.md#directorymemberslist) - Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
* [DirectoryMembersPatch](docs/members/README.md#directorymemberspatch) - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [DirectoryMembersUpdate](docs/members/README.md#directorymembersupdate) - Updates the membership of a user in the specified group.

### [Mobiledevices](docs/mobiledevices/README.md)

* [DirectoryMobiledevicesAction](docs/mobiledevices/README.md#directorymobiledevicesaction) - Takes an action that affects a mobile device. For example, remotely wiping a device.
* [DirectoryMobiledevicesDelete](docs/mobiledevices/README.md#directorymobiledevicesdelete) - Removes a mobile device.
* [DirectoryMobiledevicesGet](docs/mobiledevices/README.md#directorymobiledevicesget) - Retrieves a mobile device's properties.
* [DirectoryMobiledevicesList](docs/mobiledevices/README.md#directorymobiledeviceslist) - Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

### [Orgunits](docs/orgunits/README.md)

* [DirectoryOrgunitsDelete](docs/orgunits/README.md#directoryorgunitsdelete) - Removes an organizational unit.
* [DirectoryOrgunitsGet](docs/orgunits/README.md#directoryorgunitsget) - Retrieves an organizational unit.
* [DirectoryOrgunitsInsert](docs/orgunits/README.md#directoryorgunitsinsert) - Adds an organizational unit.
* [DirectoryOrgunitsList](docs/orgunits/README.md#directoryorgunitslist) - Retrieves a list of all organizational units for an account.
* [DirectoryOrgunitsPatch](docs/orgunits/README.md#directoryorgunitspatch) - Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)
* [DirectoryOrgunitsUpdate](docs/orgunits/README.md#directoryorgunitsupdate) - Updates an organizational unit.

### [Privileges](docs/privileges/README.md)

* [DirectoryPrivilegesList](docs/privileges/README.md#directoryprivilegeslist) - Retrieves a paginated list of all privileges for a customer.

### [Resources](docs/resources/README.md)

* [DirectoryResourcesBuildingsDelete](docs/resources/README.md#directoryresourcesbuildingsdelete) - Deletes a building.
* [DirectoryResourcesBuildingsGet](docs/resources/README.md#directoryresourcesbuildingsget) - Retrieves a building.
* [DirectoryResourcesBuildingsInsert](docs/resources/README.md#directoryresourcesbuildingsinsert) - Inserts a building.
* [DirectoryResourcesBuildingsList](docs/resources/README.md#directoryresourcesbuildingslist) - Retrieves a list of buildings for an account.
* [DirectoryResourcesBuildingsPatch](docs/resources/README.md#directoryresourcesbuildingspatch) - Patches a building.
* [DirectoryResourcesBuildingsUpdate](docs/resources/README.md#directoryresourcesbuildingsupdate) - Updates a building.
* [DirectoryResourcesCalendarsDelete](docs/resources/README.md#directoryresourcescalendarsdelete) - Deletes a calendar resource.
* [DirectoryResourcesCalendarsGet](docs/resources/README.md#directoryresourcescalendarsget) - Retrieves a calendar resource.
* [DirectoryResourcesCalendarsInsert](docs/resources/README.md#directoryresourcescalendarsinsert) - Inserts a calendar resource.
* [DirectoryResourcesCalendarsList](docs/resources/README.md#directoryresourcescalendarslist) - Retrieves a list of calendar resources for an account.
* [DirectoryResourcesCalendarsPatch](docs/resources/README.md#directoryresourcescalendarspatch) - Patches a calendar resource.
* [DirectoryResourcesCalendarsUpdate](docs/resources/README.md#directoryresourcescalendarsupdate) - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
* [DirectoryResourcesFeaturesDelete](docs/resources/README.md#directoryresourcesfeaturesdelete) - Deletes a feature.
* [DirectoryResourcesFeaturesGet](docs/resources/README.md#directoryresourcesfeaturesget) - Retrieves a feature.
* [DirectoryResourcesFeaturesInsert](docs/resources/README.md#directoryresourcesfeaturesinsert) - Inserts a feature.
* [DirectoryResourcesFeaturesList](docs/resources/README.md#directoryresourcesfeatureslist) - Retrieves a list of features for an account.
* [DirectoryResourcesFeaturesPatch](docs/resources/README.md#directoryresourcesfeaturespatch) - Patches a feature.
* [DirectoryResourcesFeaturesRename](docs/resources/README.md#directoryresourcesfeaturesrename) - Renames a feature.
* [DirectoryResourcesFeaturesUpdate](docs/resources/README.md#directoryresourcesfeaturesupdate) - Updates a feature.

### [RoleAssignments](docs/roleassignments/README.md)

* [DirectoryRoleAssignmentsDelete](docs/roleassignments/README.md#directoryroleassignmentsdelete) - Deletes a role assignment.
* [DirectoryRoleAssignmentsGet](docs/roleassignments/README.md#directoryroleassignmentsget) - Retrieves a role assignment.
* [DirectoryRoleAssignmentsInsert](docs/roleassignments/README.md#directoryroleassignmentsinsert) - Creates a role assignment.
* [DirectoryRoleAssignmentsList](docs/roleassignments/README.md#directoryroleassignmentslist) - Retrieves a paginated list of all roleAssignments.

### [Roles](docs/roles/README.md)

* [DirectoryRolesDelete](docs/roles/README.md#directoryrolesdelete) - Deletes a role.
* [DirectoryRolesGet](docs/roles/README.md#directoryrolesget) - Retrieves a role.
* [DirectoryRolesInsert](docs/roles/README.md#directoryrolesinsert) - Creates a role.
* [DirectoryRolesList](docs/roles/README.md#directoryroleslist) - Retrieves a paginated list of all the roles in a domain.
* [DirectoryRolesPatch](docs/roles/README.md#directoryrolespatch) - Patches a role.
* [DirectoryRolesUpdate](docs/roles/README.md#directoryrolesupdate) - Updates a role.

### [Schemas](docs/schemas/README.md)

* [DirectorySchemasDelete](docs/schemas/README.md#directoryschemasdelete) - Deletes a schema.
* [DirectorySchemasGet](docs/schemas/README.md#directoryschemasget) - Retrieves a schema.
* [DirectorySchemasInsert](docs/schemas/README.md#directoryschemasinsert) - Creates a schema.
* [DirectorySchemasList](docs/schemas/README.md#directoryschemaslist) - Retrieves all schemas for a customer.
* [DirectorySchemasPatch](docs/schemas/README.md#directoryschemaspatch) - Patches a schema.
* [DirectorySchemasUpdate](docs/schemas/README.md#directoryschemasupdate) - Updates a schema.

### [Tokens](docs/tokens/README.md)

* [DirectoryTokensDelete](docs/tokens/README.md#directorytokensdelete) - Deletes all access tokens issued by a user for an application.
* [DirectoryTokensGet](docs/tokens/README.md#directorytokensget) - Gets information about an access token issued by a user.
* [DirectoryTokensList](docs/tokens/README.md#directorytokenslist) - Returns the set of tokens specified user has issued to 3rd party applications.

### [TwoStepVerification](docs/twostepverification/README.md)

* [DirectoryTwoStepVerificationTurnOff](docs/twostepverification/README.md#directorytwostepverificationturnoff) - Turns off 2-Step Verification for user.

### [Users](docs/users/README.md)

* [DirectoryUsersAliasesDelete](docs/users/README.md#directoryusersaliasesdelete) - Removes an alias.
* [DirectoryUsersAliasesInsert](docs/users/README.md#directoryusersaliasesinsert) - Adds an alias.
* [DirectoryUsersAliasesList](docs/users/README.md#directoryusersaliaseslist) - Lists all aliases for a user.
* [DirectoryUsersAliasesWatch](docs/users/README.md#directoryusersaliaseswatch) - Watches for changes in users list.
* [DirectoryUsersDelete](docs/users/README.md#directoryusersdelete) - Deletes a user.
* [DirectoryUsersGet](docs/users/README.md#directoryusersget) - Retrieves a user.
* [DirectoryUsersInsert](docs/users/README.md#directoryusersinsert) - Creates a user.
* [DirectoryUsersList](docs/users/README.md#directoryuserslist) - Retrieves a paginated list of either deleted users or all users in a domain.
* [DirectoryUsersMakeAdmin](docs/users/README.md#directoryusersmakeadmin) - Makes a user a super administrator.
* [DirectoryUsersPatch](docs/users/README.md#directoryuserspatch) - Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
* [DirectoryUsersPhotosDelete](docs/users/README.md#directoryusersphotosdelete) - Removes the user's photo.
* [DirectoryUsersPhotosGet](docs/users/README.md#directoryusersphotosget) - Retrieves the user's photo.
* [DirectoryUsersPhotosPatch](docs/users/README.md#directoryusersphotospatch) - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [DirectoryUsersPhotosUpdate](docs/users/README.md#directoryusersphotosupdate) - Adds a photo for the user.
* [DirectoryUsersSignOut](docs/users/README.md#directoryuserssignout) - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
* [DirectoryUsersUndelete](docs/users/README.md#directoryusersundelete) - Undeletes a deleted user.
* [DirectoryUsersUpdate](docs/users/README.md#directoryusersupdate) - Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.
* [DirectoryUsersWatch](docs/users/README.md#directoryuserswatch) - Watches for changes in users list.

### [VerificationCodes](docs/verificationcodes/README.md)

* [DirectoryVerificationCodesGenerate](docs/verificationcodes/README.md#directoryverificationcodesgenerate) - Generates new backup verification codes for the user.
* [DirectoryVerificationCodesInvalidate](docs/verificationcodes/README.md#directoryverificationcodesinvalidate) - Invalidates the current backup verification codes for the user.
* [DirectoryVerificationCodesList](docs/verificationcodes/README.md#directoryverificationcodeslist) - Returns the current set of valid backup verification codes for the specified user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

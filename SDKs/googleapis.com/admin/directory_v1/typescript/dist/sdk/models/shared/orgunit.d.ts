import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.
 */
export declare class OrgUnit extends SpeakeasyBase {
    /**
     * Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. For more information on inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).
     */
    blockInheritance?: boolean;
    /**
     * Description of the organizational unit.
     */
    description?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.
     */
    kind?: string;
    /**
     * The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.
     */
    name?: string;
    /**
     * The unique ID of the organizational unit.
     */
    orgUnitId?: string;
    /**
     * The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).
     */
    orgUnitPath?: string;
    /**
     * The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.
     */
    parentOrgUnitId?: string;
    /**
     * The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.
     */
    parentOrgUnitPath?: string;
}

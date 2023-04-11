import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A binding of a user to a set of roles.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessBinding extends SpeakeasyBase {
    /**
     * Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200"
     */
    name?: string;
    /**
     * A list of roles for to grant to the parent resource. Valid values: predefinedRoles/viewer predefinedRoles/analyst predefinedRoles/editor predefinedRoles/admin predefinedRoles/no-cost-data predefinedRoles/no-revenue-data For users, if an empty list of roles is set, this AccessBinding will be deleted.
     */
    roles?: string[];
    /**
     * If set, the email address of the user to set roles for. Format: "someuser@gmail.com"
     */
    user?: string;
}
/**
 * A binding of a user to a set of roles.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessBindingInput extends SpeakeasyBase {
    /**
     * A list of roles for to grant to the parent resource. Valid values: predefinedRoles/viewer predefinedRoles/analyst predefinedRoles/editor predefinedRoles/admin predefinedRoles/no-cost-data predefinedRoles/no-revenue-data For users, if an empty list of roles is set, this AccessBinding will be deleted.
     */
    roles?: string[];
    /**
     * If set, the email address of the user to set roles for. Format: "someuser@gmail.com"
     */
    user?: string;
}

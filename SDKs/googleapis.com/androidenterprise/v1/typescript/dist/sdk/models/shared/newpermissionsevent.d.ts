import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event generated when new permissions are added to an app.
 */
export declare class NewPermissionsEvent extends SpeakeasyBase {
    /**
     * The set of permissions that the enterprise admin has already approved for this application. Use Permissions.Get on the EMM API to retrieve details about these permissions.
     */
    approvedPermissions?: string[];
    /**
     * The id of the product (e.g. "app:com.google.android.gm") for which new permissions were added. This field will always be present.
     */
    productId?: string;
    /**
     * The set of permissions that the app is currently requesting. Use Permissions.Get on the EMM API to retrieve details about these permissions.
     */
    requestedPermissions?: string[];
}

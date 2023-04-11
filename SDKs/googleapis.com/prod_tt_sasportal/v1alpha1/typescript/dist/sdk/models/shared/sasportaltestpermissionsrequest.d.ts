import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for `TestPermissions` method.
 */
export declare class SasPortalTestPermissionsRequest extends SpeakeasyBase {
    /**
     * The set of permissions to check for the `resource`.
     */
    permissions?: string[];
    /**
     * Required. The resource for which the permissions are being requested.
     */
    resource?: string;
}

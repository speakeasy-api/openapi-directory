import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
 */
export declare class GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest extends SpeakeasyBase {
    /**
     * Required. Label Permission resource name.
     */
    name?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
}

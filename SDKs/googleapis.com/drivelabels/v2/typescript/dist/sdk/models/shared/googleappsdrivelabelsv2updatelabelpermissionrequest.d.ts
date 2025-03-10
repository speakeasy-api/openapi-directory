import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2LabelPermission } from "./googleappsdrivelabelsv2labelpermission";
/**
 * Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
 */
export declare class GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest extends SpeakeasyBase {
    /**
     * The permission that applies to a principal (user, group, audience) on a label.
     */
    labelPermission?: GoogleAppsDriveLabelsV2LabelPermission;
    /**
     * Required. The parent Label resource name.
     */
    parent?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
}

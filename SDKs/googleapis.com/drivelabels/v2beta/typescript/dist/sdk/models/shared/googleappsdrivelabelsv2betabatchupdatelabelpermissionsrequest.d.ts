import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest } from "./googleappsdrivelabelsv2betaupdatelabelpermissionrequest";
/**
 * Updates one or more Label Permissions.
 */
export declare class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest extends SpeakeasyBase {
    /**
     * Required. The request message specifying the resources to update.
     */
    requests?: GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest[];
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
     */
    useAdminAccess?: boolean;
}

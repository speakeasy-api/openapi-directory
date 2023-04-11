import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2LabelPermission } from "./googleappsdrivelabelsv2labelpermission";
/**
 * Response for updating one or more Label Permissions.
 */
export declare class GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse extends SpeakeasyBase {
    /**
     * Required. Permissions updated.
     */
    permissions?: GoogleAppsDriveLabelsV2LabelPermission[];
}

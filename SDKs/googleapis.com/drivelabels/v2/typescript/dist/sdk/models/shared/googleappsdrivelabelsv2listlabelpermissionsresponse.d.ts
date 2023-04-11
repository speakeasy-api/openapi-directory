import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2LabelPermission } from "./googleappsdrivelabelsv2labelpermission";
/**
 * Response for listing the permissions on a Label.
 */
export declare class GoogleAppsDriveLabelsV2ListLabelPermissionsResponse extends SpeakeasyBase {
    /**
     * Label permissions.
     */
    labelPermissions?: GoogleAppsDriveLabelsV2LabelPermission[];
    /**
     * The token of the next page in the response.
     */
    nextPageToken?: string;
}

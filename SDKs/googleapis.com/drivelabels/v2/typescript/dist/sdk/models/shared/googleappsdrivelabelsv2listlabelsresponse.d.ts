import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2Label } from "./googleappsdrivelabelsv2label";
/**
 * Response for listing Labels.
 */
export declare class GoogleAppsDriveLabelsV2ListLabelsResponse extends SpeakeasyBase {
    /**
     * Labels.
     */
    labels?: GoogleAppsDriveLabelsV2Label[];
    /**
     * The token of the next page in the response.
     */
    nextPageToken?: string;
}

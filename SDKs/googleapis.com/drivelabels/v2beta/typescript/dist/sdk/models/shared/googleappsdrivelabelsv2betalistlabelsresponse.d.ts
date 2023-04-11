import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabel } from "./googleappsdrivelabelsv2betalabel";
/**
 * Response for listing Labels.
 */
export declare class GoogleAppsDriveLabelsV2betaListLabelsResponse extends SpeakeasyBase {
    /**
     * Labels.
     */
    labels?: GoogleAppsDriveLabelsV2betaLabel[];
    /**
     * The token of the next page in the response.
     */
    nextPageToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2LabelLock } from "./googleappsdrivelabelsv2labellock";
/**
 * The response to a ListLabelLocksRequest.
 */
export declare class GoogleAppsDriveLabelsV2ListLabelLocksResponse extends SpeakeasyBase {
    /**
     * LabelLocks.
     */
    labelLocks?: GoogleAppsDriveLabelsV2LabelLock[];
    /**
     * The token of the next page in the response.
     */
    nextPageToken?: string;
}

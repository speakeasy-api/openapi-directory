import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaLabelLock } from "./googleappsdrivelabelsv2betalabellock";
/**
 * The response to a ListLabelLocksRequest.
 */
export declare class GoogleAppsDriveLabelsV2betaListLabelLocksResponse extends SpeakeasyBase {
    /**
     * LabelLocks.
     */
    labelLocks?: GoogleAppsDriveLabelsV2betaLabelLock[];
    /**
     * The token of the next page in the response.
     */
    nextPageToken?: string;
}

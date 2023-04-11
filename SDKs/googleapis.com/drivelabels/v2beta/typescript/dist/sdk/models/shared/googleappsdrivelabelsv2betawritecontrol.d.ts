import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides control over how write requests are executed. When not specified, the last write wins.
 */
export declare class GoogleAppsDriveLabelsV2betaWriteControl extends SpeakeasyBase {
    /**
     * The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.
     */
    requiredRevisionId?: string;
}

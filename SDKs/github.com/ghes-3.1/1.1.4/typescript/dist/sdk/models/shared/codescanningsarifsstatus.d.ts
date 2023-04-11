import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `pending` files have not yet been processed, while `complete` means all results in the SARIF have been stored.
 */
export declare enum CodeScanningSarifsStatusProcessingStatusEnum {
    Pending = "pending",
    Complete = "complete"
}
/**
 * Response
 */
export declare class CodeScanningSarifsStatus extends SpeakeasyBase {
    /**
     * The REST API URL for getting the analyses associated with the upload.
     */
    analysesUrl?: string;
    /**
     * `pending` files have not yet been processed, while `complete` means all results in the SARIF have been stored.
     */
    processingStatus?: CodeScanningSarifsStatusProcessingStatusEnum;
}

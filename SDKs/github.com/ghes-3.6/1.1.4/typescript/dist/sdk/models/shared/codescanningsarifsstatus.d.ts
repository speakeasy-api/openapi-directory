import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
 */
export declare enum CodeScanningSarifsStatusProcessingStatusEnum {
    Pending = "pending",
    Complete = "complete",
    Failed = "failed"
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
     * Any errors that ocurred during processing of the delivery.
     */
    errors?: string[];
    /**
     * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
     */
    processingStatus?: CodeScanningSarifsStatusProcessingStatusEnum;
}

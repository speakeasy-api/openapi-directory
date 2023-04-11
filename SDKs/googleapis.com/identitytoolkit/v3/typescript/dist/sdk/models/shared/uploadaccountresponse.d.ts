import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadAccountResponseError extends SpeakeasyBase {
    /**
     * The index of the malformed account, starting from 0.
     */
    index?: number;
    /**
     * Detailed error message for the account info.
     */
    message?: string;
}
/**
 * Respone of uploading accounts in batch.
 */
export declare class UploadAccountResponse extends SpeakeasyBase {
    /**
     * The error encountered while processing the account info.
     */
    error?: UploadAccountResponseError[];
    /**
     * The fixed string "identitytoolkit#UploadAccountResponse".
     */
    kind?: string;
}

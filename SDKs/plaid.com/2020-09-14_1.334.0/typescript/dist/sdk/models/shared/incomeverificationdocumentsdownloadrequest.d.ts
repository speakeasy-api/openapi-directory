import { SpeakeasyBase } from "../../../internal/utils";
/**
 * IncomeVerificationDocumentsDownloadRequest defines the request schema for `/income/verification/documents/download`.
 */
export declare class IncomeVerificationDocumentsDownloadRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The document ID to download. If passed, a single document will be returned in the resulting zip file, rather than all document
     */
    documentId?: string;
    /**
     * The ID of the verification.
     */
    incomeVerificationId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

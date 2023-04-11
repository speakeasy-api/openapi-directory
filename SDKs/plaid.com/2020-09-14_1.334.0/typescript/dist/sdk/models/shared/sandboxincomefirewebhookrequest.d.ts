import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification status processing has completed. If the user uploaded multiple documents, this webhook will fire when all documents have finished processing. Call the `/income/verification/paystubs/get` endpoint and check the document metadata to see which documents were successfully parsed.
 *
 * @remarks
 *
 * `VERIFICATION_STATUS_PROCESSING_FAILED`: A failure occurred when attempting to process the verification documentation.
 *
 * `VERIFICATION_STATUS_PENDING_APPROVAL`: (deprecated) The income verification has been sent to the user for review.
 */
export declare enum SandboxIncomeFireWebhookRequestVerificationStatusEnum {
    VerificationStatusProcessingComplete = "VERIFICATION_STATUS_PROCESSING_COMPLETE",
    VerificationStatusProcessingFailed = "VERIFICATION_STATUS_PROCESSING_FAILED",
    VerificationStatusPendingApproval = "VERIFICATION_STATUS_PENDING_APPROVAL"
}
/**
 * SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook`
 */
export declare class SandboxIncomeFireWebhookRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The Item ID associated with the verification.
     */
    itemId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The Plaid `user_id` of the User associated with this webhook, warning, or error.
     */
    userId?: string;
    /**
     * `VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification status processing has completed. If the user uploaded multiple documents, this webhook will fire when all documents have finished processing. Call the `/income/verification/paystubs/get` endpoint and check the document metadata to see which documents were successfully parsed.
     *
     * @remarks
     *
     * `VERIFICATION_STATUS_PROCESSING_FAILED`: A failure occurred when attempting to process the verification documentation.
     *
     * `VERIFICATION_STATUS_PENDING_APPROVAL`: (deprecated) The income verification has been sent to the user for review.
     */
    verificationStatus: SandboxIncomeFireWebhookRequestVerificationStatusEnum;
    /**
     * The URL to which the webhook should be sent.
     */
    webhook: string;
}

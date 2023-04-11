import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request input for fetching an identity verification
 */
export declare class IdentityVerificationGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * ID of the associated Identity Verification attempt.
     */
    identityVerificationId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

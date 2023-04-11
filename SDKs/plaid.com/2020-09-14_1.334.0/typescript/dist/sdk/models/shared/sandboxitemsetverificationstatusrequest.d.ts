import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The verification status to set the account to.
 */
export declare enum SandboxItemSetVerificationStatusRequestVerificationStatusEnum {
    AutomaticallyVerified = "automatically_verified",
    VerificationExpired = "verification_expired"
}
/**
 * SandboxItemSetVerificationStatusRequest defines the request schema for `/sandbox/item/set_verification_status`
 */
export declare class SandboxItemSetVerificationStatusRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * The `account_id` of the account whose verification status is to be modified
     */
    accountId: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The verification status to set the account to.
     */
    verificationStatus: SandboxItemSetVerificationStatusRequestVerificationStatusEnum;
}

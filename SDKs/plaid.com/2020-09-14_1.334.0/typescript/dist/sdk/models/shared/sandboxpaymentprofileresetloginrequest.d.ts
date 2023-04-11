import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SandboxPaymentProfileResetLoginRequest defines the request schema for `/sandbox/payment_profile/reset_login`
 */
export declare class SandboxPaymentProfileResetLoginRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * A payment profile token associated with the Payment Profile data that is being requested.
     */
    paymentProfileToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

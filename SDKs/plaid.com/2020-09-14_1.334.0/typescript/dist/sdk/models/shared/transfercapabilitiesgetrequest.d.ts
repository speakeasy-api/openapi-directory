import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/capabilities/get`
 */
export declare class TransferCapabilitiesGetRequest extends SpeakeasyBase {
    /**
     * The Plaid `access_token` for the account that will be debited or credited. Required if not using `payment_profile_token`.
     */
    accessToken?: string;
    /**
     * The Plaid `account_id` corresponding to the end-user account that will be debited or credited. Returned only if `account_id` was set on intent creation.
     */
    accountId?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * A payment profile token associated with the Payment Profile data that is being requested.
     */
    paymentProfileToken?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

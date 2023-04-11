import { SpeakeasyBase } from "../../../internal/utils";
/**
 * IncomeVerificationPaystubsGetRequest defines the request schema for `/income/verification/paystubs/get`.
 */
export declare class IncomeVerificationPaystubsGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The ID of the verification for which to get paystub information.
     */
    incomeVerificationId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

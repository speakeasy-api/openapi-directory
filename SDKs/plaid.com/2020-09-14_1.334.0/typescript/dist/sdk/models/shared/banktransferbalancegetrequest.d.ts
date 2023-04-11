import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/bank_transfer/balance/get`
 */
export declare class BankTransferBalanceGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * If multiple origination accounts are available, `origination_account_id` must be used to specify the account for which balance will be returned.
     */
    originationAccountId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

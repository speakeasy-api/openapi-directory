import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/bank_transfer/cancel`
 */
export declare class BankTransferCancelRequest extends SpeakeasyBase {
    /**
     * Plaid’s unique identifier for a bank transfer.
     */
    bankTransferId: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

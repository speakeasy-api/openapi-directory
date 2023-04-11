import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/migrate_account`
 */
export declare class TransferMigrateAccountRequest extends SpeakeasyBase {
    /**
     * The user's account number.
     */
    accountNumber: string;
    /**
     * The type of the bank account (`checking` or `savings`).
     */
    accountType: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The user's routing number.
     */
    routingNumber: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The user's wire transfer routing number. This is the ABA number; for some institutions, this may differ from the ACH number used in `routing_number`.
     */
    wireRoutingNumber?: string;
}

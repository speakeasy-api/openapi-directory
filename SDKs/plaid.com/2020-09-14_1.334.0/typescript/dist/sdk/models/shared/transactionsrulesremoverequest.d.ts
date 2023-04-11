import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TransactionsRulesRemoveRequest defines the request schema for `/beta/transactions/rules/v1/remove`
 */
export declare class TransactionsRulesRemoveRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * A rule's unique identifier
     */
    ruleId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

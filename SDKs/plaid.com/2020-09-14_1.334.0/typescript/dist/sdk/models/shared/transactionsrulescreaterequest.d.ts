import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionsRuleDetails } from "./transactionsruledetails";
/**
 * TransactionsRulesCreateRequest defines the request schema for `beta/transactions/rules/v1/create`
 */
export declare class TransactionsRulesCreateRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Personal finance detailed category.
     *
     * @remarks
     *
     * See the [`taxonomy csv file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.
     *
     */
    personalFinanceCategory: string;
    /**
     * A representation of transactions rule details.
     */
    ruleDetails: TransactionsRuleDetails;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}

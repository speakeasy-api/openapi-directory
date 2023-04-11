import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CreditPayrollIncomeGetRequest defines the request schema for `/credit/payroll_income/get`.
 */
export declare class CreditPayrollIncomeGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The user token associated with the User data is being requested for.
     */
    userToken?: string;
}

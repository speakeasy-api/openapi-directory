import { SpeakeasyBase } from "../../../internal/utils";
import { IncomeVerificationPrecheckEmployer } from "./incomeverificationprecheckemployer";
import { IncomeVerificationPrecheckMilitaryInfo } from "./incomeverificationprecheckmilitaryinfo";
import { IncomeVerificationPrecheckPayrollInstitution } from "./incomeverificationprecheckpayrollinstitution";
/**
 * Defines the request schema for `/credit/payroll_income/precheck`.
 */
export declare class CreditPayrollIncomePrecheckRequest extends SpeakeasyBase {
    /**
     * An array of access tokens corresponding to Items belonging to the user whose eligibility is being checked. Note that if the Items specified here are not already initialized with `transactions`, providing them in this field will cause these Items to be initialized with (and billed for) the Transactions product.
     */
    accessTokens?: string[];
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Information about the end user's employer
     */
    employer?: IncomeVerificationPrecheckEmployer;
    /**
     * Information about the end user's payroll institution
     */
    payrollInstitution?: IncomeVerificationPrecheckPayrollInstitution;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * Data about military info in the income verification precheck.
     */
    usMilitaryInfo?: IncomeVerificationPrecheckMilitaryInfo;
    /**
     * The user token associated with the User data is being requested for.
     */
    userToken?: string;
}

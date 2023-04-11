import { SpeakeasyBase } from "../../../internal/utils";
import { IncomeVerificationPrecheckEmployer } from "./incomeverificationprecheckemployer";
import { IncomeVerificationPrecheckMilitaryInfo } from "./incomeverificationprecheckmilitaryinfo";
import { IncomeVerificationPrecheckPayrollInstitution } from "./incomeverificationprecheckpayrollinstitution";
import { IncomeVerificationPrecheckUser } from "./incomeverificationprecheckuser";
/**
 * IncomeVerificationPrecheckRequest defines the request schema for `/income/verification/precheck`
 */
export declare class IncomeVerificationPrecheckRequest extends SpeakeasyBase {
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
    transactionsAccessToken?: string;
    /**
     * An array of access tokens corresponding to Items belonging to the user whose eligibility is being checked. Note that if the Items specified here are not already initialized with `transactions`, providing them in this field will cause these Items to be initialized with (and billed for) the Transactions product.
     */
    transactionsAccessTokens?: string[];
    /**
     * Data about military info in the income verification precheck.
     */
    usMilitaryInfo?: IncomeVerificationPrecheckMilitaryInfo;
    /**
     * Information about the user whose eligibility is being evaluated.
     */
    user?: IncomeVerificationPrecheckUser;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { IncomeVerificationPayrollFlowTypeEnum } from "./incomeverificationpayrollflowtypeenum";
/**
 * Specifies options for initializing Link for use with Payroll Income.
 */
export declare class LinkTokenCreateRequestIncomeVerificationPayrollIncome extends SpeakeasyBase {
    /**
     * The types of payroll income verification to enable for the Link session. If none are specified, then users will see both document and digital payroll income.
     */
    flowTypes?: IncomeVerificationPayrollFlowTypeEnum[];
    /**
     * An identifier to indicate whether the income verification Link token will be used for an update or not
     */
    isUpdateMode?: boolean;
}

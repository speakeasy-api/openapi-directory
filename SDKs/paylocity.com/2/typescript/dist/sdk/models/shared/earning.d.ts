import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The employee earning model
 */
export declare class Earning extends SpeakeasyBase {
    /**
     * Third-party agency associated with earning. Must match Company setup.<br  />Max length: 10
     */
    agency?: string;
    /**
     * Value that matches CalculationCode to add to gross wages. For percentage (%), enter whole number (10 = 10%).  <br  />Decimal(12,2)
     */
    amount?: number;
    /**
     * Year to Date dollar amount not to be exceeded for an earning in the calendar year. Used only with company driven maximums. <br  />Decimal(12,2)
     */
    annualMaximum?: number;
    /**
     * Defines how earnings are calculated. Common values are *% (percentage of gross), flat (flat dollar amount)*. Defaulted to the Company setup calcCode for earning. <br  />Max length: 20
     */
    calculationCode?: string;
    /**
     * Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10
     */
    costCenter1?: string;
    /**
     * Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10
     */
    costCenter2?: string;
    /**
     * Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10
     */
    costCenter3?: string;
    /**
     * Earning code. Must match Company setup. <br  />Max length: 10
     */
    earningCode: string;
    /**
     * Date earning is active. Defaulted to run date or check date based on Company setup. Common formats are MM-DD-CCYY, CCYY-MM-DD.
     */
    effectiveDate?: string;
    /**
     * Stop date of an earning. Common formats are MM-DD-CCYY, CCYY-MM-DD.
     */
    endDate?: string;
    /**
     * Needed if earning is applied differently from the payroll frequency (one time earning for example).<br  /> Max length: 5
     */
    frequency?: string;
    /**
     * Dollar amount. The employee earning will stop when the goal amount is reached.<br  /> Decimal(12,2)
     */
    goal?: number;
    /**
     * The value is used in conjunction with the Rate field. When entering Group Term Life Insurance (GTL), it should contain the full amount of the group term life insurance policy. <br  /> Decimal(12,2)
     */
    hoursOrUnits?: number;
    /**
     * Used for ACA. If not entered, defaulted to Company earning setup.
     */
    isSelfInsured?: boolean;
    /**
     * Job code associated with earnings. Must match Company setup.<br  /> Max length: 20
     */
    jobCode?: string;
    /**
     * Information to print on the check stub if agency is set up for this earning. <br  />Max length: 50
     */
    miscellaneousInfo?: string;
    /**
     * Amount already paid to employee toward goal. <br  /> Decimal(12,2)
     */
    paidTowardsGoal?: number;
    /**
     * Maximum amount of the earning on a single paycheck. <br  /> Decimal(12,2)
     */
    payPeriodMaximum?: number;
    /**
     * Minimum amount of the earning on a single paycheck. <br  /> Decimal(12,2)
     */
    payPeriodMinimum?: number;
    /**
     * Rate is used in conjunction with the hoursOrUnits field. <br  /> Decimal(12,2)
     */
    rate?: number;
    /**
     * Rate Code applies to additional pay rates entered for an employee. Must match Company setup. <br  /> Max length: 10
     */
    rateCode?: string;
    /**
     * Start date of an earning based on payroll calendar. Common formats are MM-DD-CCYY, CCYY-MM-DD.
     */
    startDate: string;
}

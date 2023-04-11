import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Non-Primary State Tax model
 */
export declare class NonPrimaryStateTax extends SpeakeasyBase {
    /**
     * State tax code.<br  /> Max length: 50
     */
    amount?: number;
    /**
     * Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)
     */
    deductionsAmount?: number;
    /**
     * Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)
     */
    dependentsAmount?: number;
    /**
     * State tax exemptions value.<br  />Decimal (12,2)
     */
    exemptions?: number;
    /**
     * State tax exemptions 2 value.<br  />Decimal (12,2)
     */
    exemptions2?: number;
    /**
     * Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50
     */
    filingStatus?: string;
    /**
     * Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean
     */
    higherRate?: boolean;
    /**
     * Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)
     */
    otherIncomeAmount?: number;
    /**
     * State Tax percentage. <br  />Decimal (12,2)
     */
    percentage?: number;
    /**
     * Non-primary state tax reciprocity code.<br  /> Max length: 50
     */
    reciprocityCode?: string;
    /**
     * Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10
     */
    specialCheckCalc?: string;
    /**
     * Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10
     */
    taxCalculationCode?: string;
    /**
     * State tax code.<br  /> Max length: 50
     */
    taxCode?: string;
    /**
     * The state W4 form year <br  />Integer
     */
    w4FormYear?: number;
}

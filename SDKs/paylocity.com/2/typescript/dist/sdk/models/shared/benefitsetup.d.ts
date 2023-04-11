import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The benefit setup model
 */
export declare class BenefitSetup extends SpeakeasyBase {
    /**
     * Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30
     */
    benefitClass?: string;
    /**
     * Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    benefitClassEffectiveDate?: string;
    /**
     * Salary used to configure benefits.<br  />Decimal(12,2)
     */
    benefitSalary?: number;
    /**
     * Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    benefitSalaryEffectiveDate?: string;
    /**
     * Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.
     */
    doNotApplyAdministrativePeriod?: boolean;
    /**
     * Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.
     */
    isMeasureAcaEligibility?: boolean;
}

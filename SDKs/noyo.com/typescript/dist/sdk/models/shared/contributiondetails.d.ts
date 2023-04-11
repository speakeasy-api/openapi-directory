import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of contribution rule
 */
export declare enum ContributionDetailsContributionRuleTypeEnum {
    FixedDollar = "fixed_dollar",
    Percent = "percent"
}
/**
 * The source of the contribution, either employee_amount or employer_amount
 */
export declare enum ContributionDetailsContributionSourceEnum {
    EmployeeAmount = "employee_amount",
    EmployerAmount = "employer_amount"
}
/**
 * Where this particular contribution rule is applied, either employee or dependents
 */
export declare enum ContributionDetailsContributionTargetEnum {
    Dependents = "dependents",
    Employee = "employee"
}
export declare class ContributionDetails extends SpeakeasyBase {
    /**
     * The contribution rule
     */
    contributionRule: string;
    /**
     * The type of contribution rule
     */
    contributionRuleType: ContributionDetailsContributionRuleTypeEnum;
    /**
     * The source of the contribution, either employee_amount or employer_amount
     */
    contributionSource: ContributionDetailsContributionSourceEnum;
    /**
     * Where this particular contribution rule is applied, either employee or dependents
     */
    contributionTarget: ContributionDetailsContributionTargetEnum;
}

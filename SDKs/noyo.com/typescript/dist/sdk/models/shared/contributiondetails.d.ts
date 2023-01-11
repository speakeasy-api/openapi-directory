import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContributionDetailsContributionRuleTypeEnum {
    FixedDollar = "fixed_dollar",
    Percent = "percent"
}
export declare enum ContributionDetailsContributionSourceEnum {
    EmployeeAmount = "employee_amount",
    EmployerAmount = "employer_amount"
}
export declare enum ContributionDetailsContributionTargetEnum {
    Dependents = "dependents",
    Employee = "employee"
}
export declare class ContributionDetails extends SpeakeasyBase {
    contributionRule: string;
    contributionRuleType: ContributionDetailsContributionRuleTypeEnum;
    contributionSource: ContributionDetailsContributionSourceEnum;
    contributionTarget: ContributionDetailsContributionTargetEnum;
}

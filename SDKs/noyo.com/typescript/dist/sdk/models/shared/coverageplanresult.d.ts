import { SpeakeasyBase } from "../../../internal/utils";
import { ContributionDetails } from "./contributiondetails";
import { CoverageDetails } from "./coveragedetails";
import { RateModel } from "./ratemodel";
/**
 * COBRA rules for the group medical plan
**/
export declare class CoveragePlanResultCobraRules extends SpeakeasyBase {
    eligible?: boolean;
}
export declare class CoveragePlanResult extends SpeakeasyBase {
    benefitDetails?: string[];
    cobraRules?: CoveragePlanResultCobraRules;
    code?: string;
    contributionDetails?: ContributionDetails[];
    coverageDetails?: CoverageDetails;
    created: number;
    existingPlan?: boolean;
    groupCoverageId: string;
    id: string;
    modified: number;
    network?: string;
    notes?: string;
    planName: string;
    planType?: string;
    productType?: string;
    rateDetails?: RateModel[];
    terminationPolicy?: string;
    version: string;
    volumeRules?: string;
    waitingPeriodRules?: string[];
}

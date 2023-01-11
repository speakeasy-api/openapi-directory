import { SpeakeasyBase } from "../../../internal/utils";
import { ContributionDetails } from "./contributiondetails";
import { CoverageDetails } from "./coveragedetails";
import { RateModel } from "./ratemodel";
/**
 * COBRA rules for the group medical plan
**/
export declare class CoveragePlanCreateRequestCobraRules extends SpeakeasyBase {
    eligible?: boolean;
}
export declare class CoveragePlanCreateRequest extends SpeakeasyBase {
    benefitDetails?: string[];
    cobraRules?: CoveragePlanCreateRequestCobraRules;
    code?: string;
    contributionDetails?: ContributionDetails[];
    coverageDetails?: CoverageDetails;
    existingPlan?: boolean;
    network?: string;
    notes?: string;
    planName: string;
    planType?: string;
    productType?: string;
    rateDetails?: RateModel[];
    terminationPolicy?: string;
    volumeRules?: string;
    waitingPeriodRules?: string[];
}

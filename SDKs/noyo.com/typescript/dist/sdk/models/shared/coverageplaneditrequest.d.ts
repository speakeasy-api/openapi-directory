import { SpeakeasyBase } from "../../../internal/utils";
import { ContributionDetails } from "./contributiondetails";
import { CoverageDetails } from "./coveragedetails";
import { RateModel } from "./ratemodel";
/**
 * The add-on benefits offered by the plan.
 */
export declare enum CoveragePlanEditRequestBenefitDetailsEnum {
    Abortion = "abortion",
    Infertility = "infertility",
    ContraceptiveOptOut = "contraceptive_opt_out",
    AddictionTreament = "addiction_treament",
    MammographyBenefit = "mammography_benefit",
    StaffModelHmo = "staff_model_hmo",
    Fsa = "fsa",
    Hsa = "hsa"
}
/**
 * COBRA rules for the group medical plan
 */
export declare class CoveragePlanEditRequestCobraRules extends SpeakeasyBase {
    /**
     * True if group plan is eligible for COBRA enrollments
     */
    eligible?: boolean;
}
export declare class CoveragePlanEditRequest extends SpeakeasyBase {
    /**
     * The add-on benefits offered by the plan.
     */
    benefitDetails?: CoveragePlanEditRequestBenefitDetailsEnum;
    /**
     * COBRA rules for the group medical plan
     */
    cobraRules?: CoveragePlanEditRequestCobraRules;
    /**
     * The code for the plan.
     */
    code?: string;
    contributionDetails?: ContributionDetails[];
    coverageDetails?: CoverageDetails;
    /**
     * True if this plan is currently active with the carrier
     */
    existingPlan?: boolean;
    /**
     * Details about the plan network
     */
    network?: string;
    /**
     * General platform notes about the coverage plan
     */
    notes?: string;
    /**
     * Display name of the plan
     */
    planName?: string;
    /**
     * Plan type for basic or voluntary plans
     */
    planType?: string;
    /**
     * Details about the product type
     */
    productType?: string;
    /**
     * Plan rate data, varying by plan line of coverage
     */
    rateDetails?: RateModel[];
    /**
     * Termination policy for the coverage plan
     */
    terminationPolicy?: string;
    /**
     * Volume rules for the group critical illness plan
     */
    volumeRules?: string;
    /**
     * The list of waiting period rules.
     */
    waitingPeriodRules?: string[];
}

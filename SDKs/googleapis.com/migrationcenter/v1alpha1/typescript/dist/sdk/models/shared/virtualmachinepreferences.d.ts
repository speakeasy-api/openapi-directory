import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnginePreferences } from "./computeenginepreferences";
import { RegionPreferences } from "./regionpreferences";
/**
 * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
 */
export declare enum VirtualMachinePreferencesCommitmentPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    CommitmentPlanNone = "COMMITMENT_PLAN_NONE",
    CommitmentPlanOneYear = "COMMITMENT_PLAN_ONE_YEAR",
    CommitmentPlanThreeYears = "COMMITMENT_PLAN_THREE_YEARS"
}
/**
 * Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.
 */
export declare enum VirtualMachinePreferencesSizingOptimizationStrategyEnum {
    SizingOptimizationStrategyUnspecified = "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED",
    SizingOptimizationStrategySameAsSource = "SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE",
    SizingOptimizationStrategyModerate = "SIZING_OPTIMIZATION_STRATEGY_MODERATE",
    SizingOptimizationStrategyAggressive = "SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE"
}
/**
 * VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
 */
export declare class VirtualMachinePreferences extends SpeakeasyBase {
    /**
     * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
     */
    commitmentPlan?: VirtualMachinePreferencesCommitmentPlanEnum;
    /**
     * The user preferences relating to Compute Engine target platform.
     */
    computeEnginePreferences?: ComputeEnginePreferences;
    /**
     * The user preferences relating to target regions.
     */
    regionPreferences?: RegionPreferences;
    /**
     * Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with.
     */
    sizingOptimizationStrategy?: VirtualMachinePreferencesSizingOptimizationStrategyEnum;
}

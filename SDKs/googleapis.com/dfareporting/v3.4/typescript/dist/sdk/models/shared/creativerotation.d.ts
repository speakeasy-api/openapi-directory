import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeAssignment } from "./creativeassignment";
/**
 * Type of creative rotation. Can be used to specify whether to use sequential or random rotation.
 */
export declare enum CreativeRotationTypeEnum {
    CreativeRotationTypeSequential = "CREATIVE_ROTATION_TYPE_SEQUENTIAL",
    CreativeRotationTypeRandom = "CREATIVE_ROTATION_TYPE_RANDOM"
}
/**
 * Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.
 */
export declare enum CreativeRotationWeightCalculationStrategyEnum {
    WeightStrategyEqual = "WEIGHT_STRATEGY_EQUAL",
    WeightStrategyCustom = "WEIGHT_STRATEGY_CUSTOM",
    WeightStrategyHighestCtr = "WEIGHT_STRATEGY_HIGHEST_CTR",
    WeightStrategyOptimized = "WEIGHT_STRATEGY_OPTIMIZED"
}
/**
 * Creative Rotation.
 */
export declare class CreativeRotation extends SpeakeasyBase {
    /**
     * Creative assignments in this creative rotation.
     */
    creativeAssignments?: CreativeAssignment[];
    /**
     * Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad.
     */
    creativeOptimizationConfigurationId?: string;
    /**
     * Type of creative rotation. Can be used to specify whether to use sequential or random rotation.
     */
    type?: CreativeRotationTypeEnum;
    /**
     * Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.
     */
    weightCalculationStrategy?: CreativeRotationWeightCalculationStrategyEnum;
}

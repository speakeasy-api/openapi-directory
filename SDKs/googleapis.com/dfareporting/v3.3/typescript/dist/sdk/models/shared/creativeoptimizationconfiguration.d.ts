import { SpeakeasyBase } from "../../../internal/utils";
import { OptimizationActivity } from "./optimizationactivity";
/**
 * Optimization model for this configuration.
 */
export declare enum CreativeOptimizationConfigurationOptimizationModelEnum {
    Click = "CLICK",
    PostClick = "POST_CLICK",
    PostImpression = "POST_IMPRESSION",
    PostClickAndImpression = "POST_CLICK_AND_IMPRESSION",
    VideoCompletion = "VIDEO_COMPLETION"
}
/**
 * Creative optimization settings.
 */
export declare class CreativeOptimizationConfiguration extends SpeakeasyBase {
    /**
     * ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns.
     */
    id?: string;
    /**
     * Name of this creative optimization config. This is a required field and must be less than 129 characters long.
     */
    name?: string;
    /**
     * List of optimization activities associated with this configuration.
     */
    optimizationActivitys?: OptimizationActivity[];
    /**
     * Optimization model for this configuration.
     */
    optimizationModel?: CreativeOptimizationConfigurationOptimizationModelEnum;
}

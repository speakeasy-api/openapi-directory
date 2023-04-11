import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of an accelator for a CDF instance.
 */
export declare enum AcceleratorAcceleratorTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED",
    Cdc = "CDC",
    Healthcare = "HEALTHCARE",
    CcaiInsights = "CCAI_INSIGHTS",
    Cloudsearch = "CLOUDSEARCH"
}
/**
 * The state of the accelerator.
 */
export declare enum AcceleratorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Unknown = "UNKNOWN"
}
/**
 * Identifies Data Fusion accelerators for an instance.
 */
export declare class Accelerator extends SpeakeasyBase {
    /**
     * The type of an accelator for a CDF instance.
     */
    acceleratorType?: AcceleratorAcceleratorTypeEnum;
    /**
     * The state of the accelerator.
     */
    state?: AcceleratorStateEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
 */
export declare enum ScalingConfigInstanceSizeEnum {
    InstanceSizeUnspecified = "INSTANCE_SIZE_UNSPECIFIED",
    ExtraSmall = "EXTRA_SMALL",
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE",
    ExtraLarge = "EXTRA_LARGE"
}
/**
 * Represents the scaling configuration of a metastore service.
 */
export declare class ScalingConfig extends SpeakeasyBase {
    /**
     * An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
     */
    instanceSize?: ScalingConfigInstanceSizeEnum;
    /**
     * Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.
     */
    scalingFactor?: number;
}

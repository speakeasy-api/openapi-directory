import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The instance size of this the instance configuration.
 */
export declare enum InstanceConfigInstanceSizeEnum {
    InstanceSizeUnspecified = "INSTANCE_SIZE_UNSPECIFIED",
    StandardSmall = "STANDARD_SMALL",
    StandardMedium = "STANDARD_MEDIUM",
    StandardLarge = "STANDARD_LARGE",
    StandardXlarge = "STANDARD_XLARGE",
    Standard2Xlarge = "STANDARD_2XLARGE",
    Standard3Xlarge = "STANDARD_3XLARGE"
}
/**
 * Message storing the instance configuration.
 */
export declare class InstanceConfig extends SpeakeasyBase {
    /**
     * The instance size of this the instance configuration.
     */
    instanceSize?: InstanceConfigInstanceSizeEnum;
}

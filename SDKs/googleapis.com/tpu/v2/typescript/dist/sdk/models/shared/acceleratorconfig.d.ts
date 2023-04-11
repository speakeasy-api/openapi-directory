import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Type of TPU.
 */
export declare enum AcceleratorConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    V2 = "V2",
    V3 = "V3",
    V4 = "V4"
}
/**
 * A TPU accelerator configuration.
 */
export declare class AcceleratorConfig extends SpeakeasyBase {
    /**
     * Required. Topology of TPU in chips.
     */
    topology?: string;
    /**
     * Required. Type of TPU.
     */
    type?: AcceleratorConfigTypeEnum;
}

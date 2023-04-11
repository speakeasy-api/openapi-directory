import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
/**
 * A accelerator type that a Node can be configured with.
 */
export declare class AcceleratorType extends SpeakeasyBase {
    /**
     * The accelerator config.
     */
    acceleratorConfigs?: AcceleratorConfig[];
    /**
     * The resource name.
     */
    name?: string;
    /**
     * the accelerator type.
     */
    type?: string;
}

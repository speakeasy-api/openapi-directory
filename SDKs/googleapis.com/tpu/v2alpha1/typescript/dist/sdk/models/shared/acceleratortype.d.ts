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
     * The accelerator type.
     */
    type?: string;
}

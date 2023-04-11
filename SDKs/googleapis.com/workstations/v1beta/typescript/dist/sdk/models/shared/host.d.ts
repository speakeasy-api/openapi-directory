import { SpeakeasyBase } from "../../../internal/utils";
import { GceInstance } from "./gceinstance";
/**
 * Runtime host for a workstation.
 */
export declare class Host extends SpeakeasyBase {
    /**
     * A runtime using a Compute Engine instance.
     */
    gceInstance?: GceInstance;
}

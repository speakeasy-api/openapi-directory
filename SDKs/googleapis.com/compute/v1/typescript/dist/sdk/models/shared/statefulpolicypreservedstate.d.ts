import { SpeakeasyBase } from "../../../internal/utils";
import { StatefulPolicyPreservedStateDiskDevice } from "./statefulpolicypreservedstatediskdevice";
/**
 * Configuration of preserved resources.
 */
export declare class StatefulPolicyPreservedState extends SpeakeasyBase {
    /**
     * Disks created on the instances that will be preserved on instance delete, update, etc. This map is keyed with the device names of the disks.
     */
    disks?: Record<string, StatefulPolicyPreservedStateDiskDevice>;
}

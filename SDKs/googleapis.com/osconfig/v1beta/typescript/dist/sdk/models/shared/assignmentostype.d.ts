import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the criteria for selecting VM Instances by OS type.
 */
export declare class AssignmentOsType extends SpeakeasyBase {
    /**
     * Targets VM instances with OS Inventory enabled and having the following OS architecture.
     */
    osArchitecture?: string;
    /**
     * Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
     */
    osShortName?: string;
    /**
     * Targets VM instances with OS Inventory enabled and having the following following OS version.
     */
    osVersion?: string;
}

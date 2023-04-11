import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Filtering criteria to select VMs based on OS details.
 */
export declare class OSPolicyOSFilter extends SpeakeasyBase {
    /**
     * This should match OS short name emitted by the OS inventory agent. An empty value matches any OS.
     */
    osShortName?: string;
    /**
     * This value should match the version emitted by the OS inventory agent. Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*`
     */
    osVersion?: string;
}

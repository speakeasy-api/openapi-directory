import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VM inventory details.
 */
export declare class OSPolicyAssignmentInstanceFilterInventory extends SpeakeasyBase {
    /**
     * Required. The OS short name
     */
    osShortName?: string;
    /**
     * The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions.
     */
    osVersion?: string;
}

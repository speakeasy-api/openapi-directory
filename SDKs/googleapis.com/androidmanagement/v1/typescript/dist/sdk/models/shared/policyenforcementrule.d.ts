import { SpeakeasyBase } from "../../../internal/utils";
import { BlockAction } from "./blockaction";
import { WipeAction } from "./wipeaction";
/**
 * A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.
 */
export declare class PolicyEnforcementRule extends SpeakeasyBase {
    /**
     * An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
     */
    blockAction?: BlockAction;
    /**
     * The top-level policy to enforce. For example, applications or passwordPolicies.
     */
    settingName?: string;
    /**
     * An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.
     */
    wipeAction?: WipeAction;
}

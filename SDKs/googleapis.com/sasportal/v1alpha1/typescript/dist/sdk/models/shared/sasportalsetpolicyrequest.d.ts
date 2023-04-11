import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalPolicy } from "./sasportalpolicy";
/**
 * Request message for `SetPolicy` method.
 */
export declare class SasPortalSetPolicyRequest extends SpeakeasyBase {
    /**
     * Optional. Set the field as `true` to disable the onboarding notification.
     */
    disableNotification?: boolean;
    /**
     * Defines an access control policy to the resources.
     */
    policy?: SasPortalPolicy;
    /**
     * Required. The resource for which the policy is being specified. This policy replaces any existing policy.
     */
    resource?: string;
}

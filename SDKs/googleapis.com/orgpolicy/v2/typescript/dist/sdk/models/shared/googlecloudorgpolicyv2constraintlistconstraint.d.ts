import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy.
 */
export declare class GoogleCloudOrgpolicyV2ConstraintListConstraint extends SpeakeasyBase {
    /**
     * Indicates whether values grouped into categories can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"in:Python"` would match any value in the 'Python' group.
     */
    supportsIn?: boolean;
    /**
     * Indicates whether subtrees of the Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder.
     */
    supportsUnder?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
 */
export declare class ListConstraint extends SpeakeasyBase {
    /**
     * Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Constraint`.
     */
    suggestedValue?: string;
    /**
     * Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder.
     */
    supportsUnder?: boolean;
}

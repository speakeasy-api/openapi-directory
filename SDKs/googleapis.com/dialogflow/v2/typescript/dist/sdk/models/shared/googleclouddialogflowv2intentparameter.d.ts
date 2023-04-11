import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents intent parameters.
 */
export declare class GoogleCloudDialogflowV2IntentParameter extends SpeakeasyBase {
    /**
     * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
     */
    entityTypeDisplayName?: string;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean;
    /**
     * The unique identifier of this parameter.
     */
    name?: string;
    /**
     * Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
     */
    prompts?: string[];
    /**
     * Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`.
     */
    value?: string;
}

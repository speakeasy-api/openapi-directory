import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior, GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput } from "./googleclouddialogflowcxv3beta1formparameterfillbehavior";
/**
 * Represents a form parameter.
 */
export declare class GoogleCloudDialogflowCxV3beta1FormParameter extends SpeakeasyBase {
    /**
     * The default value of an optional parameter. If the parameter is required, the default value will be ignored.
     */
    defaultValue?: any;
    /**
     * Required. The human-readable name of the parameter, unique within the form.
     */
    displayName?: string;
    /**
     * Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
     */
    entityType?: string;
    /**
     * Configuration for how the filling of a parameter should be handled.
     */
    fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
    /**
     * Indicates whether the parameter represents a list of values.
     */
    isList?: boolean;
    /**
     * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
     */
    redact?: boolean;
    /**
     * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
     */
    required?: boolean;
}
/**
 * Represents a form parameter.
 */
export declare class GoogleCloudDialogflowCxV3beta1FormParameterInput extends SpeakeasyBase {
    /**
     * The default value of an optional parameter. If the parameter is required, the default value will be ignored.
     */
    defaultValue?: any;
    /**
     * Required. The human-readable name of the parameter, unique within the form.
     */
    displayName?: string;
    /**
     * Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
     */
    entityType?: string;
    /**
     * Configuration for how the filling of a parameter should be handled.
     */
    fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput;
    /**
     * Indicates whether the parameter represents a list of values.
     */
    isList?: boolean;
    /**
     * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
     */
    redact?: boolean;
    /**
     * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
     */
    required?: boolean;
}

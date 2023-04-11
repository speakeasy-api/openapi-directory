import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an intent parameter.
 */
export declare class GoogleCloudDialogflowCxV3IntentParameter extends SpeakeasyBase {
    /**
     * Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
     */
    entityType?: string;
    /**
     * Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
     */
    id?: string;
    /**
     * Indicates whether the parameter represents a list of values.
     */
    isList?: boolean;
    /**
     * Indicates whether the parameter content should be redacted in log. If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
     */
    redact?: boolean;
}

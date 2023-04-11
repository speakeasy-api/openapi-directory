import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterMetadata } from "./parametermetadata";
/**
 * Metadata describing a template.
 */
export declare class TemplateMetadata extends SpeakeasyBase {
    /**
     * Optional. A description of the template.
     */
    description?: string;
    /**
     * Required. The name of the template.
     */
    name?: string;
    /**
     * The parameters for the template.
     */
    parameters?: ParameterMetadata[];
}

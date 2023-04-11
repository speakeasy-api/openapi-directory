import { SpeakeasyBase } from "../../../internal/utils";
export declare class TemplatePropertyParameters extends SpeakeasyBase {
    /**
     * The parameters are an array. The first value being {{1}} in the template.
     */
    default?: string;
}
export declare class TemplateProperty extends SpeakeasyBase {
    /**
     * The name of the template.
     */
    name?: string;
    parameters?: TemplatePropertyParameters[];
}

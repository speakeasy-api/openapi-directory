import { SpeakeasyBase } from "../../../internal/utils";
export declare class TemplatePropertyParameters extends SpeakeasyBase {
    default?: string;
}
export declare class TemplateProperty extends SpeakeasyBase {
    name?: string;
    parameters?: TemplatePropertyParameters[];
}

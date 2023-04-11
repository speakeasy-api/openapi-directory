import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFile } from "./importfile";
/**
 * Which interpreter (python or jinja) should be used during expansion.
 */
export declare enum TemplateContentsInterpreterEnum {
    UnknownInterpreter = "UNKNOWN_INTERPRETER",
    Python = "PYTHON",
    Jinja = "JINJA"
}
/**
 * Files that make up the template contents of a template type.
 */
export declare class TemplateContents extends SpeakeasyBase {
    /**
     * Import files referenced by the main template.
     */
    imports?: ImportFile[];
    /**
     * Which interpreter (python or jinja) should be used during expansion.
     */
    interpreter?: TemplateContentsInterpreterEnum;
    /**
     * The filename of the mainTemplate
     */
    mainTemplate?: string;
    /**
     * The contents of the template schema.
     */
    schema?: string;
    /**
     * The contents of the main template file.
     */
    template?: string;
}

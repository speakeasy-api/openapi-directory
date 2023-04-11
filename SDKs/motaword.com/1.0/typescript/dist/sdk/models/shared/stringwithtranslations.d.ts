import { SpeakeasyBase } from "../../../internal/utils";
import { StringTranslation } from "./stringtranslation";
export declare class StringWithTranslations extends SpeakeasyBase {
    /**
     * source string content
     */
    content?: string;
    fileId?: number;
    id?: string;
    translations?: Record<string, StringTranslation>;
}

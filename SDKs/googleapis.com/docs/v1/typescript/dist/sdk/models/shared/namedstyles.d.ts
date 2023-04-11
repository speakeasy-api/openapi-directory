import { SpeakeasyBase } from "../../../internal/utils";
import { NamedStyle } from "./namedstyle";
/**
 * The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
 */
export declare class NamedStyles extends SpeakeasyBase {
    /**
     * The named styles. There's an entry for each of the possible named style types.
     */
    styles?: NamedStyle[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { ParagraphStyle } from "./paragraphstyle";
/**
 * A TextElement kind that represents the beginning of a new paragraph.
 */
export declare class ParagraphMarker extends SpeakeasyBase {
    /**
     * Describes the bullet of a paragraph.
     */
    bullet?: Bullet;
    /**
     * Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.
     */
    style?: ParagraphStyle;
}

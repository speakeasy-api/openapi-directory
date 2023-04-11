import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement, StructuralElementInput } from "./structuralelement";
/**
 * A document footnote.
 */
export declare class Footnote extends SpeakeasyBase {
    /**
     * The contents of the footnote. The indexes for a footnote's content begin at zero.
     */
    content?: StructuralElement[];
    /**
     * The ID of the footnote.
     */
    footnoteId?: string;
}
/**
 * A document footnote.
 */
export declare class FootnoteInput extends SpeakeasyBase {
    /**
     * The contents of the footnote. The indexes for a footnote's content begin at zero.
     */
    content?: StructuralElementInput[];
    /**
     * The ID of the footnote.
     */
    footnoteId?: string;
}

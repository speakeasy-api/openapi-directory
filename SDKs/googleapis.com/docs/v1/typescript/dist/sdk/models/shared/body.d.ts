import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement, StructuralElementInput } from "./structuralelement";
/**
 * The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
 */
export declare class Body extends SpeakeasyBase {
    /**
     * The contents of the body. The indexes for the body's content begin at zero.
     */
    content?: StructuralElement[];
}
/**
 * The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
 */
export declare class BodyInput extends SpeakeasyBase {
    /**
     * The contents of the body. The indexes for the body's content begin at zero.
     */
    content?: StructuralElementInput[];
}

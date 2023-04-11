import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement, StructuralElementInput } from "./structuralelement";
/**
 * A document header.
 */
export declare class Header extends SpeakeasyBase {
    /**
     * The contents of the header. The indexes for a header's content begin at zero.
     */
    content?: StructuralElement[];
    /**
     * The ID of the header.
     */
    headerId?: string;
}
/**
 * A document header.
 */
export declare class HeaderInput extends SpeakeasyBase {
    /**
     * The contents of the header. The indexes for a header's content begin at zero.
     */
    content?: StructuralElementInput[];
    /**
     * The ID of the header.
     */
    headerId?: string;
}

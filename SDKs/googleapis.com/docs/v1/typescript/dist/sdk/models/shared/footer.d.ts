import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement, StructuralElementInput } from "./structuralelement";
/**
 * A document footer.
 */
export declare class Footer extends SpeakeasyBase {
    /**
     * The contents of the footer. The indexes for a footer's content begin at zero.
     */
    content?: StructuralElement[];
    /**
     * The ID of the footer.
     */
    footerId?: string;
}
/**
 * A document footer.
 */
export declare class FooterInput extends SpeakeasyBase {
    /**
     * The contents of the footer. The indexes for a footer's content begin at zero.
     */
    content?: StructuralElementInput[];
    /**
     * The ID of the footer.
     */
    footerId?: string;
}

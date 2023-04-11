import { SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";
/**
 * The fill of the line.
 */
export declare class LineFill extends SpeakeasyBase {
    /**
     * A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
     */
    solidFill?: SolidFill;
}

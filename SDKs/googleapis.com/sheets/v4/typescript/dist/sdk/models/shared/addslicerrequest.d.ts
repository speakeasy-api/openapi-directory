import { SpeakeasyBase } from "../../../internal/utils";
import { Slicer } from "./slicer";
/**
 * Adds a slicer to a sheet in the spreadsheet.
 */
export declare class AddSlicerRequest extends SpeakeasyBase {
    /**
     * A slicer in a sheet.
     */
    slicer?: Slicer;
}

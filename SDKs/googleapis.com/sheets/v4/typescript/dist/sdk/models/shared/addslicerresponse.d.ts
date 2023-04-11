import { SpeakeasyBase } from "../../../internal/utils";
import { Slicer } from "./slicer";
/**
 * The result of adding a slicer to a spreadsheet.
 */
export declare class AddSlicerResponse extends SpeakeasyBase {
    /**
     * A slicer in a sheet.
     */
    slicer?: Slicer;
}

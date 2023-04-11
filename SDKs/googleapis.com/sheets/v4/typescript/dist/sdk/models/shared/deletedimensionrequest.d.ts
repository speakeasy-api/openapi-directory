import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";
/**
 * Deletes the dimensions from the sheet.
 */
export declare class DeleteDimensionRequest extends SpeakeasyBase {
    /**
     * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
     */
    range?: DimensionRange;
}

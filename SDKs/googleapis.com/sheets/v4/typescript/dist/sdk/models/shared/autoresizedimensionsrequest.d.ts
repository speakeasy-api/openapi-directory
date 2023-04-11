import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSheetDimensionRange } from "./datasourcesheetdimensionrange";
import { DimensionRange } from "./dimensionrange";
/**
 * Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
 */
export declare class AutoResizeDimensionsRequest extends SpeakeasyBase {
    /**
     * A range along a single dimension on a DATA_SOURCE sheet.
     */
    dataSourceSheetDimensions?: DataSourceSheetDimensionRange;
    /**
     * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
     */
    dimensions?: DimensionRange;
}

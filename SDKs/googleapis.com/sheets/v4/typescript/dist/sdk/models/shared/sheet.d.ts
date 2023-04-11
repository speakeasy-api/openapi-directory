import { SpeakeasyBase } from "../../../internal/utils";
import { BandedRange } from "./bandedrange";
import { BasicFilter } from "./basicfilter";
import { ConditionalFormatRule } from "./conditionalformatrule";
import { DeveloperMetadata } from "./developermetadata";
import { DimensionGroup } from "./dimensiongroup";
import { EmbeddedChart } from "./embeddedchart";
import { FilterView } from "./filterview";
import { GridData } from "./griddata";
import { GridRange } from "./gridrange";
import { ProtectedRange } from "./protectedrange";
import { SheetProperties } from "./sheetproperties";
import { Slicer } from "./slicer";
/**
 * A sheet in a spreadsheet.
 */
export declare class Sheet extends SpeakeasyBase {
    /**
     * The banded (alternating colors) ranges on this sheet.
     */
    bandedRanges?: BandedRange[];
    /**
     * The default filter associated with a sheet.
     */
    basicFilter?: BasicFilter;
    /**
     * The specifications of every chart on this sheet.
     */
    charts?: EmbeddedChart[];
    /**
     * All column groups on this sheet, ordered by increasing range start index, then by group depth.
     */
    columnGroups?: DimensionGroup[];
    /**
     * The conditional format rules in this sheet.
     */
    conditionalFormats?: ConditionalFormatRule[];
    /**
     * Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a startRow/startColumn of `0`, while the second one will have `startRow 14` (zero-based row 15), and `startColumn 3` (zero-based column D). For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values.
     */
    data?: GridData[];
    /**
     * The developer metadata associated with a sheet.
     */
    developerMetadata?: DeveloperMetadata[];
    /**
     * The filter views in this sheet.
     */
    filterViews?: FilterView[];
    /**
     * The ranges that are merged together.
     */
    merges?: GridRange[];
    /**
     * Properties of a sheet.
     */
    properties?: SheetProperties;
    /**
     * The protected ranges in this sheet.
     */
    protectedRanges?: ProtectedRange[];
    /**
     * All row groups on this sheet, ordered by increasing range start index, then by group depth.
     */
    rowGroups?: DimensionGroup[];
    /**
     * The slicers on this sheet.
     */
    slicers?: Slicer[];
}

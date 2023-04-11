import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";
/**
 * The type of location this object represents. This field is read-only.
 */
export declare enum DeveloperMetadataLocationLocationTypeEnum {
    DeveloperMetadataLocationTypeUnspecified = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED",
    Row = "ROW",
    Column = "COLUMN",
    Sheet = "SHEET",
    Spreadsheet = "SPREADSHEET"
}
/**
 * A location where metadata may be associated in a spreadsheet.
 */
export declare class DeveloperMetadataLocation extends SpeakeasyBase {
    /**
     * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
     */
    dimensionRange?: DimensionRange;
    /**
     * The type of location this object represents. This field is read-only.
     */
    locationType?: DeveloperMetadataLocationLocationTypeEnum;
    /**
     * The ID of the sheet when metadata is associated with an entire sheet.
     */
    sheetId?: number;
    /**
     * True when metadata is associated with an entire spreadsheet.
     */
    spreadsheet?: boolean;
}

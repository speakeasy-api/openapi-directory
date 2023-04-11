import { SpeakeasyBase } from "../../../internal/utils";
import { Editors } from "./editors";
import { GridRange } from "./gridrange";
/**
 * A protected range.
 */
export declare class ProtectedRange extends SpeakeasyBase {
    /**
     * The description of this protected range.
     */
    description?: string;
    /**
     * The editors of a protected range.
     */
    editors?: Editors;
    /**
     * The named range this protected range is backed by, if any. When writing, only one of range or named_range_id may be set.
     */
    namedRangeId?: string;
    /**
     * The ID of the protected range. This field is read-only.
     */
    protectedRangeId?: number;
    /**
     * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
     */
    range?: GridRange;
    /**
     * True if the user who requested this protected range can edit the protected area. This field is read-only.
     */
    requestingUserCanEdit?: boolean;
    /**
     * The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets.
     */
    unprotectedRanges?: GridRange[];
    /**
     * True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors is ignored. Additionally, if this field is changed from true to false and the `editors` field is not set (nor included in the field mask), then the editors will be set to all the editors in the document.
     */
    warningOnly?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
/**
 * Optional. Column key to use for values in the row. Defaults to user entered name.
 */
export declare enum UpdateRowRequestViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
/**
 * Request message for TablesService.UpdateRow.
 */
export declare class UpdateRowRequest extends SpeakeasyBase {
    /**
     * A single row in a table.
     */
    row?: Row;
    /**
     * The list of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: UpdateRowRequestViewEnum;
}

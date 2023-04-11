import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
/**
 * Optional. Column key to use for values in the row. Defaults to user entered name.
 */
export declare enum CreateRowRequestViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
/**
 * Request message for TablesService.CreateRow.
 */
export declare class CreateRowRequest extends SpeakeasyBase {
    /**
     * Required. The parent table where this row will be created. Format: tables/{table}
     */
    parent?: string;
    /**
     * A single row in a table.
     */
    row?: Row;
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: CreateRowRequestViewEnum;
}

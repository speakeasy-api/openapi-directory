import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope.
 */
export declare class UpdateDataSourceRequest extends SpeakeasyBase {
    /**
     * Information about an external data source in the spreadsheet.
     */
    dataSource?: DataSource;
    /**
     * The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
}

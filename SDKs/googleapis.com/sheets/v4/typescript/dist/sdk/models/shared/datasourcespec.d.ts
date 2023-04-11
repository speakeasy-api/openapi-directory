import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDataSourceSpec } from "./bigquerydatasourcespec";
import { DataSourceParameter } from "./datasourceparameter";
/**
 * This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
 */
export declare class DataSourceSpec extends SpeakeasyBase {
    /**
     * The specification of a BigQuery data source that's connected to a sheet.
     */
    bigQuery?: BigQueryDataSourceSpec;
    /**
     * The parameters of the data source, used when querying the data source.
     */
    parameters?: DataSourceParameter[];
}

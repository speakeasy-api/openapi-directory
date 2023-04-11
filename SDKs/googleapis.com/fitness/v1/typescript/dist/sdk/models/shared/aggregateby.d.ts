import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specification of which data to aggregate.
 */
export declare class AggregateBy extends SpeakeasyBase {
    /**
     * A data source ID to aggregate. Only data from the specified data source ID will be included in the aggregation. If specified, this data source must exist; the OAuth scopes in the supplied credentials must grant read access to this data type. The dataset in the response will have the same data source ID. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both.
     */
    dataSourceId?: string;
    /**
     * The data type to aggregate. All data sources providing this data type will contribute data to the aggregation. The response will contain a single dataset for this data type name. The dataset will have a data source ID of derived::com.google.android.gms:aggregated. If the user has no data for this data type, an empty data set will be returned. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both.
     */
    dataTypeName?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to enroll a set of data sources so they are visible in the BigQuery UI's `Transfer` tab.
 */
export declare class EnrollDataSourcesRequest extends SpeakeasyBase {
    /**
     * Data sources that are enrolled. It is required to provide at least one data source id.
     */
    dataSourceIds?: string[];
}

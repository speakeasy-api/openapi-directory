import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Successful response
 */
export declare class ListDataSourcesResponse extends SpeakeasyBase {
    /**
     * A previously created data source.
     */
    dataSource?: DataSource[];
}

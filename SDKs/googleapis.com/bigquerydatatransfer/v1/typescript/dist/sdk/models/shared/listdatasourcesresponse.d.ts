import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Returns list of supported data sources and their metadata.
 */
export declare class ListDataSourcesResponse extends SpeakeasyBase {
    /**
     * List of supported data sources and their transfer settings.
     */
    dataSources?: DataSource[];
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string;
}

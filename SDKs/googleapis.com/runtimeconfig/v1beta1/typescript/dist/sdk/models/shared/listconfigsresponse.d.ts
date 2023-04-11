import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeConfig } from "./runtimeconfig";
/**
 * `ListConfigs()` returns the following response. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.
 */
export declare class ListConfigsResponse extends SpeakeasyBase {
    /**
     * A list of the configurations in the project. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.
     */
    configs?: RuntimeConfig[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results is larger than `pageSize`, use the `nextPageToken` as a value for the query parameter `pageToken` in the next list request. Subsequent list requests will have their own `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
}

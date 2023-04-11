import { SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";
/**
 * Response for the `ListVariables()` method.
 */
export declare class ListVariablesResponse extends SpeakeasyBase {
    /**
     * This token allows you to get the next page of results for list requests. If the number of results is larger than `pageSize`, use the `nextPageToken` as a value for the query parameter `pageToken` in the next list request. Subsequent list requests will have their own `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
    /**
     * A list of variables and their values. The order of returned variable objects is arbitrary.
     */
    variables?: Variable[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedInstance } from "./managedinstance";
/**
 * Successful response
 */
export declare class InstanceGroupManagersListManagedInstancesResponse extends SpeakeasyBase {
    /**
     * [Output Only] The list of instances in the managed instance group.
     */
    managedInstances?: ManagedInstance[];
    /**
     * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
     */
    nextPageToken?: string;
}

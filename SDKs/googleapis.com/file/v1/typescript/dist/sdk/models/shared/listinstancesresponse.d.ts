import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * ListInstancesResponse is the result of ListInstancesRequest.
 */
export declare class ListInstancesResponse extends SpeakeasyBase {
    /**
     * A list of instances in the project for the specified location. If the `{location}` value in the request is "-", the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the "unreachable" field will be populated with a list of unreachable locations.
     */
    instances?: Instance[];
    /**
     * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}

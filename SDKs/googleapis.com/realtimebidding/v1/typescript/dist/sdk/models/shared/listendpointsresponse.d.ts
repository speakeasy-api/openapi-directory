import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * A response containing bidder endpoints.
 */
export declare class ListEndpointsResponse extends SpeakeasyBase {
    /**
     * List of bidder endpoints.
     */
    endpoints?: Endpoint[];
    /**
     * A token which can be passed to a subsequent call to the `ListEndpoints` method to retrieve the next page of results in ListEndpointsRequest.pageToken.
     */
    nextPageToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Successful response
 */
export declare class ListAvailableLocationsResponse extends SpeakeasyBase {
    /**
     * One page of results from a call to `ListAvailableLocations`.
     */
    locations?: Location[];
    /**
     * If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results and all available locations have been listed. This token can be used in a subsequent call to `ListAvailableLocations` to find more locations. Page tokens are short-lived and should not be persisted.
     */
    nextPageToken?: string;
}

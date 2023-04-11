import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response message for the list instance request.
 */
export declare class ListInstancesResponse extends SpeakeasyBase {
    /**
     * Represents a list of Data Fusion instances.
     */
    instances?: Instance[];
    /**
     * Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}

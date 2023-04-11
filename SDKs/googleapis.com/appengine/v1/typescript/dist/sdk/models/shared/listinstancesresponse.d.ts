import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response message for Instances.ListInstances.
 */
export declare class ListInstancesResponse extends SpeakeasyBase {
    /**
     * The instances belonging to the requested version.
     */
    instances?: Instance[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}

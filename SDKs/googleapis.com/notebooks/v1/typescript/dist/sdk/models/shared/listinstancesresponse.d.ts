import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response for listing notebook instances.
 */
export declare class ListInstancesResponse extends SpeakeasyBase {
    /**
     * A list of returned instances.
     */
    instances?: Instance[];
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached. For example, `['us-west1-a', 'us-central1-b']`. A ListInstancesResponse will only contain either instances or unreachables,
     */
    unreachable?: string[];
}

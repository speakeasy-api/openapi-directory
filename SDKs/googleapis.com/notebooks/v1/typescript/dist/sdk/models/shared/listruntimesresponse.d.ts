import { SpeakeasyBase } from "../../../internal/utils";
import { Runtime } from "./runtime";
/**
 * Response for listing Managed Notebook Runtimes.
 */
export declare class ListRuntimesResponse extends SpeakeasyBase {
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string;
    /**
     * A list of returned Runtimes.
     */
    runtimes?: Runtime[];
    /**
     * Locations that could not be reached. For example, `['us-west1', 'us-central1']`. A ListRuntimesResponse will only contain either runtimes or unreachables,
     */
    unreachable?: string[];
}

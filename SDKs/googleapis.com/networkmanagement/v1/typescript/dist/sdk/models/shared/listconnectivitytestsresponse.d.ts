import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectivityTest } from "./connectivitytest";
/**
 * Response for the `ListConnectivityTests` method.
 */
export declare class ListConnectivityTestsResponse extends SpeakeasyBase {
    /**
     * Page token to fetch the next set of Connectivity Tests.
     */
    nextPageToken?: string;
    /**
     * List of Connectivity Tests.
     */
    resources?: ConnectivityTest[];
    /**
     * Locations that could not be reached (when querying all locations with `-`).
     */
    unreachable?: string[];
}

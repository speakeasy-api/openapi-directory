import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
/**
 * Response message containing the list of networks.
 */
export declare class ListNetworksResponse extends SpeakeasyBase {
    /**
     * The list of networks.
     */
    networks?: Network[];
    /**
     * A token identifying a page of results from the server.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}

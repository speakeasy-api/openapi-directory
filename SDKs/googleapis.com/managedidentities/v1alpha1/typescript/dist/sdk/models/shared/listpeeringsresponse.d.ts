import { SpeakeasyBase } from "../../../internal/utils";
import { Peering } from "./peering";
/**
 * ListPeeringsResponse is the response message for ListPeerings method.
 */
export declare class ListPeeringsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of Managed Identities Service Peerings in the project.
     */
    peerings?: Peering[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}

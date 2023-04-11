import { SpeakeasyBase } from "../../../internal/utils";
import { Spoke } from "./spoke";
/**
 * The response for HubService.ListSpokes.
 */
export declare class ListSpokesResponse extends SpeakeasyBase {
    /**
     * The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result.
     */
    nextPageToken?: string;
    /**
     * Spokes to be returned.
     */
    spokes?: Spoke[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}

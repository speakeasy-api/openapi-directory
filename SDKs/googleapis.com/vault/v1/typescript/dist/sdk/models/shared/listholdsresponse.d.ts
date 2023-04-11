import { SpeakeasyBase } from "../../../internal/utils";
import { Hold } from "./hold";
/**
 * The holds for a matter.
 */
export declare class ListHoldsResponse extends SpeakeasyBase {
    /**
     * The list of holds.
     */
    holds?: Hold[];
    /**
     * Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list.
     */
    nextPageToken?: string;
}

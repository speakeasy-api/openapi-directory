import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
/**
 * Successful response
 */
export declare class ListDestinationsResponse extends SpeakeasyBase {
    /**
     * All Destinations linked to a GTM Container.
     */
    destination?: Destination[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}

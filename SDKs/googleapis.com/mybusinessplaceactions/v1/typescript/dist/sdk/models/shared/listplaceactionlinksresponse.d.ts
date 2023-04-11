import { SpeakeasyBase } from "../../../internal/utils";
import { PlaceActionLink } from "./placeactionlink";
/**
 * Response message for PlaceActions.ListPlaceActionLinks.
 */
export declare class ListPlaceActionLinksResponse extends SpeakeasyBase {
    /**
     * If there are more place action links than the requested page size, then this field is populated with a token to fetch the next page of results.
     */
    nextPageToken?: string;
    /**
     * The returned list of place action links.
     */
    placeActionLinks?: PlaceActionLink[];
}

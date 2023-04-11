import { SpeakeasyBase } from "../../../internal/utils";
import { HotelView } from "./hotelview";
/**
 * Response message for HotelViewService.ListHotelViews.
 */
export declare class ListHotelViewsResponse extends SpeakeasyBase {
    /**
     * The list of rows that match the query.
     */
    hotelViews?: HotelView[];
    /**
     * Pagination token used to retrieve the next page of results.
     */
    nextPageToken?: string;
}

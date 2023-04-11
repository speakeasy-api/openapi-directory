import { SpeakeasyBase } from "../../../internal/utils";
import { MediaItem } from "./mediaitem";
/**
 * Response message for Media.ListMediaItems.
 */
export declare class ListMediaItemsResponse extends SpeakeasyBase {
    /**
     * The returned list of media items.
     */
    mediaItems?: MediaItem[];
    /**
     * If there are more media items than the requested page size, then this field is populated with a token to fetch the next page of media items on a subsequent call to ListMediaItems.
     */
    nextPageToken?: string;
    /**
     * The total number of media items for this location, irrespective of pagination.
     */
    totalMediaItemCount?: number;
}

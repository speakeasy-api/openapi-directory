import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
/**
 * Information about a new playlist item.
 */
export declare class ActivityContentDetailsPlaylistItem extends SpeakeasyBase {
    /**
     * The value that YouTube uses to uniquely identify the playlist.
     */
    playlistId?: string;
    /**
     * ID of the item within the playlist.
     */
    playlistItemId?: string;
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    resourceId?: ResourceId;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of this playlist item.
 *
 * @remarks
 * If a playlist is **episode_list**, then an item could be either **episode** or **custom_audio**.
 * If it's **podcast_list**, then an item can only be **podcast**.
 *
 */
export declare enum PlaylistItemTypeEnum {
    Episode = "episode",
    CustomAudio = "custom_audio",
    Podcast = "podcast"
}
/**
 * An item in a playlist
 */
export declare class PlaylistItem extends SpeakeasyBase {
    /**
     * Timestamp (in milliseconds) when this item is added.
     */
    addedAtMs?: number;
    data?: any;
    /**
     * Playlist item id.
     */
    id?: number;
    /**
     * Notes for this item.
     */
    notes?: string;
    /**
     * The type of this playlist item.
     *
     * @remarks
     * If a playlist is **episode_list**, then an item could be either **episode** or **custom_audio**.
     * If it's **podcast_list**, then an item can only be **podcast**.
     *
     */
    type?: PlaylistItemTypeEnum;
}

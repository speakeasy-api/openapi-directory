import { SpeakeasyBase } from "../../../internal/utils";
/**
 * YouTube video item.
 */
export declare class YouTubeVideo extends SpeakeasyBase {
    /**
     * URL that can be used to view the YouTube video. Read-only.
     */
    alternateLink?: string;
    /**
     * YouTube API resource ID.
     */
    id?: string;
    /**
     * URL of a thumbnail image of the YouTube video. Read-only.
     */
    thumbnailUrl?: string;
    /**
     * Title of the YouTube video. Read-only.
     */
    title?: string;
}

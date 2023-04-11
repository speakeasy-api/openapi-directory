import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic details about a video category, such as its localized title.
 */
export declare class VideoCategorySnippet extends SpeakeasyBase {
    assignable?: boolean;
    /**
     * The YouTube channel that created the video category.
     */
    channelId?: string;
    /**
     * The video category's title.
     */
    title?: string;
}

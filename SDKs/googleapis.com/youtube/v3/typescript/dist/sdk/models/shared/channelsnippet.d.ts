import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelLocalization } from "./channellocalization";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic details about a channel, including title, description and thumbnails.
 */
export declare class ChannelSnippet extends SpeakeasyBase {
    /**
     * The country of the channel.
     */
    country?: string;
    /**
     * The custom url of the channel.
     */
    customUrl?: string;
    /**
     * The language of the channel's default title and description.
     */
    defaultLanguage?: string;
    /**
     * The description of the channel.
     */
    description?: string;
    /**
     * Channel localization setting
     */
    localized?: ChannelLocalization;
    /**
     * The date and time that the channel was created.
     */
    publishedAt?: Date;
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The channel's title.
     */
    title?: string;
}

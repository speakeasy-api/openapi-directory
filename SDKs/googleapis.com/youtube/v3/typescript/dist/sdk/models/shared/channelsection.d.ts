import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSectionContentDetails } from "./channelsectioncontentdetails";
import { ChannelSectionLocalization } from "./channelsectionlocalization";
import { ChannelSectionSnippet } from "./channelsectionsnippet";
import { ChannelSectionTargeting } from "./channelsectiontargeting";
/**
 * Successful response
 */
export declare class ChannelSection extends SpeakeasyBase {
    /**
     * Details about a channelsection, including playlists and channels.
     */
    contentDetails?: ChannelSectionContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the channel section.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".
     */
    kind?: string;
    /**
     * Localizations for different languages
     */
    localizations?: Record<string, ChannelSectionLocalization>;
    /**
     * Basic details about a channel section, including title, style and position.
     */
    snippet?: ChannelSectionSnippet;
    /**
     * ChannelSection targeting setting.
     */
    targeting?: ChannelSectionTargeting;
}

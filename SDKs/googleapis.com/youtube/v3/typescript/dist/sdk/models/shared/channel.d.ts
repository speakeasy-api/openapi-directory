import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelAuditDetails } from "./channelauditdetails";
import { ChannelBrandingSettings } from "./channelbrandingsettings";
import { ChannelContentDetails } from "./channelcontentdetails";
import { ChannelContentOwnerDetails } from "./channelcontentownerdetails";
import { ChannelConversionPings } from "./channelconversionpings";
import { ChannelLocalization } from "./channellocalization";
import { ChannelSnippet } from "./channelsnippet";
import { ChannelStatistics } from "./channelstatistics";
import { ChannelStatus } from "./channelstatus";
import { ChannelTopicDetails } from "./channeltopicdetails";
/**
 * A *channel* resource contains information about a YouTube channel.
 */
export declare class Channel extends SpeakeasyBase {
    /**
     * The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
     */
    auditDetails?: ChannelAuditDetails;
    /**
     * Branding properties of a YouTube channel.
     */
    brandingSettings?: ChannelBrandingSettings;
    /**
     * Details about the content of a channel.
     */
    contentDetails?: ChannelContentDetails;
    /**
     * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
     */
    contentOwnerDetails?: ChannelContentOwnerDetails;
    /**
     * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
     */
    conversionPings?: ChannelConversionPings;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the channel.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channel".
     */
    kind?: string;
    /**
     * Localizations for different languages
     */
    localizations?: Record<string, ChannelLocalization>;
    /**
     * Basic details about a channel, including title, description and thumbnails.
     */
    snippet?: ChannelSnippet;
    /**
     * Statistics about a channel: number of subscribers, number of videos in the channel, etc.
     */
    statistics?: ChannelStatistics;
    /**
     * JSON template for the status part of a channel.
     */
    status?: ChannelStatus;
    /**
     * Freebase topic information related to the channel.
     */
    topicDetails?: ChannelTopicDetails;
}

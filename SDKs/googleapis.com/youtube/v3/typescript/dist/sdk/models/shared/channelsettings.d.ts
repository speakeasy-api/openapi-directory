import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Branding properties for the channel view.
 */
export declare class ChannelSettings extends SpeakeasyBase {
    /**
     * The country of the channel.
     */
    country?: string;
    defaultLanguage?: string;
    /**
     * Which content tab users should see when viewing the channel.
     */
    defaultTab?: string;
    /**
     * Specifies the channel description.
     */
    description?: string;
    /**
     * Title for the featured channels tab.
     */
    featuredChannelsTitle?: string;
    /**
     * The list of featured channels.
     */
    featuredChannelsUrls?: string[];
    /**
     * Lists keywords associated with the channel, comma-separated.
     */
    keywords?: string;
    /**
     * Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.
     */
    moderateComments?: boolean;
    /**
     * A prominent color that can be rendered on this channel page.
     */
    profileColor?: string;
    /**
     * Whether the tab to browse the videos should be displayed.
     */
    showBrowseView?: boolean;
    /**
     * Whether related channels should be proposed.
     */
    showRelatedChannels?: boolean;
    /**
     * Specifies the channel title.
     */
    title?: string;
    /**
     * The ID for a Google Analytics account to track and measure traffic to the channels.
     */
    trackingAnalyticsAccountId?: string;
    /**
     * The trailer of the channel, for users that are not subscribers.
     */
    unsubscribedTrailer?: string;
}

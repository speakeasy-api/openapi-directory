import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single channel. Channels are custom groups of related websites and apps.
 */
export declare class ChannelInput extends SpeakeasyBase {
    /**
     * The ID of the advertiser that owns the channel.
     */
    advertiserId?: string;
    /**
     * Required. The display name of the channel. Must be UTF-8 encoded with a maximum length of 240 bytes.
     */
    displayName?: string;
    /**
     * The ID of the partner that owns the channel.
     */
    partnerId?: string;
}
/**
 * A single channel. Channels are custom groups of related websites and apps.
 */
export declare class Channel extends SpeakeasyBase {
    /**
     * The ID of the advertiser that owns the channel.
     */
    advertiserId?: string;
    /**
     * Output only. The unique ID of the channel. Assigned by the system.
     */
    channelId?: string;
    /**
     * Required. The display name of the channel. Must be UTF-8 encoded with a maximum length of 240 bytes.
     */
    displayName?: string;
    /**
     * Output only. The resource name of the channel.
     */
    name?: string;
    /**
     * Output only. Number of line items that are directly targeting this channel negatively.
     */
    negativelyTargetedLineItemCount?: string;
    /**
     * The ID of the partner that owns the channel.
     */
    partnerId?: string;
    /**
     * Output only. Number of line items that are directly targeting this channel positively.
     */
    positivelyTargetedLineItemCount?: string;
}

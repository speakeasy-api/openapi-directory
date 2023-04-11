import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a custom channel.
 */
export declare class CustomChannelInput extends SpeakeasyBase {
    /**
     * Whether the custom channel is active and collecting data. See https://support.google.com/adsense/answer/10077192.
     */
    active?: boolean;
    /**
     * Required. Display name of the custom channel.
     */
    displayName?: string;
}
/**
 * Representation of a custom channel.
 */
export declare class CustomChannel extends SpeakeasyBase {
    /**
     * Whether the custom channel is active and collecting data. See https://support.google.com/adsense/answer/10077192.
     */
    active?: boolean;
    /**
     * Required. Display name of the custom channel.
     */
    displayName?: string;
    /**
     * Output only. Resource name of the custom channel. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel}
     */
    name?: string;
    /**
     * Output only. Unique ID of the custom channel as used in the `CUSTOM_CHANNEL_ID` reporting dimension.
     */
    reportingDimensionId?: string;
}

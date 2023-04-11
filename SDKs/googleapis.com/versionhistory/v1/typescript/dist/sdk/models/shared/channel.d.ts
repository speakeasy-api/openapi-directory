import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of channel.
 */
export declare enum ChannelChannelTypeEnum {
    ChannelTypeUnspecified = "CHANNEL_TYPE_UNSPECIFIED",
    Stable = "STABLE",
    Beta = "BETA",
    Dev = "DEV",
    Canary = "CANARY",
    CanaryAsan = "CANARY_ASAN",
    All = "ALL",
    Extended = "EXTENDED"
}
/**
 * Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
 */
export declare class Channel extends SpeakeasyBase {
    /**
     * Type of channel.
     */
    channelType?: ChannelChannelTypeEnum;
    /**
     * Channel name. Format is "{product}/platforms/{platform}/channels/{channel}"
     */
    name?: string;
}

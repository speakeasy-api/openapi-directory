import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information.
 */
export declare enum ChannelStatusLongUploadsStatusEnum {
    LongUploadsUnspecified = "longUploadsUnspecified",
    Allowed = "allowed",
    Eligible = "eligible",
    Disallowed = "disallowed"
}
/**
 * Privacy status of the channel.
 */
export declare enum ChannelStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
/**
 * JSON template for the status part of a channel.
 */
export declare class ChannelStatus extends SpeakeasyBase {
    /**
     * If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity.
     */
    isLinked?: boolean;
    /**
     * The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information.
     */
    longUploadsStatus?: ChannelStatusLongUploadsStatusEnum;
    madeForKids?: boolean;
    /**
     * Privacy status of the channel.
     */
    privacyStatus?: ChannelStatusPrivacyStatusEnum;
    selfDeclaredMadeForKids?: boolean;
}

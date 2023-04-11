import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of webcast, typically descriptive of the streaming provider.
 */
export declare enum WebcastTypeEnum {
    Youtube = "youtube",
    Twitch = "twitch",
    Ustream = "ustream",
    Iframe = "iframe",
    Html5 = "html5",
    Rtmp = "rtmp",
    Livestream = "livestream",
    DirectLink = "direct_link",
    Mms = "mms",
    Justin = "justin",
    Stemtv = "stemtv",
    Dacast = "dacast"
}
export declare class Webcast extends SpeakeasyBase {
    /**
     * Type specific channel information. May be the YouTube stream, or Twitch channel name. In the case of iframe types, contains HTML to embed the stream in an HTML iframe.
     */
    channel: string;
    /**
     * The date for the webcast in `yyyy-mm-dd` format. May be null.
     */
    date?: string;
    /**
     * File identification as may be required for some types. May be null.
     */
    file?: string;
    /**
     * Type of webcast, typically descriptive of the streaming provider.
     */
    type: WebcastTypeEnum;
}

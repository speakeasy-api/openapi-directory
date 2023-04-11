import { SpeakeasyBase } from "../../../internal/utils";
import { IngestionInfo } from "./ingestioninfo";
/**
 * The frame rate of the inbound video data.
 */
export declare enum CdnSettingsFrameRateEnum {
    Thirtyfps = "30fps",
    Sixtyfps = "60fps",
    Variable = "variable"
}
/**
 *  The method or protocol used to transmit the video stream.
 */
export declare enum CdnSettingsIngestionTypeEnum {
    Rtmp = "rtmp",
    Dash = "dash",
    Webrtc = "webrtc",
    Hls = "hls"
}
/**
 * The resolution of the inbound video data.
 */
export declare enum CdnSettingsResolutionEnum {
    TwoHundredAndFortyp = "240p",
    ThreeHundredAndSixtyp = "360p",
    FourHundredAndEightyp = "480p",
    SevenHundredAndTwentyp = "720p",
    OneThousandAndEightyp = "1080p",
    OneThousandFourHundredAndFortyp = "1440p",
    TwoThousandOneHundredAndSixtyp = "2160p",
    Variable = "variable"
}
/**
 * Brief description of the live stream cdn settings.
 */
export declare class CdnSettings extends SpeakeasyBase {
    /**
     * The format of the video stream that you are sending to Youtube.
     */
    format?: string;
    /**
     * The frame rate of the inbound video data.
     */
    frameRate?: CdnSettingsFrameRateEnum;
    /**
     * Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.
     */
    ingestionInfo?: IngestionInfo;
    /**
     *  The method or protocol used to transmit the video stream.
     */
    ingestionType?: CdnSettingsIngestionTypeEnum;
    /**
     * The resolution of the inbound video data.
     */
    resolution?: CdnSettingsResolutionEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { H264CodecSettings } from "./h264codecsettings";
import { H265CodecSettings } from "./h265codecsettings";
import { Vp9CodecSettings } from "./vp9codecsettings";
/**
 * Video stream resource.
 */
export declare class VideoStream extends SpeakeasyBase {
    /**
     * H264 codec settings.
     */
    h264?: H264CodecSettings;
    /**
     * H265 codec settings.
     */
    h265?: H265CodecSettings;
    /**
     * VP9 codec settings.
     */
    vp9?: Vp9CodecSettings;
}

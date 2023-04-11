import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoProperty extends SpeakeasyBase {
    /**
     * The URL of the video attachment.
     *
     * @remarks
     *
     * **messenger** supports .mp4
     *
     * **whatsapp** supports .mp4 and .3gpp. Note, only H.264 video codec and AAC audio codec is supported.
     *
     */
    url?: string;
}

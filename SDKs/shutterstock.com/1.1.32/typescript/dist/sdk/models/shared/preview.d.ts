import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Content type of the preview, currently audio/mp3
 */
export declare enum PreviewContentTypeEnum {
    AudioMp3 = "audio/mp3"
}
/**
 * Preview information
 */
export declare class Preview extends SpeakeasyBase {
    /**
     * Content type of the preview, currently audio/mp3
     */
    contentType?: PreviewContentTypeEnum;
    /**
     * Url of the instrument's preview file
     */
    url?: string;
}

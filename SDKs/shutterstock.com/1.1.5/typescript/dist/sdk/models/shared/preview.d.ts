import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PreviewContentTypeEnum {
    AudioMp3 = "audio/mp3"
}
/**
 * Preview information
**/
export declare class Preview extends SpeakeasyBase {
    contentType?: PreviewContentTypeEnum;
    url?: string;
}

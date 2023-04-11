import { SpeakeasyBase } from "../../../internal/utils";
export declare class SuperStickerMetadata extends SpeakeasyBase {
    /**
     * Internationalized alt text that describes the sticker image and any animation associated with it.
     */
    altText?: string;
    /**
     * Specifies the localization language in which the alt text is returned.
     */
    altTextLanguage?: string;
    /**
     * Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker.
     */
    stickerId?: string;
}

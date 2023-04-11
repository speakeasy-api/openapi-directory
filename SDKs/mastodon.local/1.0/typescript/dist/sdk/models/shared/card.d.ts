import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the preview card. String (Enumerable, oneOf).
 */
export declare enum CardTypeEnum {
    Link = "link",
    Photo = "photo",
    Video = "video",
    Rich = "rich"
}
/**
 * Represents a rich preview card that is generated using OpenGraph tags from a URL.
 *
 * @see {@link https://docs.joinmastodon.org/entities/card/}
 */
export declare class Card extends SpeakeasyBase {
    /**
     * The author of the original resource.
     */
    authorName?: string;
    /**
     * A link to the author of the original resource.
     */
    authorUrl?: string;
    /**
     * A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet.
     */
    blurhash?: string;
    /**
     * Description of preview.
     */
    description: string;
    /**
     * Height of preview, in pixels.
     */
    height?: number;
    /**
     * HTML to be used for generating the preview card.
     */
    html?: string;
    /**
     * Preview thumbnail (URL).
     */
    image?: string;
    /**
     * The provider of the original resource.
     */
    providerName?: string;
    /**
     * A link to the provider of the original resource.
     */
    providerUrl?: string;
    /**
     * Title of linked resource.
     */
    title: string;
    /**
     * The type of the preview card. String (Enumerable, oneOf).
     */
    type: CardTypeEnum;
    /**
     * Location of linked resource.
     */
    url: string;
    /**
     * Width of preview, in pixels.
     */
    width?: number;
}

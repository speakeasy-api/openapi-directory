import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a custom emoji.
 *
 * @see {@link https://docs.joinmastodon.org/entities/emoji/}
 */
export declare class Emoji extends SpeakeasyBase {
    /**
     * Used for sorting custom emoji in the picker.
     */
    category?: string;
    /**
     * The name of the custom emoji.
     */
    shortcode: string;
    /**
     * A link to a static copy of the custom emoji. The format is URL.
     */
    staticUrl: string;
    /**
     * A link to the custom emoji. The format is URL.
     */
    url: string;
    /**
     * Whether this Emoji should be visible in the picker or unlisted.
     */
    visibleInPicker: boolean;
}

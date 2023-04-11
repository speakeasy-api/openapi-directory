import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Block object belonging to a promotion.
 */
export declare class PromotionBodyLines extends SpeakeasyBase {
    /**
     * The block object's text in HTML, if it has text.
     */
    htmlTitle?: string;
    /**
     * The anchor text of the block object's link, if it has a link.
     */
    link?: string;
    /**
     * The block object's text, if it has text.
     */
    title?: string;
    /**
     * The URL of the block object's link, if it has one.
     */
    url?: string;
}
/**
 * Image belonging to a promotion.
 */
export declare class PromotionImage extends SpeakeasyBase {
    /**
     * Image height in pixels.
     */
    height?: number;
    /**
     * URL of the image for this promotion link.
     */
    source?: string;
    /**
     * Image width in pixels.
     */
    width?: number;
}
/**
 * Promotion result.
 */
export declare class Promotion extends SpeakeasyBase {
    /**
     * An array of block objects for this promotion.
     */
    bodyLines?: PromotionBodyLines[];
    /**
     * An abridged version of this search's result URL, e.g. www.example.com.
     */
    displayLink?: string;
    /**
     * The title of the promotion, in HTML.
     */
    htmlTitle?: string;
    /**
     * Image belonging to a promotion.
     */
    image?: PromotionImage;
    /**
     * The URL of the promotion.
     */
    link?: string;
    /**
     * The title of the promotion.
     */
    title?: string;
}

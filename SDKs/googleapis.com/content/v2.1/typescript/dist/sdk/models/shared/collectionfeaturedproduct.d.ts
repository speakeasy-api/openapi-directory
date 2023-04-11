import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736)
 */
export declare class CollectionFeaturedProduct extends SpeakeasyBase {
    /**
     * The unique identifier for the product item.
     */
    offerId?: string;
    /**
     * Required. X-coordinate of the product callout on the Shoppable Image.
     */
    x?: number;
    /**
     * Required. Y-coordinate of the product callout on the Shoppable Image.
     */
    y?: number;
}

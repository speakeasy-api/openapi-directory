import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1ProductKeyValue } from "./googlecloudvisionv1p2beta1productkeyvalue";
/**
 * A Product contains ReferenceImages.
 */
export declare class GoogleCloudVisionV1p2beta1Product extends SpeakeasyBase {
    /**
     * User-provided metadata to be stored with this product. Must be at most 4096 characters long.
     */
    description?: string;
    /**
     * The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.
     */
    displayName?: string;
    /**
     * The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.
     */
    name?: string;
    /**
     * Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.
     */
    productCategory?: string;
    /**
     * Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.
     */
    productLabels?: GoogleCloudVisionV1p2beta1ProductKeyValue[];
}

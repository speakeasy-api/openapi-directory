import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Product } from "./googlecloudvisionv1p1beta1product";
/**
 * Information about a product.
 */
export declare class GoogleCloudVisionV1p1beta1ProductSearchResultsResult extends SpeakeasyBase {
    /**
     * The resource name of the image from the product that is the closest match to the query.
     */
    image?: string;
    /**
     * A Product contains ReferenceImages.
     */
    product?: GoogleCloudVisionV1p1beta1Product;
    /**
     * A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
     */
    score?: number;
}

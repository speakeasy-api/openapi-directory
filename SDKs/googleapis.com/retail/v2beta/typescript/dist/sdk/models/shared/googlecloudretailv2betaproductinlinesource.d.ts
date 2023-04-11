import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProductInput } from "./googlecloudretailv2betaproduct";
/**
 * The inline source for the input config for ImportProducts method.
 */
export declare class GoogleCloudRetailV2betaProductInlineSourceInput extends SpeakeasyBase {
    /**
     * Required. A list of products to update/create. Each product must have a valid Product.id. Recommended max of 100 items.
     */
    products?: GoogleCloudRetailV2betaProductInput[];
}

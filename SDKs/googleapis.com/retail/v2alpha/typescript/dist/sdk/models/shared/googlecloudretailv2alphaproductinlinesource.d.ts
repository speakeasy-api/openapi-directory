import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProductInput } from "./googlecloudretailv2alphaproduct";
/**
 * The inline source for the input config for ImportProducts method.
 */
export declare class GoogleCloudRetailV2alphaProductInlineSourceInput extends SpeakeasyBase {
    /**
     * Required. A list of products to update/create. Each product must have a valid Product.id. Recommended max of 100 items.
     */
    products?: GoogleCloudRetailV2alphaProductInput[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";
/**
 * Response message for ProductService.ListProducts method.
 */
export declare class GoogleCloudRetailV2betaListProductsResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The Products.
     */
    products?: GoogleCloudRetailV2betaProduct[];
}

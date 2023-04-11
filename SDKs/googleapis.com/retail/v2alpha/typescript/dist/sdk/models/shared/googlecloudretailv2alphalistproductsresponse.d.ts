import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";
/**
 * Response message for ProductService.ListProducts method.
 */
export declare class GoogleCloudRetailV2alphaListProductsResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The Products.
     */
    products?: GoogleCloudRetailV2alphaProduct[];
    /**
     * The total count of matched Products irrespective of pagination. The total number of Products returned by pagination may be less than the total_size that matches. This field is ignored if ListProductsRequest.require_total_size is not set or ListProductsRequest.page_token is not empty.
     */
    totalSize?: number;
}

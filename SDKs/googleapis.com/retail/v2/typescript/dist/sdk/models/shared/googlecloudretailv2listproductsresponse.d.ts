import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";
/**
 * Response message for ProductService.ListProducts method.
 */
export declare class GoogleCloudRetailV2ListProductsResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The Products.
     */
    products?: GoogleCloudRetailV2Product[];
}

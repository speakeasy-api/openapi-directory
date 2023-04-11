import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Product } from "./googlecloudchannelv1product";
/**
 * Response message for ListProducts.
 */
export declare class GoogleCloudChannelV1ListProductsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * List of Products requested.
     */
    products?: GoogleCloudChannelV1Product[];
}

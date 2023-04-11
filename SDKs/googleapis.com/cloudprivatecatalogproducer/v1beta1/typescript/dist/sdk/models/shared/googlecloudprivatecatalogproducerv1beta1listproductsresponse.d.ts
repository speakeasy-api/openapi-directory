import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Product } from "./googlecloudprivatecatalogproducerv1beta1product";
/**
 * Successful response
 */
export declare class GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse extends SpeakeasyBase {
    /**
     * A pagination token returned from a previous call to ListProducts
     *
     * @remarks
     * that indicates where the listing should continue from.
     * This field is optional.
     */
    nextPageToken?: string;
    /**
     * The `Product` returned from the list call.
     */
    products?: GoogleCloudPrivatecatalogproducerV1beta1Product[];
}

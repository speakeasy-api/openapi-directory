import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogV1beta1Product } from "./googlecloudprivatecatalogv1beta1product";
/**
 * Response message for PrivateCatalog.SearchProducts.
 */
export declare class GoogleCloudPrivatecatalogV1beta1SearchProductsResponse extends SpeakeasyBase {
    /**
     * A pagination token returned from a previous call to SearchProducts that
     *
     * @remarks
     * indicates from where listing should continue.
     * This field is optional.
     */
    nextPageToken?: string;
    /**
     * The `Product` resources computed from the resource context.
     */
    products?: GoogleCloudPrivatecatalogV1beta1Product[];
}

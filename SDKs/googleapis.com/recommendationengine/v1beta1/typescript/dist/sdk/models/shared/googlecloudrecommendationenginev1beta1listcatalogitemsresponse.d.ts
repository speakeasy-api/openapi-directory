import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItem } from "./googlecloudrecommendationenginev1beta1catalogitem";
/**
 * Response message for ListCatalogItems method.
 */
export declare class GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse extends SpeakeasyBase {
    /**
     * The catalog items.
     */
    catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[];
    /**
     * If empty, the list is complete. If nonempty, the token to pass to the next request's ListCatalogItemRequest.page_token.
     */
    nextPageToken?: string;
}

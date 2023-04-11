import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItem } from "./googlecloudrecommendationenginev1beta1catalogitem";
/**
 * The inline source for the input config for ImportCatalogItems method.
 */
export declare class GoogleCloudRecommendationengineV1beta1CatalogInlineSource extends SpeakeasyBase {
    /**
     * Optional. A list of catalog items to update/create. Recommended max of 10k items.
     */
    catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[];
}

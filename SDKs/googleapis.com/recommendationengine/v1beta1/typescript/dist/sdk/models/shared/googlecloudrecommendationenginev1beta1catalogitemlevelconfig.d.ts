import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.
 */
export declare enum GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum {
    CatalogItemLevelUnspecified = "CATALOG_ITEM_LEVEL_UNSPECIFIED",
    Variant = "VARIANT",
    Master = "MASTER"
}
/**
 * Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.
 */
export declare enum GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum {
    CatalogItemLevelUnspecified = "CATALOG_ITEM_LEVEL_UNSPECIFIED",
    Variant = "VARIANT",
    Master = "MASTER"
}
/**
 * Configures the catalog level that users send events to, and the level at which predictions are made.
 */
export declare class GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig extends SpeakeasyBase {
    /**
     * Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.
     */
    eventItemLevel?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum;
    /**
     * Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details.
     */
    predictItemLevel?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum;
}

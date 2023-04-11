import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig } from "./googlecloudrecommendationenginev1beta1catalogitemlevelconfig";
/**
 * The catalog configuration. Next ID: 5.
 */
export declare class GoogleCloudRecommendationengineV1beta1Catalog extends SpeakeasyBase {
    /**
     * Configures the catalog level that users send events to, and the level at which predictions are made.
     */
    catalogItemLevelConfig?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig;
    /**
     * Required. The ID of the default event store.
     */
    defaultEventStoreId?: string;
    /**
     * Required. The catalog display name.
     */
    displayName?: string;
    /**
     * The fully qualified resource name of the catalog.
     */
    name?: string;
}

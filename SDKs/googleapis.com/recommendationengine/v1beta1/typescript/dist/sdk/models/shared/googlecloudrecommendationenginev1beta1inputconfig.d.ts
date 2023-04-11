import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1BigQuerySource } from "./googlecloudrecommendationenginev1beta1bigquerysource";
import { GoogleCloudRecommendationengineV1beta1CatalogInlineSource } from "./googlecloudrecommendationenginev1beta1cataloginlinesource";
import { GoogleCloudRecommendationengineV1beta1GcsSource } from "./googlecloudrecommendationenginev1beta1gcssource";
import { GoogleCloudRecommendationengineV1beta1UserEventInlineSource } from "./googlecloudrecommendationenginev1beta1usereventinlinesource";
/**
 * The input config source.
 */
export declare class GoogleCloudRecommendationengineV1beta1InputConfig extends SpeakeasyBase {
    /**
     * BigQuery source import data from.
     */
    bigQuerySource?: GoogleCloudRecommendationengineV1beta1BigQuerySource;
    /**
     * The inline source for the input config for ImportCatalogItems method.
     */
    catalogInlineSource?: GoogleCloudRecommendationengineV1beta1CatalogInlineSource;
    /**
     * Google Cloud Storage location for input content. format.
     */
    gcsSource?: GoogleCloudRecommendationengineV1beta1GcsSource;
    /**
     * The inline source for the input config for ImportUserEvents method.
     */
    userEventInlineSource?: GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
}

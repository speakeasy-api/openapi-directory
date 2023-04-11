import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItem } from "./googlecloudrecommendationenginev1beta1productcatalogitem";
/**
 * CatalogItem captures all metadata information of items to be recommended.
 */
export declare class GoogleCloudRecommendationengineV1beta1CatalogItem extends SpeakeasyBase {
    /**
     * Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] } ]
     */
    categoryHierarchies?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];
    /**
     * Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB.
     */
    description?: string;
    /**
     * Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog.
     */
    id?: string;
    /**
     * FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
     */
    itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;
    /**
     * Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).
     */
    itemGroupId?: string;
    /**
     * Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance.
     */
    languageCode?: string;
    /**
     * ProductCatalogItem captures item metadata specific to retail products.
     */
    productMetadata?: GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
    /**
     * Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter.
     */
    tags?: string[];
    /**
     * Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB.
     */
    title?: string;
}

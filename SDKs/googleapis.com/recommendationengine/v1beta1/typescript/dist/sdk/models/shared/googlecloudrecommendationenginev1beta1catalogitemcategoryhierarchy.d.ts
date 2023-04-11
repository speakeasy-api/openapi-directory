import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Category represents catalog item category hierarchy.
 */
export declare class GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy extends SpeakeasyBase {
    /**
     * Required. Catalog item categories. Each category should be a UTF-8 encoded string with a length limit of 2 KiB. Note that the order in the list denotes the specificity (from least to most specific).
     */
    categories?: string[];
}

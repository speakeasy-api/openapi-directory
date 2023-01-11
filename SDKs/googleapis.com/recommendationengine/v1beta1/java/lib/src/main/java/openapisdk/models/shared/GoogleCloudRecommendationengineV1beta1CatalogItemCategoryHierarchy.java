package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy
 * Category represents catalog item category hierarchy.
**/
public class GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
}
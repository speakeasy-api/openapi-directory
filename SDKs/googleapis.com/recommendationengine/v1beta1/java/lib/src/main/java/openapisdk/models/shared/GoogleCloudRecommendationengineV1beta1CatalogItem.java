package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1CatalogItem
 * CatalogItem captures all metadata information of items to be recommended.
**/
public class GoogleCloudRecommendationengineV1beta1CatalogItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryHierarchies")
    public GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[] categoryHierarchies;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withCategoryHierarchies(GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[] categoryHierarchies) {
        this.categoryHierarchies = categoryHierarchies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemAttributes")
    public GoogleCloudRecommendationengineV1beta1FeatureMap itemAttributes;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withItemAttributes(GoogleCloudRecommendationengineV1beta1FeatureMap itemAttributes) {
        this.itemAttributes = itemAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemGroupId")
    public String itemGroupId;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withItemGroupId(String itemGroupId) {
        this.itemGroupId = itemGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productMetadata")
    public GoogleCloudRecommendationengineV1beta1ProductCatalogItem productMetadata;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withProductMetadata(GoogleCloudRecommendationengineV1beta1ProductCatalogItem productMetadata) {
        this.productMetadata = productMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleCloudRecommendationengineV1beta1CatalogItem withTitle(String title) {
        this.title = title;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1Catalog
 * The catalog configuration. Next ID: 5.
**/
public class GoogleCloudRecommendationengineV1beta1Catalog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogItemLevelConfig")
    public GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig catalogItemLevelConfig;
    public GoogleCloudRecommendationengineV1beta1Catalog withCatalogItemLevelConfig(GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig catalogItemLevelConfig) {
        this.catalogItemLevelConfig = catalogItemLevelConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultEventStoreId")
    public String defaultEventStoreId;
    public GoogleCloudRecommendationengineV1beta1Catalog withDefaultEventStoreId(String defaultEventStoreId) {
        this.defaultEventStoreId = defaultEventStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudRecommendationengineV1beta1Catalog withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecommendationengineV1beta1Catalog withName(String name) {
        this.name = name;
        return this;
    }
}
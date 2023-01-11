package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1CatalogInlineSource
 * The inline source for the input config for ImportCatalogItems method.
**/
public class GoogleCloudRecommendationengineV1beta1CatalogInlineSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogItems")
    public GoogleCloudRecommendationengineV1beta1CatalogItem[] catalogItems;
    public GoogleCloudRecommendationengineV1beta1CatalogInlineSource withCatalogItems(GoogleCloudRecommendationengineV1beta1CatalogItem[] catalogItems) {
        this.catalogItems = catalogItems;
        return this;
    }
}
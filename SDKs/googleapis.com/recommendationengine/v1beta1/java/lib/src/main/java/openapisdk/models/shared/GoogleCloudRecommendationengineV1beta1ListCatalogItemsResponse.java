package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse
 * Response message for ListCatalogItems method.
**/
public class GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogItems")
    public GoogleCloudRecommendationengineV1beta1CatalogItem[] catalogItems;
    public GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse withCatalogItems(GoogleCloudRecommendationengineV1beta1CatalogItem[] catalogItems) {
        this.catalogItems = catalogItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
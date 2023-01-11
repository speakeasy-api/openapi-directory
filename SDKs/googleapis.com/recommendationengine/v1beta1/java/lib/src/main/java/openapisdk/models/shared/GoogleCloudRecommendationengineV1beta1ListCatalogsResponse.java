package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1ListCatalogsResponse
 * Response for ListCatalogs method.
**/
public class GoogleCloudRecommendationengineV1beta1ListCatalogsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogs")
    public GoogleCloudRecommendationengineV1beta1Catalog[] catalogs;
    public GoogleCloudRecommendationengineV1beta1ListCatalogsResponse withCatalogs(GoogleCloudRecommendationengineV1beta1Catalog[] catalogs) {
        this.catalogs = catalogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRecommendationengineV1beta1ListCatalogsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ListViewsResponse
 * The response of listing views.
**/
public class GoogleCloudContactcenterinsightsV1ListViewsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudContactcenterinsightsV1ListViewsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("views")
    public GoogleCloudContactcenterinsightsV1View[] views;
    public GoogleCloudContactcenterinsightsV1ListViewsResponse withViews(GoogleCloudContactcenterinsightsV1View[] views) {
        this.views = views;
        return this;
    }
}
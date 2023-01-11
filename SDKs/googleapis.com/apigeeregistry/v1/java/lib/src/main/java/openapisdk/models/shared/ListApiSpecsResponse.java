package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApiSpecsResponse
 * Response message for ListApiSpecs.
**/
public class ListApiSpecsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiSpecs")
    public ApiSpec[] apiSpecs;
    public ListApiSpecsResponse withApiSpecs(ApiSpec[] apiSpecs) {
        this.apiSpecs = apiSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListApiSpecsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
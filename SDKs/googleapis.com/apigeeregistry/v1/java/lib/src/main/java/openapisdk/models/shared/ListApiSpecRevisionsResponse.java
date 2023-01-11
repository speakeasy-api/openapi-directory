package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApiSpecRevisionsResponse
 * Response message for ListApiSpecRevisionsResponse.
**/
public class ListApiSpecRevisionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiSpecs")
    public ApiSpec[] apiSpecs;
    public ListApiSpecRevisionsResponse withApiSpecs(ApiSpec[] apiSpecs) {
        this.apiSpecs = apiSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListApiSpecRevisionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
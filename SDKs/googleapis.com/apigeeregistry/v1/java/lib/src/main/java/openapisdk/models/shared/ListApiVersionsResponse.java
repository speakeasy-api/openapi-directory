package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApiVersionsResponse
 * Response message for ListApiVersions.
**/
public class ListApiVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiVersions")
    public ApiVersion[] apiVersions;
    public ListApiVersionsResponse withApiVersions(ApiVersion[] apiVersions) {
        this.apiVersions = apiVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListApiVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
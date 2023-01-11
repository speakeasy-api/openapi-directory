package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApisResponse
 * Response message for ListApis.
**/
public class ListApisResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apis")
    public Api[] apis;
    public ListApisResponse withApis(Api[] apis) {
        this.apis = apis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListApisResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
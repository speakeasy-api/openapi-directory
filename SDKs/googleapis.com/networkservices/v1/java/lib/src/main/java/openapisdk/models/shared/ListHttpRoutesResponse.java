package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListHttpRoutesResponse
 * Response returned by the ListHttpRoutes method.
**/
public class ListHttpRoutesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRoutes")
    public HttpRoute[] httpRoutes;
    public ListHttpRoutesResponse withHttpRoutes(HttpRoute[] httpRoutes) {
        this.httpRoutes = httpRoutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListHttpRoutesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}
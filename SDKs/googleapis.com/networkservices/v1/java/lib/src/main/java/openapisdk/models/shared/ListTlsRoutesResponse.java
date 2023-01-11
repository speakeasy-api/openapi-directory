package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTlsRoutesResponse
 * Response returned by the ListTlsRoutes method.
**/
public class ListTlsRoutesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTlsRoutesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsRoutes")
    public TlsRoute[] tlsRoutes;
    public ListTlsRoutesResponse withTlsRoutes(TlsRoute[] tlsRoutes) {
        this.tlsRoutes = tlsRoutes;
        return this;
    }
}
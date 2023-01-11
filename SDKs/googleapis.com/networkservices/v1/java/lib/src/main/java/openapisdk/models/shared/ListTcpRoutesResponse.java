package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTcpRoutesResponse
 * Response returned by the ListTcpRoutes method.
**/
public class ListTcpRoutesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTcpRoutesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcpRoutes")
    public TcpRoute[] tcpRoutes;
    public ListTcpRoutesResponse withTcpRoutes(TcpRoute[] tcpRoutes) {
        this.tcpRoutes = tcpRoutes;
        return this;
    }
}
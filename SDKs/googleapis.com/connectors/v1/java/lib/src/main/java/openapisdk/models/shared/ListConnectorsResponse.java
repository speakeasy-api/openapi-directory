package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConnectorsResponse
 * Response message for Connectors.ListConnectors.
**/
public class ListConnectorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectors")
    public Connector[] connectors;
    public ListConnectorsResponse withConnectors(Connector[] connectors) {
        this.connectors = connectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListConnectorsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListConnectorsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}
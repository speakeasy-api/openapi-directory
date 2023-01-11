package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListConnectorVersionsResponse
 * Response message for Connectors.ListConnectorVersions.
**/
public class ListConnectorVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorVersions")
    public ConnectorVersion[] connectorVersions;
    public ListConnectorVersionsResponse withConnectorVersions(ConnectorVersion[] connectorVersions) {
        this.connectorVersions = connectorVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListConnectorVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListConnectorVersionsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}
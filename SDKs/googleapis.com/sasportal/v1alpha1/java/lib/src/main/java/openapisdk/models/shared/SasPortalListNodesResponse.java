package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalListNodesResponse
 * Response for ListNodes.
**/
public class SasPortalListNodesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SasPortalListNodesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodes")
    public SasPortalNode[] nodes;
    public SasPortalListNodesResponse withNodes(SasPortalNode[] nodes) {
        this.nodes = nodes;
        return this;
    }
}
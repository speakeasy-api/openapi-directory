package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientStatusRequest
 * Request for client status of clients identified by a list of NodeMatchers.
**/
public class ClientStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeMatchers")
    public NodeMatcher[] nodeMatchers;
    public ClientStatusRequest withNodeMatchers(NodeMatcher[] nodeMatchers) {
        this.nodeMatchers = nodeMatchers;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchRejectPublisherConnectionsRequest
 * A request to reject a batch of publisher connections.
**/
public class BatchRejectPublisherConnectionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public String[] names;
    public BatchRejectPublisherConnectionsRequest withNames(String[] names) {
        this.names = names;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchApprovePublisherConnectionsRequest
 * A request to approve a batch of publisher connections.
**/
public class BatchApprovePublisherConnectionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public String[] names;
    public BatchApprovePublisherConnectionsRequest withNames(String[] names) {
        this.names = names;
        return this;
    }
}
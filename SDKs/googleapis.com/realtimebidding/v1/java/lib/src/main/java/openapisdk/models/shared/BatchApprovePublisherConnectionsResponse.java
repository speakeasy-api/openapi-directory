package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchApprovePublisherConnectionsResponse
 * A response for the request to approve a batch of publisher connections.
**/
public class BatchApprovePublisherConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherConnections")
    public PublisherConnection[] publisherConnections;
    public BatchApprovePublisherConnectionsResponse withPublisherConnections(PublisherConnection[] publisherConnections) {
        this.publisherConnections = publisherConnections;
        return this;
    }
}
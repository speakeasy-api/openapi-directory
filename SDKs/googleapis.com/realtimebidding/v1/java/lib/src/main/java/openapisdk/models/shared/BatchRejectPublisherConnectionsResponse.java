package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchRejectPublisherConnectionsResponse
 * A response for the request to reject a batch of publisher connections.
**/
public class BatchRejectPublisherConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherConnections")
    public PublisherConnection[] publisherConnections;
    public BatchRejectPublisherConnectionsResponse withPublisherConnections(PublisherConnection[] publisherConnections) {
        this.publisherConnections = publisherConnections;
        return this;
    }
}
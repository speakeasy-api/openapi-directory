package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPublisherConnectionsResponse
 * A response to a request for listing publisher connections.
**/
public class ListPublisherConnectionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPublisherConnectionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherConnections")
    public PublisherConnection[] publisherConnections;
    public ListPublisherConnectionsResponse withPublisherConnections(PublisherConnection[] publisherConnections) {
        this.publisherConnections = publisherConnections;
        return this;
    }
}
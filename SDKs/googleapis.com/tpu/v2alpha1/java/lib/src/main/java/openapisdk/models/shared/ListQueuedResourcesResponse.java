package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListQueuedResourcesResponse
 * Response for ListQueuedResources.
**/
public class ListQueuedResourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListQueuedResourcesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queuedResources")
    public QueuedResource[] queuedResources;
    public ListQueuedResourcesResponse withQueuedResources(QueuedResource[] queuedResources) {
        this.queuedResources = queuedResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListQueuedResourcesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}
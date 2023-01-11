package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSubscriptionsResponse
 * Response message for ListSubscriptions.
**/
public class ListSubscriptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSubscriptionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public Subscription[] subscriptions;
    public ListSubscriptionsResponse withSubscriptions(Subscription[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}
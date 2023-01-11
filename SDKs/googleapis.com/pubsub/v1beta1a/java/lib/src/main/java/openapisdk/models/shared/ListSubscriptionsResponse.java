package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSubscriptionsResponse
 * Response for the ListSubscriptions method.
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
    @JsonProperty("subscription")
    public Subscription[] subscription;
    public ListSubscriptionsResponse withSubscription(Subscription[] subscription) {
        this.subscription = subscription;
        return this;
    }
}
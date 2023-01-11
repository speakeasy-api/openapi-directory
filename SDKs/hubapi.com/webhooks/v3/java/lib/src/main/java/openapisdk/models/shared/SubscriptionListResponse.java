package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SubscriptionListResponse
 * List of event subscriptions for your app
**/
public class SubscriptionListResponse {
    @JsonProperty("results")
    public SubscriptionResponse[] results;
    public SubscriptionListResponse withResults(SubscriptionResponse[] results) {
        this.results = results;
        return this;
    }
}
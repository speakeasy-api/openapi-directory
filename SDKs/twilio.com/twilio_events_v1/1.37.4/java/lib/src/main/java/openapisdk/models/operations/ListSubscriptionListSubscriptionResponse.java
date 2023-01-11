package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSubscriptionListSubscriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSubscriptionListSubscriptionResponseMeta meta;
    public ListSubscriptionListSubscriptionResponse withMeta(ListSubscriptionListSubscriptionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public openapisdk.models.shared.EventsV1Subscription[] subscriptions;
    public ListSubscriptionListSubscriptionResponse withSubscriptions(openapisdk.models.shared.EventsV1Subscription[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}
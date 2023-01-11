package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription subscription;
    public GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse withSubscription(GoogleCloudPaymentsResellerSubscriptionV1Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse
 * Response that contains the updated subscription resource.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public GoogleCloudPaymentsResellerSubscriptionV1Subscription subscription;
    public GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse withSubscription(GoogleCloudPaymentsResellerSubscriptionV1Subscription subscription) {
        this.subscription = subscription;
        return this;
    }
}
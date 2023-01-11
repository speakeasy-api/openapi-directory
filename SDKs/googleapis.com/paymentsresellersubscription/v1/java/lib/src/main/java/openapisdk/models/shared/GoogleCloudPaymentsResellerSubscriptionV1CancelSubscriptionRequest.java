package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelImmediately")
    public Boolean cancelImmediately;
    public GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest withCancelImmediately(Boolean cancelImmediately) {
        this.cancelImmediately = cancelImmediately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationReason")
    public GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum cancellationReason;
    public GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest withCancellationReason(GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReasonEnum cancellationReason) {
        this.cancellationReason = cancellationReason;
        return this;
    }
}
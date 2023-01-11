package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails
 * Describes the details of a cancelled or cancelling subscription.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum reason;
    public GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails withReason(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}
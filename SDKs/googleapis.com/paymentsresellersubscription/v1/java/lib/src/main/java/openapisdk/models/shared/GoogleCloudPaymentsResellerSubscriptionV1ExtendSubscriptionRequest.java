package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest
 * Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension")
    public GoogleCloudPaymentsResellerSubscriptionV1Extension extension;
    public GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest withExtension(GoogleCloudPaymentsResellerSubscriptionV1Extension extension) {
        this.extension = extension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}
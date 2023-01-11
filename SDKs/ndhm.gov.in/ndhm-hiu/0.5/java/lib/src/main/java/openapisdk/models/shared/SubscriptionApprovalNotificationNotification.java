package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscriptionApprovalNotificationNotification {
    @JsonProperty("status")
    public SubscriptionStatusEnum status;
    public SubscriptionApprovalNotificationNotification withStatus(SubscriptionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public HiuSubscription subscription;
    public SubscriptionApprovalNotificationNotification withSubscription(HiuSubscription subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionRequestId")
    public String subscriptionRequestId;
    public SubscriptionApprovalNotificationNotification withSubscriptionRequestId(String subscriptionRequestId) {
        this.subscriptionRequestId = subscriptionRequestId;
        return this;
    }
}
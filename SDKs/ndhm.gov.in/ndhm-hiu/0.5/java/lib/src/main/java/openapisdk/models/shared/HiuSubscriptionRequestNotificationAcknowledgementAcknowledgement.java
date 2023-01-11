package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement {
    @JsonProperty("status")
    public HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum status;
    public HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement withStatus(HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("subscriptionRequestId")
    public String subscriptionRequestId;
    public HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement withSubscriptionRequestId(String subscriptionRequestId) {
        this.subscriptionRequestId = subscriptionRequestId;
        return this;
    }
}
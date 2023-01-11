package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HiuSubscriptionNotificationAcknowledgmentAcknowledgement {
    @JsonProperty("eventId")
    public String eventId;
    public HiuSubscriptionNotificationAcknowledgmentAcknowledgement withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonProperty("status")
    public HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum status;
    public HiuSubscriptionNotificationAcknowledgmentAcknowledgement withStatus(HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum status) {
        this.status = status;
        return this;
    }
}
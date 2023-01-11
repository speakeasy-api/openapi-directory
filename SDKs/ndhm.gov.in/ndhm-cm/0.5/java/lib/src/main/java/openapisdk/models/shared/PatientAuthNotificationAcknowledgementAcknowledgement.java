package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientAuthNotificationAcknowledgementAcknowledgement {
    @JsonProperty("status")
    public PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum status;
    public PatientAuthNotificationAcknowledgementAcknowledgement withStatus(PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum status) {
        this.status = status;
        return this;
    }
}
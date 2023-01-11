package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PatientCareContextLinkResponseAcknowledgement {
    @JsonProperty("status")
    public PatientCareContextLinkResponseAcknowledgementStatusEnum status;
    public PatientCareContextLinkResponseAcknowledgement withStatus(PatientCareContextLinkResponseAcknowledgementStatusEnum status) {
        this.status = status;
        return this;
    }
}
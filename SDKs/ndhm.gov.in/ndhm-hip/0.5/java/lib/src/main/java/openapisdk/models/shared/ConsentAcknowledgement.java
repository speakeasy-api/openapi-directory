package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentAcknowledgement {
    @JsonProperty("consentId")
    public String consentId;
    public ConsentAcknowledgement withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("status")
    public ConsentAcknowledgementStatusEnum status;
    public ConsentAcknowledgement withStatus(ConsentAcknowledgementStatusEnum status) {
        this.status = status;
        return this;
    }
}
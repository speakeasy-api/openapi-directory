package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HiuConsentNotificationEventNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtefacts")
    public ConsentArtefactReference[] consentArtefacts;
    public HiuConsentNotificationEventNotification withConsentArtefacts(ConsentArtefactReference[] consentArtefacts) {
        this.consentArtefacts = consentArtefacts;
        return this;
    }
    @JsonProperty("consentRequestId")
    public String consentRequestId;
    public HiuConsentNotificationEventNotification withConsentRequestId(String consentRequestId) {
        this.consentRequestId = consentRequestId;
        return this;
    }
    @JsonProperty("status")
    public ConsentStatusEnum status;
    public HiuConsentNotificationEventNotification withStatus(ConsentStatusEnum status) {
        this.status = status;
        return this;
    }
}
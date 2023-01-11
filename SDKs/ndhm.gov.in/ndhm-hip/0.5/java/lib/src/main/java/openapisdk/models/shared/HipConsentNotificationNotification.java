package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HipConsentNotificationNotification {
    @JsonProperty("consentDetail")
    public HipConsentNotificationNotificationConsentDetail consentDetail;
    public HipConsentNotificationNotification withConsentDetail(HipConsentNotificationNotificationConsentDetail consentDetail) {
        this.consentDetail = consentDetail;
        return this;
    }
    @JsonProperty("consentId")
    public String consentId;
    public HipConsentNotificationNotification withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("signature")
    public String signature;
    public HipConsentNotificationNotification withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonProperty("status")
    public ConsentStatusEnum status;
    public HipConsentNotificationNotification withStatus(ConsentStatusEnum status) {
        this.status = status;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentArtefactResponseConsent {
    @JsonProperty("consentDetail")
    public ConsentArtefactResponseConsentConsentDetail consentDetail;
    public ConsentArtefactResponseConsent withConsentDetail(ConsentArtefactResponseConsentConsentDetail consentDetail) {
        this.consentDetail = consentDetail;
        return this;
    }
    @JsonProperty("signature")
    public String signature;
    public ConsentArtefactResponseConsent withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @JsonProperty("status")
    public ConsentStatusEnum status;
    public ConsentArtefactResponseConsent withStatus(ConsentStatusEnum status) {
        this.status = status;
        return this;
    }
}
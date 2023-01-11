package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HiuConsentRequestStatusConsentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtefacts")
    public ConsentArtefactReference[] consentArtefacts;
    public HiuConsentRequestStatusConsentRequest withConsentArtefacts(ConsentArtefactReference[] consentArtefacts) {
        this.consentArtefacts = consentArtefacts;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public HiuConsentRequestStatusConsentRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("status")
    public ConsentStatusEnum status;
    public HiuConsentRequestStatusConsentRequest withStatus(ConsentStatusEnum status) {
        this.status = status;
        return this;
    }
}
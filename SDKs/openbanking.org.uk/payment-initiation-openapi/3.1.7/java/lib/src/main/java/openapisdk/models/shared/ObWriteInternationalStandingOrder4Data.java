package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternationalStandingOrder4Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteInternationalStandingOrder4Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalStandingOrder4DataInitiation initiation;
    public ObWriteInternationalStandingOrder4Data withInitiation(ObWriteInternationalStandingOrder4DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternational3Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteInternational3Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternational3DataInitiation initiation;
    public ObWriteInternational3Data withInitiation(ObWriteInternational3DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
}
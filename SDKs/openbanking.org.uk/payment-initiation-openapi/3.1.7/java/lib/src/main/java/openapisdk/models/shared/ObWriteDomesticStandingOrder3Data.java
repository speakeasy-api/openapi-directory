package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomesticStandingOrder3Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteDomesticStandingOrder3Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticStandingOrder3DataInitiation initiation;
    public ObWriteDomesticStandingOrder3Data withInitiation(ObWriteDomesticStandingOrder3DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
}
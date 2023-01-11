package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomesticScheduled2Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteDomesticScheduled2Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticScheduled2DataInitiation initiation;
    public ObWriteDomesticScheduled2Data withInitiation(ObWriteDomesticScheduled2DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
}
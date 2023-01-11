package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomestic2Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteDomestic2Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomestic2DataInitiation initiation;
    public ObWriteDomestic2Data withInitiation(ObWriteDomestic2DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
}
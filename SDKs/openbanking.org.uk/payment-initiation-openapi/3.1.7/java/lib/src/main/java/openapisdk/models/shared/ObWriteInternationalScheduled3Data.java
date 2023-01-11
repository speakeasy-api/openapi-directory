package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternationalScheduled3Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteInternationalScheduled3Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalScheduled3DataInitiation initiation;
    public ObWriteInternationalScheduled3Data withInitiation(ObWriteInternationalScheduled3DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
}
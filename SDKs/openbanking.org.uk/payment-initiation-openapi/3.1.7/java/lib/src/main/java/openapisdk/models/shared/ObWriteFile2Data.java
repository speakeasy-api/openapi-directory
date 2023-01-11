package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteFile2Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteFile2Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteFile2DataInitiation initiation;
    public ObWriteFile2Data withInitiation(ObWriteFile2DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
}
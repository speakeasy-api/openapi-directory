package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomesticConsent4 {
    @JsonProperty("Data")
    public ObWriteDomesticConsent4Data data;
    public ObWriteDomesticConsent4 withData(ObWriteDomesticConsent4Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomesticConsent4 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
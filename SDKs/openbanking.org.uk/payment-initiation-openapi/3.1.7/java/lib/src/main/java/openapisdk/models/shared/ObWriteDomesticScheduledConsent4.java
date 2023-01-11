package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomesticScheduledConsent4 {
    @JsonProperty("Data")
    public ObWriteDomesticScheduledConsent4Data data;
    public ObWriteDomesticScheduledConsent4 withData(ObWriteDomesticScheduledConsent4Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomesticScheduledConsent4 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
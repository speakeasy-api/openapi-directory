package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomesticStandingOrderConsent5 {
    @JsonProperty("Data")
    public ObWriteDomesticStandingOrderConsent5Data data;
    public ObWriteDomesticStandingOrderConsent5 withData(ObWriteDomesticStandingOrderConsent5Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomesticStandingOrderConsent5 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternationalStandingOrderConsent6 {
    @JsonProperty("Data")
    public ObWriteInternationalStandingOrderConsent6Data data;
    public ObWriteInternationalStandingOrderConsent6 withData(ObWriteInternationalStandingOrderConsent6Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteInternationalStandingOrderConsent6 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
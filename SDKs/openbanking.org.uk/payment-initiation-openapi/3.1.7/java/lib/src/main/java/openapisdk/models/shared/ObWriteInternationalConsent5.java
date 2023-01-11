package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternationalConsent5 {
    @JsonProperty("Data")
    public ObWriteInternationalConsent5Data data;
    public ObWriteInternationalConsent5 withData(ObWriteInternationalConsent5Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteInternationalConsent5 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
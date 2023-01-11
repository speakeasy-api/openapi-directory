package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternationalScheduledConsent5 {
    @JsonProperty("Data")
    public ObWriteInternationalScheduledConsent5Data data;
    public ObWriteInternationalScheduledConsent5 withData(ObWriteInternationalScheduledConsent5Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteInternationalScheduledConsent5 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternationalStandingOrder4 {
    @JsonProperty("Data")
    public ObWriteInternationalStandingOrder4Data data;
    public ObWriteInternationalStandingOrder4 withData(ObWriteInternationalStandingOrder4Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteInternationalStandingOrder4 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
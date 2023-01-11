package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObReadConsent1 {
    @JsonProperty("Data")
    public ObReadData1 data;
    public ObReadConsent1 withData(ObReadData1 data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public java.util.Map<String, Object> risk;
    public ObReadConsent1 withRisk(java.util.Map<String, Object> risk) {
        this.risk = risk;
        return this;
    }
}
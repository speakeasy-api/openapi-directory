package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomestic2 {
    @JsonProperty("Data")
    public ObWriteDomestic2Data data;
    public ObWriteDomestic2 withData(ObWriteDomestic2Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomestic2 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
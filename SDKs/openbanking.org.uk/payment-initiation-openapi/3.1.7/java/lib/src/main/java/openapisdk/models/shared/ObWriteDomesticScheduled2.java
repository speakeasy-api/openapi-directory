package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomesticScheduled2 {
    @JsonProperty("Data")
    public ObWriteDomesticScheduled2Data data;
    public ObWriteDomesticScheduled2 withData(ObWriteDomesticScheduled2Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomesticScheduled2 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
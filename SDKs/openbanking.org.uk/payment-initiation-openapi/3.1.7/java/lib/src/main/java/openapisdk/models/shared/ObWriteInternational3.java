package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternational3 {
    @JsonProperty("Data")
    public ObWriteInternational3Data data;
    public ObWriteInternational3 withData(ObWriteInternational3Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteInternational3 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
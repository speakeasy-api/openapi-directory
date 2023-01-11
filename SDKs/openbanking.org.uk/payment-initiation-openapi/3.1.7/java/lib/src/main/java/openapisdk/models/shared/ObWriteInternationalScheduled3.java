package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteInternationalScheduled3 {
    @JsonProperty("Data")
    public ObWriteInternationalScheduled3Data data;
    public ObWriteInternationalScheduled3 withData(ObWriteInternationalScheduled3Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteInternationalScheduled3 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteDomesticStandingOrder3 {
    @JsonProperty("Data")
    public ObWriteDomesticStandingOrder3Data data;
    public ObWriteDomesticStandingOrder3 withData(ObWriteDomesticStandingOrder3Data data) {
        this.data = data;
        return this;
    }
    @JsonProperty("Risk")
    public ObRisk1 risk;
    public ObWriteDomesticStandingOrder3 withRisk(ObRisk1 risk) {
        this.risk = risk;
        return this;
    }
}
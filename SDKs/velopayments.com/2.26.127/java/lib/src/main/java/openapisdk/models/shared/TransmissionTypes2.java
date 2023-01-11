package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransmissionTypes2 {
    @JsonProperty("ACH")
    public Boolean ach;
    public TransmissionTypes2 withAch(Boolean ach) {
        this.ach = ach;
        return this;
    }
    @JsonProperty("SAME_DAY_ACH")
    public Boolean sameDAYACH;
    public TransmissionTypes2 withSameDayAch(Boolean sameDAYACH) {
        this.sameDAYACH = sameDAYACH;
        return this;
    }
    @JsonProperty("WIRE")
    public Boolean wire;
    public TransmissionTypes2 withWire(Boolean wire) {
        this.wire = wire;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransmissionTypes {
    @JsonProperty("ACH")
    public Boolean ach;
    public TransmissionTypes withAch(Boolean ach) {
        this.ach = ach;
        return this;
    }
    @JsonProperty("SAME_DAY_ACH")
    public Boolean sameDAYACH;
    public TransmissionTypes withSameDayAch(Boolean sameDAYACH) {
        this.sameDAYACH = sameDAYACH;
        return this;
    }
    @JsonProperty("WIRE")
    public Boolean wire;
    public TransmissionTypes withWire(Boolean wire) {
        this.wire = wire;
        return this;
    }
}
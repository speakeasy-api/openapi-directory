package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SymmetricalMatrixRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("curbsides")
    public String[] curbsides;
    public SymmetricalMatrixRequest withCurbsides(String[] curbsides) {
        this.curbsides = curbsides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fail_fast")
    public Boolean failFast;
    public SymmetricalMatrixRequest withFailFast(Boolean failFast) {
        this.failFast = failFast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("out_arrays")
    public String[] outArrays;
    public SymmetricalMatrixRequest withOutArrays(String[] outArrays) {
        this.outArrays = outArrays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("point_hints")
    public String[] pointHints;
    public SymmetricalMatrixRequest withPointHints(String[] pointHints) {
        this.pointHints = pointHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public Double[][] points;
    public SymmetricalMatrixRequest withPoints(Double[][] points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snap_preventions")
    public String[] snapPreventions;
    public SymmetricalMatrixRequest withSnapPreventions(String[] snapPreventions) {
        this.snapPreventions = snapPreventions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("turn_costs")
    public Boolean turnCosts;
    public SymmetricalMatrixRequest withTurnCosts(Boolean turnCosts) {
        this.turnCosts = turnCosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle")
    public VehicleProfileIdEnum vehicle;
    public SymmetricalMatrixRequest withVehicle(VehicleProfileIdEnum vehicle) {
        this.vehicle = vehicle;
        return this;
    }
}
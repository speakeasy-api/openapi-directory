package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MatrixRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fail_fast")
    public Boolean failFast;
    public MatrixRequest withFailFast(Boolean failFast) {
        this.failFast = failFast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_curbsides")
    public String[] fromCurbsides;
    public MatrixRequest withFromCurbsides(String[] fromCurbsides) {
        this.fromCurbsides = fromCurbsides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_point_hints")
    public String[] fromPointHints;
    public MatrixRequest withFromPointHints(String[] fromPointHints) {
        this.fromPointHints = fromPointHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_points")
    public Double[][] fromPoints;
    public MatrixRequest withFromPoints(Double[][] fromPoints) {
        this.fromPoints = fromPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("out_arrays")
    public String[] outArrays;
    public MatrixRequest withOutArrays(String[] outArrays) {
        this.outArrays = outArrays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snap_preventions")
    public String[] snapPreventions;
    public MatrixRequest withSnapPreventions(String[] snapPreventions) {
        this.snapPreventions = snapPreventions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_curbsides")
    public String[] toCurbsides;
    public MatrixRequest withToCurbsides(String[] toCurbsides) {
        this.toCurbsides = toCurbsides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_point_hints")
    public String[] toPointHints;
    public MatrixRequest withToPointHints(String[] toPointHints) {
        this.toPointHints = toPointHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_points")
    public Double[][] toPoints;
    public MatrixRequest withToPoints(Double[][] toPoints) {
        this.toPoints = toPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("turn_costs")
    public Boolean turnCosts;
    public MatrixRequest withTurnCosts(Boolean turnCosts) {
        this.turnCosts = turnCosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle")
    public VehicleProfileIdEnum vehicle;
    public MatrixRequest withVehicle(VehicleProfileIdEnum vehicle) {
        this.vehicle = vehicle;
        return this;
    }
}
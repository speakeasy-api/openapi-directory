package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3Run {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_name")
    public String destinationName;
    public V3Run withDestinationName(String destinationName) {
        this.destinationName = destinationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction_id")
    public Integer directionId;
    public V3Run withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("express_stop_count")
    public Integer expressStopCount;
    public V3Run withExpressStopCount(Integer expressStopCount) {
        this.expressStopCount = expressStopCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("final_stop_id")
    public Integer finalStopId;
    public V3Run withFinalStopId(Integer finalStopId) {
        this.finalStopId = finalStopId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geopath")
    public java.util.Map<String, Object>[] geopath;
    public V3Run withGeopath(java.util.Map<String, Object>[] geopath) {
        this.geopath = geopath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_id")
    public Integer routeId;
    public V3Run withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_type")
    public Integer routeType;
    public V3Run withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_id")
    public Integer runId;
    public V3Run withRunId(Integer runId) {
        this.runId = runId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_ref")
    public String runRef;
    public V3Run withRunRef(String runRef) {
        this.runRef = runRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_sequence")
    public Integer runSequence;
    public V3Run withRunSequence(Integer runSequence) {
        this.runSequence = runSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public V3Run withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle_descriptor")
    public V3VehicleDescriptor vehicleDescriptor;
    public V3Run withVehicleDescriptor(V3VehicleDescriptor vehicleDescriptor) {
        this.vehicleDescriptor = vehicleDescriptor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle_position")
    public V3VehiclePosition vehiclePosition;
    public V3Run withVehiclePosition(V3VehiclePosition vehiclePosition) {
        this.vehiclePosition = vehiclePosition;
        return this;
    }
}
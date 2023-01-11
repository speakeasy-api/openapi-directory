package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Route {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public Activity[] activities;
    public Route withActivities(Activity[] activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completion_time")
    public Long completionTime;
    public Route withCompletionTime(Long completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Long distance;
    public Route withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public RoutePoint[] points;
    public Route withPoints(RoutePoint[] points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preparation_time")
    public Long preparationTime;
    public Route withPreparationTime(Long preparationTime) {
        this.preparationTime = preparationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_duration")
    public Long serviceDuration;
    public Route withServiceDuration(Long serviceDuration) {
        this.serviceDuration = serviceDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_time")
    public Long transportTime;
    public Route withTransportTime(Long transportTime) {
        this.transportTime = transportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle_id")
    public String vehicleId;
    public Route withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_time")
    public Long waitingTime;
    public Route withWaitingTime(Long waitingTime) {
        this.waitingTime = waitingTime;
        return this;
    }
}
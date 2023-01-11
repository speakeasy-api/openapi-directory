package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Solution
 * Only available if status field indicates `finished`.
**/
public class Solution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completion_time")
    public Long completionTime;
    public Solution withCompletionTime(Long completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costs")
    public Integer costs;
    public Solution withCosts(Integer costs) {
        this.costs = costs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Integer distance;
    public Solution withDistance(Integer distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_operation_time")
    public Long maxOperationTime;
    public Solution withMaxOperationTime(Long maxOperationTime) {
        this.maxOperationTime = maxOperationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no_unassigned")
    public Integer noUnassigned;
    public Solution withNoUnassigned(Integer noUnassigned) {
        this.noUnassigned = noUnassigned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no_vehicles")
    public Integer noVehicles;
    public Solution withNoVehicles(Integer noVehicles) {
        this.noVehicles = noVehicles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preparation_time")
    public Long preparationTime;
    public Solution withPreparationTime(Long preparationTime) {
        this.preparationTime = preparationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public Route[] routes;
    public Solution withRoutes(Route[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_duration")
    public Long serviceDuration;
    public Solution withServiceDuration(Long serviceDuration) {
        this.serviceDuration = serviceDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public Solution withTime(Long time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_time")
    public Long transportTime;
    public Solution withTransportTime(Long transportTime) {
        this.transportTime = transportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unassigned")
    public SolutionUnassigned unassigned;
    public Solution withUnassigned(SolutionUnassigned unassigned) {
        this.unassigned = unassigned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_time")
    public Long waitingTime;
    public Solution withWaitingTime(Long waitingTime) {
        this.waitingTime = waitingTime;
        return this;
    }
}
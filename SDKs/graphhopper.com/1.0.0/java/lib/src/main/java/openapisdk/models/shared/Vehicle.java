package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Vehicle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("break")
    public Object break_;
    public Vehicle withBreak(Object break_) {
        this.break_ = break_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("earliest_start")
    public Long earliestStart;
    public Vehicle withEarliestStart(Long earliestStart) {
        this.earliestStart = earliestStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_address")
    public Address endAddress;
    public Vehicle withEndAddress(Address endAddress) {
        this.endAddress = endAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_end")
    public Long latestEnd;
    public Vehicle withLatestEnd(Long latestEnd) {
        this.latestEnd = latestEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_activities")
    public Integer maxActivities;
    public Vehicle withMaxActivities(Integer maxActivities) {
        this.maxActivities = maxActivities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_distance")
    public Long maxDistance;
    public Vehicle withMaxDistance(Long maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_driving_time")
    public Long maxDrivingTime;
    public Vehicle withMaxDrivingTime(Long maxDrivingTime) {
        this.maxDrivingTime = maxDrivingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_jobs")
    public Integer maxJobs;
    public Vehicle withMaxJobs(Integer maxJobs) {
        this.maxJobs = maxJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_jobs")
    public Integer minJobs;
    public Vehicle withMinJobs(Integer minJobs) {
        this.minJobs = minJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("move_to_end_address")
    public Boolean moveToEndAddress;
    public Vehicle withMoveToEndAddress(Boolean moveToEndAddress) {
        this.moveToEndAddress = moveToEndAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("return_to_depot")
    public Boolean returnToDepot;
    public Vehicle withReturnToDepot(Boolean returnToDepot) {
        this.returnToDepot = returnToDepot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skills")
    public String[] skills;
    public Vehicle withSkills(String[] skills) {
        this.skills = skills;
        return this;
    }
    @JsonProperty("start_address")
    public Address startAddress;
    public Vehicle withStartAddress(Address startAddress) {
        this.startAddress = startAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type_id")
    public String typeId;
    public Vehicle withTypeId(String typeId) {
        this.typeId = typeId;
        return this;
    }
    @JsonProperty("vehicle_id")
    public String vehicleId;
    public Vehicle withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Address address;
    public Service withAddress(Address address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_vehicles")
    public String[] allowedVehicles;
    public Service withAllowedVehicles(String[] allowedVehicles) {
        this.allowedVehicles = allowedVehicles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disallowed_vehicles")
    public String[] disallowedVehicles;
    public Service withDisallowedVehicles(String[] disallowedVehicles) {
        this.disallowedVehicles = disallowedVehicles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Service withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public Service withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Service withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_time_in_vehicle")
    public Long maxTimeInVehicle;
    public Service withMaxTimeInVehicle(Long maxTimeInVehicle) {
        this.maxTimeInVehicle = maxTimeInVehicle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Service withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preparation_time")
    public Long preparationTime;
    public Service withPreparationTime(Long preparationTime) {
        this.preparationTime = preparationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Integer priority;
    public Service withPriority(Integer priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_skills")
    public String[] requiredSkills;
    public Service withRequiredSkills(String[] requiredSkills) {
        this.requiredSkills = requiredSkills;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Integer[] size;
    public Service withSize(Integer[] size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_windows")
    public TimeWindow[] timeWindows;
    public Service withTimeWindows(TimeWindow[] timeWindows) {
        this.timeWindows = timeWindows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ServiceTypeEnum type;
    public Service withType(ServiceTypeEnum type) {
        this.type = type;
        return this;
    }
}
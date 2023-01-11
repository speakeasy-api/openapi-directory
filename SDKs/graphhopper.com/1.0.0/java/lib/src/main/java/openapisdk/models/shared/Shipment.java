package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Shipment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_vehicles")
    public String[] allowedVehicles;
    public Shipment withAllowedVehicles(String[] allowedVehicles) {
        this.allowedVehicles = allowedVehicles;
        return this;
    }
    @JsonProperty("delivery")
    public Stop delivery;
    public Shipment withDelivery(Stop delivery) {
        this.delivery = delivery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disallowed_vehicles")
    public String[] disallowedVehicles;
    public Shipment withDisallowedVehicles(String[] disallowedVehicles) {
        this.disallowedVehicles = disallowedVehicles;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Shipment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_time_in_vehicle")
    public Long maxTimeInVehicle;
    public Shipment withMaxTimeInVehicle(Long maxTimeInVehicle) {
        this.maxTimeInVehicle = maxTimeInVehicle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Shipment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pickup")
    public Stop pickup;
    public Shipment withPickup(Stop pickup) {
        this.pickup = pickup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Integer priority;
    public Shipment withPriority(Integer priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_skills")
    public String[] requiredSkills;
    public Shipment withRequiredSkills(String[] requiredSkills) {
        this.requiredSkills = requiredSkills;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Integer[] size;
    public Shipment withSize(Integer[] size) {
        this.size = size;
        return this;
    }
}
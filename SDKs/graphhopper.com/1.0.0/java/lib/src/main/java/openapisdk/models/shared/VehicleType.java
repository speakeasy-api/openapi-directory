package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VehicleType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacity")
    public Integer[] capacity;
    public VehicleType withCapacity(Integer[] capacity) {
        this.capacity = capacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consider_traffic")
    public Boolean considerTraffic;
    public VehicleType withConsiderTraffic(Boolean considerTraffic) {
        this.considerTraffic = considerTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost_per_activation")
    public Double costPerActivation;
    public VehicleType withCostPerActivation(Double costPerActivation) {
        this.costPerActivation = costPerActivation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost_per_meter")
    public Double costPerMeter;
    public VehicleType withCostPerMeter(Double costPerMeter) {
        this.costPerMeter = costPerMeter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost_per_second")
    public Double costPerSecond;
    public VehicleType withCostPerSecond(Double costPerSecond) {
        this.costPerSecond = costPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_data_provider")
    public VehicleTypeNetworkDataProviderEnum networkDataProvider;
    public VehicleType withNetworkDataProvider(VehicleTypeNetworkDataProviderEnum networkDataProvider) {
        this.networkDataProvider = networkDataProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public java.util.Map<String, Object> profile;
    public VehicleType withProfile(java.util.Map<String, Object> profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_time_factor")
    public Double serviceTimeFactor;
    public VehicleType withServiceTimeFactor(Double serviceTimeFactor) {
        this.serviceTimeFactor = serviceTimeFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speed_factor")
    public Double speedFactor;
    public VehicleType withSpeedFactor(Double speedFactor) {
        this.speedFactor = speedFactor;
        return this;
    }
    @JsonProperty("type_id")
    public String typeId;
    public VehicleType withTypeId(String typeId) {
        this.typeId = typeId;
        return this;
    }
}
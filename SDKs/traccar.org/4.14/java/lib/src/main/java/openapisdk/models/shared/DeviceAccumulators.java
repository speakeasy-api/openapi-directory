package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceAccumulators {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public Long deviceId;
    public DeviceAccumulators withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Double hours;
    public DeviceAccumulators withHours(Double hours) {
        this.hours = hours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDistance")
    public Double totalDistance;
    public DeviceAccumulators withTotalDistance(Double totalDistance) {
        this.totalDistance = totalDistance;
        return this;
    }
}
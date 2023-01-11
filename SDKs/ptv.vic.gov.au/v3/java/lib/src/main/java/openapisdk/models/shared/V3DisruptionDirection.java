package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DisruptionDirection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction_id")
    public Integer directionId;
    public V3DisruptionDirection withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction_name")
    public String directionName;
    public V3DisruptionDirection withDirectionName(String directionName) {
        this.directionName = directionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route_direction_id")
    public Integer routeDirectionId;
    public V3DisruptionDirection withRouteDirectionId(Integer routeDirectionId) {
        this.routeDirectionId = routeDirectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_time")
    public String serviceTime;
    public V3DisruptionDirection withServiceTime(String serviceTime) {
        this.serviceTime = serviceTime;
        return this;
    }
}
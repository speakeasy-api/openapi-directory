package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RoutePoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinates")
    public java.util.Map<String, Object>[] coordinates;
    public RoutePoint withCoordinates(java.util.Map<String, Object>[] coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RoutePoint withType(String type) {
        this.type = type;
        return this;
    }
}
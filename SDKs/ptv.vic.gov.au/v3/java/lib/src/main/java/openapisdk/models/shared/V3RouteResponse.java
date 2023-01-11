package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3RouteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route")
    public java.util.Map<String, Object> route;
    public V3RouteResponse withRoute(java.util.Map<String, Object> route) {
        this.route = route;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3RouteResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
}
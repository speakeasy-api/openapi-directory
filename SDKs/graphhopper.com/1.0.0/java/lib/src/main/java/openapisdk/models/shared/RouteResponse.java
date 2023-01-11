package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RouteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public ResponseInfo info;
    public RouteResponse withInfo(ResponseInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paths")
    public RouteResponsePath[] paths;
    public RouteResponse withPaths(RouteResponsePath[] paths) {
        this.paths = paths;
        return this;
    }
}
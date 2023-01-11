package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopsOnRouteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruptions")
    public java.util.Map<String, V3Disruption> disruptions;
    public V3StopsOnRouteResponse withDisruptions(java.util.Map<String, V3Disruption> disruptions) {
        this.disruptions = disruptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geopath")
    public java.util.Map<String, Object>[] geopath;
    public V3StopsOnRouteResponse withGeopath(java.util.Map<String, Object>[] geopath) {
        this.geopath = geopath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3StopsOnRouteResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stops")
    public V3StopOnRoute[] stops;
    public V3StopsOnRouteResponse withStops(V3StopOnRoute[] stops) {
        this.stops = stops;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopsByDistanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruptions")
    public java.util.Map<String, V3Disruption> disruptions;
    public V3StopsByDistanceResponse withDisruptions(java.util.Map<String, V3Disruption> disruptions) {
        this.disruptions = disruptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3StopsByDistanceResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stops")
    public V3StopGeosearch[] stops;
    public V3StopsByDistanceResponse withStops(V3StopGeosearch[] stops) {
        this.stops = stops;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DeparturesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departures")
    public V3Departure[] departures;
    public V3DeparturesResponse withDepartures(V3Departure[] departures) {
        this.departures = departures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directions")
    public java.util.Map<String, V3Direction> directions;
    public V3DeparturesResponse withDirections(java.util.Map<String, V3Direction> directions) {
        this.directions = directions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruptions")
    public java.util.Map<String, V3Disruption> disruptions;
    public V3DeparturesResponse withDisruptions(java.util.Map<String, V3Disruption> disruptions) {
        this.disruptions = disruptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public java.util.Map<String, java.util.Map<String, Object>> routes;
    public V3DeparturesResponse withRoutes(java.util.Map<String, java.util.Map<String, Object>> routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runs")
    public java.util.Map<String, V3Run> runs;
    public V3DeparturesResponse withRuns(java.util.Map<String, V3Run> runs) {
        this.runs = runs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3DeparturesResponse withStatus(V3Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stops")
    public java.util.Map<String, V3StopModel> stops;
    public V3DeparturesResponse withStops(java.util.Map<String, V3StopModel> stops) {
        this.stops = stops;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StoppingPattern {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departures")
    public V3PatternDeparture[] departures;
    public V3StoppingPattern withDepartures(V3PatternDeparture[] departures) {
        this.departures = departures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directions")
    public java.util.Map<String, V3Direction> directions;
    public V3StoppingPattern withDirections(java.util.Map<String, V3Direction> directions) {
        this.directions = directions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruptions")
    public V3Disruption[] disruptions;
    public V3StoppingPattern withDisruptions(V3Disruption[] disruptions) {
        this.disruptions = disruptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public java.util.Map<String, java.util.Map<String, Object>> routes;
    public V3StoppingPattern withRoutes(java.util.Map<String, java.util.Map<String, Object>> routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runs")
    public java.util.Map<String, V3Run> runs;
    public V3StoppingPattern withRuns(java.util.Map<String, V3Run> runs) {
        this.runs = runs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3StoppingPattern withStatus(V3Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stops")
    public java.util.Map<String, V3StoppingPatternStop> stops;
    public V3StoppingPattern withStops(java.util.Map<String, V3StoppingPatternStop> stops) {
        this.stops = stops;
        return this;
    }
}
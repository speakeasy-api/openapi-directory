package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3SearchResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlets")
    public V3ResultOutlet[] outlets;
    public V3SearchResult withOutlets(V3ResultOutlet[] outlets) {
        this.outlets = outlets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routes")
    public V3ResultRoute[] routes;
    public V3SearchResult withRoutes(V3ResultRoute[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public V3Status status;
    public V3SearchResult withStatus(V3Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stops")
    public V3ResultStop[] stops;
    public V3SearchResult withStops(V3ResultStop[] stops) {
        this.stops = stops;
        return this;
    }
}
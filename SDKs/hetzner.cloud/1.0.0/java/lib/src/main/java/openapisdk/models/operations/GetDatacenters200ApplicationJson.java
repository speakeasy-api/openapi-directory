package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDatacenters200ApplicationJson {
    @JsonProperty("datacenters")
    public GetDatacenters200ApplicationJsonDatacenters[] datacenters;
    public GetDatacenters200ApplicationJson withDatacenters(GetDatacenters200ApplicationJsonDatacenters[] datacenters) {
        this.datacenters = datacenters;
        return this;
    }
    @JsonProperty("recommendation")
    public Double recommendation;
    public GetDatacenters200ApplicationJson withRecommendation(Double recommendation) {
        this.recommendation = recommendation;
        return this;
    }
}
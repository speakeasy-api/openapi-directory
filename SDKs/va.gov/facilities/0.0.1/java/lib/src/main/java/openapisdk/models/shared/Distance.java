package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Distance {
    @JsonProperty("distance")
    public Double distance;
    public Distance withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Distance withId(String id) {
        this.id = id;
        return this;
    }
}
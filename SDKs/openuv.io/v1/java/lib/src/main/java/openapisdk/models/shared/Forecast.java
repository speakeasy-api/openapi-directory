package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Forecast {
    @JsonProperty("uv")
    public Double uv;
    public Forecast withUv(Double uv) {
        this.uv = uv;
        return this;
    }
    @JsonProperty("uv_time")
    public String uvTime;
    public Forecast withUvTime(String uvTime) {
        this.uvTime = uvTime;
        return this;
    }
}
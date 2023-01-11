package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UvIndexResult {
    @JsonProperty("from_time")
    public String fromTime;
    public UvIndexResult withFromTime(String fromTime) {
        this.fromTime = fromTime;
        return this;
    }
    @JsonProperty("from_uv")
    public Double fromUv;
    public UvIndexResult withFromUv(Double fromUv) {
        this.fromUv = fromUv;
        return this;
    }
    @JsonProperty("to_time")
    public String toTime;
    public UvIndexResult withToTime(String toTime) {
        this.toTime = toTime;
        return this;
    }
    @JsonProperty("to_uv")
    public Double toUv;
    public UvIndexResult withToUv(Double toUv) {
        this.toUv = toUv;
        return this;
    }
}
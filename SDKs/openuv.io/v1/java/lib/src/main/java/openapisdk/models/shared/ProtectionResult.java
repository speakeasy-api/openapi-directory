package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProtectionResult {
    @JsonProperty("ozone")
    public Double ozone;
    public ProtectionResult withOzone(Double ozone) {
        this.ozone = ozone;
        return this;
    }
    @JsonProperty("ozone_time")
    public String ozoneTime;
    public ProtectionResult withOzoneTime(String ozoneTime) {
        this.ozoneTime = ozoneTime;
        return this;
    }
    @JsonProperty("uv")
    public Double uv;
    public ProtectionResult withUv(Double uv) {
        this.uv = uv;
        return this;
    }
    @JsonProperty("uv_max")
    public Double uvMax;
    public ProtectionResult withUvMax(Double uvMax) {
        this.uvMax = uvMax;
        return this;
    }
    @JsonProperty("uv_max_time")
    public String uvMaxTime;
    public ProtectionResult withUvMaxTime(String uvMaxTime) {
        this.uvMaxTime = uvMaxTime;
        return this;
    }
    @JsonProperty("uv_time")
    public String uvTime;
    public ProtectionResult withUvTime(String uvTime) {
        this.uvTime = uvTime;
        return this;
    }
}
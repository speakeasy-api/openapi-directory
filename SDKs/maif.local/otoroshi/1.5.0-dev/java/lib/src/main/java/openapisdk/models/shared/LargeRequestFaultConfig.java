package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LargeRequestFaultConfig
 * Config for large request injection fault
**/
public class LargeRequestFaultConfig {
    @JsonProperty("additionalRequestSize")
    public Integer additionalRequestSize;
    public LargeRequestFaultConfig withAdditionalRequestSize(Integer additionalRequestSize) {
        this.additionalRequestSize = additionalRequestSize;
        return this;
    }
    @JsonProperty("ratio")
    public Double ratio;
    public LargeRequestFaultConfig withRatio(Double ratio) {
        this.ratio = ratio;
        return this;
    }
}
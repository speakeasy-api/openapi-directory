package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LargeResponseFaultConfig
 * Config for large response injection fault
**/
public class LargeResponseFaultConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRequestSize")
    public Integer additionalRequestSize;
    public LargeResponseFaultConfig withAdditionalRequestSize(Integer additionalRequestSize) {
        this.additionalRequestSize = additionalRequestSize;
        return this;
    }
    @JsonProperty("ratio")
    public Double ratio;
    public LargeResponseFaultConfig withRatio(Double ratio) {
        this.ratio = ratio;
        return this;
    }
}
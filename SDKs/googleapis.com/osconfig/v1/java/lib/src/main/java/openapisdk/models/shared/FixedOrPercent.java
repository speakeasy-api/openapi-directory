package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FixedOrPercent
 * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
**/
public class FixedOrPercent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixed")
    public Integer fixed;
    public FixedOrPercent withFixed(Integer fixed) {
        this.fixed = fixed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Integer percent;
    public FixedOrPercent withPercent(Integer percent) {
        this.percent = percent;
        return this;
    }
}
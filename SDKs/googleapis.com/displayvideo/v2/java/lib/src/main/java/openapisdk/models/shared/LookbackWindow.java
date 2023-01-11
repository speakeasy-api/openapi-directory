package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookbackWindow
 * Specifies how many days into the past to look when determining whether to record a conversion.
**/
public class LookbackWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickDays")
    public Integer clickDays;
    public LookbackWindow withClickDays(Integer clickDays) {
        this.clickDays = clickDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionDays")
    public Integer impressionDays;
    public LookbackWindow withImpressionDays(Integer impressionDays) {
        this.impressionDays = impressionDays;
        return this;
    }
}
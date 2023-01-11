package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomViewabilityMetricConfiguration
 * The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
**/
public class CustomViewabilityMetricConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audible")
    public Boolean audible;
    public CustomViewabilityMetricConfiguration withAudible(Boolean audible) {
        this.audible = audible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeMillis")
    public Integer timeMillis;
    public CustomViewabilityMetricConfiguration withTimeMillis(Integer timeMillis) {
        this.timeMillis = timeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timePercent")
    public Integer timePercent;
    public CustomViewabilityMetricConfiguration withTimePercent(Integer timePercent) {
        this.timePercent = timePercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewabilityPercent")
    public Integer viewabilityPercent;
    public CustomViewabilityMetricConfiguration withViewabilityPercent(Integer viewabilityPercent) {
        this.viewabilityPercent = viewabilityPercent;
        return this;
    }
}
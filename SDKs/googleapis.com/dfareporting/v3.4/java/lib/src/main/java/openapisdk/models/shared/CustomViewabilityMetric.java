package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomViewabilityMetric
 * Custom Viewability Metric
**/
public class CustomViewabilityMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public CustomViewabilityMetricConfiguration configuration;
    public CustomViewabilityMetric withConfiguration(CustomViewabilityMetricConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CustomViewabilityMetric withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomViewabilityMetric withName(String name) {
        this.name = name;
        return this;
    }
}
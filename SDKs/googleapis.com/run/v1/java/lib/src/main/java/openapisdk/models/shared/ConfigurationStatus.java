package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigurationStatus
 * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
**/
public class ConfigurationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;
    public ConfigurationStatus withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCreatedRevisionName")
    public String latestCreatedRevisionName;
    public ConfigurationStatus withLatestCreatedRevisionName(String latestCreatedRevisionName) {
        this.latestCreatedRevisionName = latestCreatedRevisionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestReadyRevisionName")
    public String latestReadyRevisionName;
    public ConfigurationStatus withLatestReadyRevisionName(String latestReadyRevisionName) {
        this.latestReadyRevisionName = latestReadyRevisionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;
    public ConfigurationStatus withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
}
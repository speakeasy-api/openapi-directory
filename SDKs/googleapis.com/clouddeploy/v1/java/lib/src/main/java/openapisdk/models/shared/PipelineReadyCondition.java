package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineReadyCondition
 * PipelineReadyCondition contains information around the status of the Pipeline.
**/
public class PipelineReadyCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Boolean status;
    public PipelineReadyCondition withStatus(Boolean status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public PipelineReadyCondition withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}
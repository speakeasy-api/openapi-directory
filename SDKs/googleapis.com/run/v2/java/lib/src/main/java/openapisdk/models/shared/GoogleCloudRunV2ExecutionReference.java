package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ExecutionReference
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
**/
public class GoogleCloudRunV2ExecutionReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public String completionTime;
    public GoogleCloudRunV2ExecutionReference withCompletionTime(String completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudRunV2ExecutionReference withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2ExecutionReference withName(String name) {
        this.name = name;
        return this;
    }
}
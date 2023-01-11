package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Execution
 * The definition of a single executed notebook.
**/
public class Execution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Execution withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Execution withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Execution withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionTemplate")
    public ExecutionTemplate executionTemplate;
    public Execution withExecutionTemplate(ExecutionTemplate executionTemplate) {
        this.executionTemplate = executionTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobUri")
    public String jobUri;
    public Execution withJobUri(String jobUri) {
        this.jobUri = jobUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Execution withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputNotebookFile")
    public String outputNotebookFile;
    public Execution withOutputNotebookFile(String outputNotebookFile) {
        this.outputNotebookFile = outputNotebookFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ExecutionStateEnum state;
    public Execution withState(ExecutionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Execution withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Job
 * Transcoding job resource.
**/
public class Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public JobConfig config;
    public Job withConfig(JobConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Job withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Job withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public Job withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUri")
    public String inputUri;
    public Job withInputUri(String inputUri) {
        this.inputUri = inputUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Job withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Job withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputUri")
    public String outputUri;
    public Job withOutputUri(String outputUri) {
        this.outputUri = outputUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Job withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public JobStateEnum state;
    public Job withState(JobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateId")
    public String templateId;
    public Job withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttlAfterCompletionDays")
    public Integer ttlAfterCompletionDays;
    public Job withTtlAfterCompletionDays(Integer ttlAfterCompletionDays) {
        this.ttlAfterCompletionDays = ttlAfterCompletionDays;
        return this;
    }
}
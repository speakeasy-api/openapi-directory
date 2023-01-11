package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutopilotV1AssistantTaskTaskStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public AutopilotV1AssistantTaskTaskStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistant_sid")
    public String assistantSid;
    public AutopilotV1AssistantTaskTaskStatistics withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields_count")
    public Long fieldsCount;
    public AutopilotV1AssistantTaskTaskStatistics withFieldsCount(Long fieldsCount) {
        this.fieldsCount = fieldsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samples_count")
    public Long samplesCount;
    public AutopilotV1AssistantTaskTaskStatistics withSamplesCount(Long samplesCount) {
        this.samplesCount = samplesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_sid")
    public String taskSid;
    public AutopilotV1AssistantTaskTaskStatistics withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AutopilotV1AssistantTaskTaskStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
}
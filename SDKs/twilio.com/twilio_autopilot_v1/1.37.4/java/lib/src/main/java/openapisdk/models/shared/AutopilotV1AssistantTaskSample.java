package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AutopilotV1AssistantTaskSample {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public AutopilotV1AssistantTaskSample withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistant_sid")
    public String assistantSid;
    public AutopilotV1AssistantTaskSample withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public AutopilotV1AssistantTaskSample withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public AutopilotV1AssistantTaskSample withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public AutopilotV1AssistantTaskSample withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public AutopilotV1AssistantTaskSample withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_channel")
    public String sourceChannel;
    public AutopilotV1AssistantTaskSample withSourceChannel(String sourceChannel) {
        this.sourceChannel = sourceChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagged_text")
    public String taggedText;
    public AutopilotV1AssistantTaskSample withTaggedText(String taggedText) {
        this.taggedText = taggedText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_sid")
    public String taskSid;
    public AutopilotV1AssistantTaskSample withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AutopilotV1AssistantTaskSample withUrl(String url) {
        this.url = url;
        return this;
    }
}
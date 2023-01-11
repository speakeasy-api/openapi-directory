package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PreviewUnderstandAssistantQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public PreviewUnderstandAssistantQuery withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistant_sid")
    public String assistantSid;
    public PreviewUnderstandAssistantQuery withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public PreviewUnderstandAssistantQuery withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public PreviewUnderstandAssistantQuery withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public PreviewUnderstandAssistantQuery withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model_build_sid")
    public String modelBuildSid;
    public PreviewUnderstandAssistantQuery withModelBuildSid(String modelBuildSid) {
        this.modelBuildSid = modelBuildSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public PreviewUnderstandAssistantQuery withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Object results;
    public PreviewUnderstandAssistantQuery withResults(Object results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sample_sid")
    public String sampleSid;
    public PreviewUnderstandAssistantQuery withSampleSid(String sampleSid) {
        this.sampleSid = sampleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public PreviewUnderstandAssistantQuery withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_channel")
    public String sourceChannel;
    public PreviewUnderstandAssistantQuery withSourceChannel(String sourceChannel) {
        this.sourceChannel = sourceChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PreviewUnderstandAssistantQuery withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PreviewUnderstandAssistantQuery withUrl(String url) {
        this.url = url;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StudioV2FlowFlowRevision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public StudioV2FlowFlowRevision withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_message")
    public String commitMessage;
    public StudioV2FlowFlowRevision withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public StudioV2FlowFlowRevision withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public StudioV2FlowFlowRevision withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public Object definition;
    public StudioV2FlowFlowRevision withDefinition(Object definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Object[] errors;
    public StudioV2FlowFlowRevision withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public StudioV2FlowFlowRevision withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Long revision;
    public StudioV2FlowFlowRevision withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public StudioV2FlowFlowRevision withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public FlowRevisionEnumStatusEnum status;
    public StudioV2FlowFlowRevision withStatus(FlowRevisionEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public StudioV2FlowFlowRevision withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid")
    public Boolean valid;
    public StudioV2FlowFlowRevision withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}
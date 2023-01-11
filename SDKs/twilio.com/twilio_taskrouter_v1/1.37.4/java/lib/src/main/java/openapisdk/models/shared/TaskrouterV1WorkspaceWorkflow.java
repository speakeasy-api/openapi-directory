package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1WorkspaceWorkflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkflow withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment_callback_url")
    public String assignmentCallbackUrl;
    public TaskrouterV1WorkspaceWorkflow withAssignmentCallbackUrl(String assignmentCallbackUrl) {
        this.assignmentCallbackUrl = assignmentCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public String configuration;
    public TaskrouterV1WorkspaceWorkflow withConfiguration(String configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TaskrouterV1WorkspaceWorkflow withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public TaskrouterV1WorkspaceWorkflow withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_content_type")
    public String documentContentType;
    public TaskrouterV1WorkspaceWorkflow withDocumentContentType(String documentContentType) {
        this.documentContentType = documentContentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallback_assignment_callback_url")
    public String fallbackAssignmentCallbackUrl;
    public TaskrouterV1WorkspaceWorkflow withFallbackAssignmentCallbackUrl(String fallbackAssignmentCallbackUrl) {
        this.fallbackAssignmentCallbackUrl = fallbackAssignmentCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public TaskrouterV1WorkspaceWorkflow withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public TaskrouterV1WorkspaceWorkflow withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TaskrouterV1WorkspaceWorkflow withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_reservation_timeout")
    public Long taskReservationTimeout;
    public TaskrouterV1WorkspaceWorkflow withTaskReservationTimeout(Long taskReservationTimeout) {
        this.taskReservationTimeout = taskReservationTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkflow withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkflow withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}
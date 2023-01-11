package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1WorkspaceEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceEvent withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor_sid")
    public String actorSid;
    public TaskrouterV1WorkspaceEvent withActorSid(String actorSid) {
        this.actorSid = actorSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor_type")
    public String actorType;
    public TaskrouterV1WorkspaceEvent withActorType(String actorType) {
        this.actorType = actorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor_url")
    public String actorUrl;
    public TaskrouterV1WorkspaceEvent withActorUrl(String actorUrl) {
        this.actorUrl = actorUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TaskrouterV1WorkspaceEvent withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_data")
    public Object eventData;
    public TaskrouterV1WorkspaceEvent withEventData(Object eventData) {
        this.eventData = eventData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("event_date")
    public OffsetDateTime eventDate;
    public TaskrouterV1WorkspaceEvent withEventDate(OffsetDateTime eventDate) {
        this.eventDate = eventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_date_ms")
    public Long eventDateMs;
    public TaskrouterV1WorkspaceEvent withEventDateMs(Long eventDateMs) {
        this.eventDateMs = eventDateMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_type")
    public String eventType;
    public TaskrouterV1WorkspaceEvent withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_sid")
    public String resourceSid;
    public TaskrouterV1WorkspaceEvent withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TaskrouterV1WorkspaceEvent withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_url")
    public String resourceUrl;
    public TaskrouterV1WorkspaceEvent withResourceUrl(String resourceUrl) {
        this.resourceUrl = resourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TaskrouterV1WorkspaceEvent withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public TaskrouterV1WorkspaceEvent withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ip_address")
    public String sourceIpAddress;
    public TaskrouterV1WorkspaceEvent withSourceIpAddress(String sourceIpAddress) {
        this.sourceIpAddress = sourceIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceEvent withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceEvent withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}
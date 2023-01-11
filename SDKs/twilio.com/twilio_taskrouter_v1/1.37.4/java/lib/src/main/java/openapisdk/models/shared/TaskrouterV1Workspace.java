package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TaskrouterV1Workspace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1Workspace withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TaskrouterV1Workspace withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public TaskrouterV1Workspace withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_activity_name")
    public String defaultActivityName;
    public TaskrouterV1Workspace withDefaultActivityName(String defaultActivityName) {
        this.defaultActivityName = defaultActivityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_activity_sid")
    public String defaultActivitySid;
    public TaskrouterV1Workspace withDefaultActivitySid(String defaultActivitySid) {
        this.defaultActivitySid = defaultActivitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_callback_url")
    public String eventCallbackUrl;
    public TaskrouterV1Workspace withEventCallbackUrl(String eventCallbackUrl) {
        this.eventCallbackUrl = eventCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events_filter")
    public String eventsFilter;
    public TaskrouterV1Workspace withEventsFilter(String eventsFilter) {
        this.eventsFilter = eventsFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public TaskrouterV1Workspace withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public TaskrouterV1Workspace withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multi_task_enabled")
    public Boolean multiTaskEnabled;
    public TaskrouterV1Workspace withMultiTaskEnabled(Boolean multiTaskEnabled) {
        this.multiTaskEnabled = multiTaskEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prioritize_queue_order")
    public WorkspaceEnumQueueOrderEnum prioritizeQueueOrder;
    public TaskrouterV1Workspace withPrioritizeQueueOrder(WorkspaceEnumQueueOrderEnum prioritizeQueueOrder) {
        this.prioritizeQueueOrder = prioritizeQueueOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TaskrouterV1Workspace withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout_activity_name")
    public String timeoutActivityName;
    public TaskrouterV1Workspace withTimeoutActivityName(String timeoutActivityName) {
        this.timeoutActivityName = timeoutActivityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout_activity_sid")
    public String timeoutActivitySid;
    public TaskrouterV1Workspace withTimeoutActivitySid(String timeoutActivitySid) {
        this.timeoutActivitySid = timeoutActivitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1Workspace withUrl(String url) {
        this.url = url;
        return this;
    }
}
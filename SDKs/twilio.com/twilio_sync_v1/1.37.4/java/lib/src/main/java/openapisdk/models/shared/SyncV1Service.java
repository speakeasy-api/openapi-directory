package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SyncV1Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public SyncV1Service withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acl_enabled")
    public Boolean aclEnabled;
    public SyncV1Service withAclEnabled(Boolean aclEnabled) {
        this.aclEnabled = aclEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public SyncV1Service withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public SyncV1Service withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public SyncV1Service withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public SyncV1Service withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachability_debouncing_enabled")
    public Boolean reachabilityDebouncingEnabled;
    public SyncV1Service withReachabilityDebouncingEnabled(Boolean reachabilityDebouncingEnabled) {
        this.reachabilityDebouncingEnabled = reachabilityDebouncingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachability_debouncing_window")
    public Long reachabilityDebouncingWindow;
    public SyncV1Service withReachabilityDebouncingWindow(Long reachabilityDebouncingWindow) {
        this.reachabilityDebouncingWindow = reachabilityDebouncingWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachability_webhooks_enabled")
    public Boolean reachabilityWebhooksEnabled;
    public SyncV1Service withReachabilityWebhooksEnabled(Boolean reachabilityWebhooksEnabled) {
        this.reachabilityWebhooksEnabled = reachabilityWebhooksEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public SyncV1Service withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public SyncV1Service withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SyncV1Service withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_url")
    public String webhookUrl;
    public SyncV1Service withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks_from_rest_enabled")
    public Boolean webhooksFromRestEnabled;
    public SyncV1Service withWebhooksFromRestEnabled(Boolean webhooksFromRestEnabled) {
        this.webhooksFromRestEnabled = webhooksFromRestEnabled;
        return this;
    }
}
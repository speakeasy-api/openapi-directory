package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ChatV2Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ChatV2Service withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumption_report_interval")
    public Long consumptionReportInterval;
    public ChatV2Service withConsumptionReportInterval(Long consumptionReportInterval) {
        this.consumptionReportInterval = consumptionReportInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ChatV2Service withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ChatV2Service withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_channel_creator_role_sid")
    public String defaultChannelCreatorRoleSid;
    public ChatV2Service withDefaultChannelCreatorRoleSid(String defaultChannelCreatorRoleSid) {
        this.defaultChannelCreatorRoleSid = defaultChannelCreatorRoleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_channel_role_sid")
    public String defaultChannelRoleSid;
    public ChatV2Service withDefaultChannelRoleSid(String defaultChannelRoleSid) {
        this.defaultChannelRoleSid = defaultChannelRoleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_service_role_sid")
    public String defaultServiceRoleSid;
    public ChatV2Service withDefaultServiceRoleSid(String defaultServiceRoleSid) {
        this.defaultServiceRoleSid = defaultServiceRoleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ChatV2Service withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limits")
    public Object limits;
    public ChatV2Service withLimits(Object limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ChatV2Service withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public Object media;
    public ChatV2Service withMedia(Object media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public Object notifications;
    public ChatV2Service withNotifications(Object notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_webhook_retry_count")
    public Long postWebhookRetryCount;
    public ChatV2Service withPostWebhookRetryCount(Long postWebhookRetryCount) {
        this.postWebhookRetryCount = postWebhookRetryCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_webhook_url")
    public String postWebhookUrl;
    public ChatV2Service withPostWebhookUrl(String postWebhookUrl) {
        this.postWebhookUrl = postWebhookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pre_webhook_retry_count")
    public Long preWebhookRetryCount;
    public ChatV2Service withPreWebhookRetryCount(Long preWebhookRetryCount) {
        this.preWebhookRetryCount = preWebhookRetryCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pre_webhook_url")
    public String preWebhookUrl;
    public ChatV2Service withPreWebhookUrl(String preWebhookUrl) {
        this.preWebhookUrl = preWebhookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachability_enabled")
    public Boolean reachabilityEnabled;
    public ChatV2Service withReachabilityEnabled(Boolean reachabilityEnabled) {
        this.reachabilityEnabled = reachabilityEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read_status_enabled")
    public Boolean readStatusEnabled;
    public ChatV2Service withReadStatusEnabled(Boolean readStatusEnabled) {
        this.readStatusEnabled = readStatusEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ChatV2Service withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typing_indicator_timeout")
    public Long typingIndicatorTimeout;
    public ChatV2Service withTypingIndicatorTimeout(Long typingIndicatorTimeout) {
        this.typingIndicatorTimeout = typingIndicatorTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ChatV2Service withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_filters")
    public String[] webhookFilters;
    public ChatV2Service withWebhookFilters(String[] webhookFilters) {
        this.webhookFilters = webhookFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_method")
    public String webhookMethod;
    public ChatV2Service withWebhookMethod(String webhookMethod) {
        this.webhookMethod = webhookMethod;
        return this;
    }
}
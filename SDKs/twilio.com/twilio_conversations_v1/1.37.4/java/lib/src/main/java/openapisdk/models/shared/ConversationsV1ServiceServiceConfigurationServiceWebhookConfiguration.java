package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_sid")
    public String chatServiceSid;
    public ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public String[] filters;
    public ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration withFilters(String[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public ServiceWebhookConfigurationEnumMethodEnum method;
    public ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration withMethod(ServiceWebhookConfigurationEnumMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_webhook_url")
    public String postWebhookUrl;
    public ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration withPostWebhookUrl(String postWebhookUrl) {
        this.postWebhookUrl = postWebhookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pre_webhook_url")
    public String preWebhookUrl;
    public ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration withPreWebhookUrl(String preWebhookUrl) {
        this.preWebhookUrl = preWebhookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration withUrl(String url) {
        this.url = url;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationsV1ConfigurationConfigurationWebhook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1ConfigurationConfigurationWebhook withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public String[] filters;
    public ConversationsV1ConfigurationConfigurationWebhook withFilters(String[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public ConfigurationWebhookEnumMethodEnum method;
    public ConversationsV1ConfigurationConfigurationWebhook withMethod(ConfigurationWebhookEnumMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_webhook_url")
    public String postWebhookUrl;
    public ConversationsV1ConfigurationConfigurationWebhook withPostWebhookUrl(String postWebhookUrl) {
        this.postWebhookUrl = postWebhookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pre_webhook_url")
    public String preWebhookUrl;
    public ConversationsV1ConfigurationConfigurationWebhook withPreWebhookUrl(String preWebhookUrl) {
        this.preWebhookUrl = preWebhookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public ConfigurationWebhookEnumTargetEnum target;
    public ConversationsV1ConfigurationConfigurationWebhook withTarget(ConfigurationWebhookEnumTargetEnum target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1ConfigurationConfigurationWebhook withUrl(String url) {
        this.url = url;
        return this;
    }
}
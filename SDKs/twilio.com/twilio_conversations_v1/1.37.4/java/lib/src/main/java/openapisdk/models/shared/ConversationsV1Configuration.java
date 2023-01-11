package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationsV1Configuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1Configuration withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_chat_service_sid")
    public String defaultChatServiceSid;
    public ConversationsV1Configuration withDefaultChatServiceSid(String defaultChatServiceSid) {
        this.defaultChatServiceSid = defaultChatServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_closed_timer")
    public String defaultClosedTimer;
    public ConversationsV1Configuration withDefaultClosedTimer(String defaultClosedTimer) {
        this.defaultClosedTimer = defaultClosedTimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_inactive_timer")
    public String defaultInactiveTimer;
    public ConversationsV1Configuration withDefaultInactiveTimer(String defaultInactiveTimer) {
        this.defaultInactiveTimer = defaultInactiveTimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_messaging_service_sid")
    public String defaultMessagingServiceSid;
    public ConversationsV1Configuration withDefaultMessagingServiceSid(String defaultMessagingServiceSid) {
        this.defaultMessagingServiceSid = defaultMessagingServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ConversationsV1Configuration withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1Configuration withUrl(String url) {
        this.url = url;
        return this;
    }
}
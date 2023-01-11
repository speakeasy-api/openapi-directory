package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationsV1ServiceServiceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_sid")
    public String chatServiceSid;
    public ConversationsV1ServiceServiceConfiguration withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_chat_service_role_sid")
    public String defaultChatServiceRoleSid;
    public ConversationsV1ServiceServiceConfiguration withDefaultChatServiceRoleSid(String defaultChatServiceRoleSid) {
        this.defaultChatServiceRoleSid = defaultChatServiceRoleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_conversation_creator_role_sid")
    public String defaultConversationCreatorRoleSid;
    public ConversationsV1ServiceServiceConfiguration withDefaultConversationCreatorRoleSid(String defaultConversationCreatorRoleSid) {
        this.defaultConversationCreatorRoleSid = defaultConversationCreatorRoleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_conversation_role_sid")
    public String defaultConversationRoleSid;
    public ConversationsV1ServiceServiceConfiguration withDefaultConversationRoleSid(String defaultConversationRoleSid) {
        this.defaultConversationRoleSid = defaultConversationRoleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ConversationsV1ServiceServiceConfiguration withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachability_enabled")
    public Boolean reachabilityEnabled;
    public ConversationsV1ServiceServiceConfiguration withReachabilityEnabled(Boolean reachabilityEnabled) {
        this.reachabilityEnabled = reachabilityEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1ServiceServiceConfiguration withUrl(String url) {
        this.url = url;
        return this;
    }
}
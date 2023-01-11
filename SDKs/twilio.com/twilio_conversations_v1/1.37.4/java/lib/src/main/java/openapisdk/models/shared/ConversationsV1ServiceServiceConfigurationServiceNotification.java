package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationsV1ServiceServiceConfigurationServiceNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1ServiceServiceConfigurationServiceNotification withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_to_conversation")
    public Object addedToConversation;
    public ConversationsV1ServiceServiceConfigurationServiceNotification withAddedToConversation(Object addedToConversation) {
        this.addedToConversation = addedToConversation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_sid")
    public String chatServiceSid;
    public ConversationsV1ServiceServiceConfigurationServiceNotification withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log_enabled")
    public Boolean logEnabled;
    public ConversationsV1ServiceServiceConfigurationServiceNotification withLogEnabled(Boolean logEnabled) {
        this.logEnabled = logEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_message")
    public Object newMessage;
    public ConversationsV1ServiceServiceConfigurationServiceNotification withNewMessage(Object newMessage) {
        this.newMessage = newMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removed_from_conversation")
    public Object removedFromConversation;
    public ConversationsV1ServiceServiceConfigurationServiceNotification withRemovedFromConversation(Object removedFromConversation) {
        this.removedFromConversation = removedFromConversation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1ServiceServiceConfigurationServiceNotification withUrl(String url) {
        this.url = url;
        return this;
    }
}
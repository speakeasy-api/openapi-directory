package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ConversationsV1ServiceServiceUserServiceUserConversation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1ServiceServiceUserServiceUserConversation withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public String attributes;
    public ConversationsV1ServiceServiceUserServiceUserConversation withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_sid")
    public String chatServiceSid;
    public ConversationsV1ServiceServiceUserServiceUserConversation withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_sid")
    public String conversationSid;
    public ConversationsV1ServiceServiceUserServiceUserConversation withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_state")
    public ServiceUserConversationEnumStateEnum conversationState;
    public ConversationsV1ServiceServiceUserServiceUserConversation withConversationState(ServiceUserConversationEnumStateEnum conversationState) {
        this.conversationState = conversationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public ConversationsV1ServiceServiceUserServiceUserConversation withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ConversationsV1ServiceServiceUserServiceUserConversation withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ConversationsV1ServiceServiceUserServiceUserConversation withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ConversationsV1ServiceServiceUserServiceUserConversation withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_read_message_index")
    public Long lastReadMessageIndex;
    public ConversationsV1ServiceServiceUserServiceUserConversation withLastReadMessageIndex(Long lastReadMessageIndex) {
        this.lastReadMessageIndex = lastReadMessageIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ConversationsV1ServiceServiceUserServiceUserConversation withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification_level")
    public ServiceUserConversationEnumNotificationLevelEnum notificationLevel;
    public ConversationsV1ServiceServiceUserServiceUserConversation withNotificationLevel(ServiceUserConversationEnumNotificationLevelEnum notificationLevel) {
        this.notificationLevel = notificationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_sid")
    public String participantSid;
    public ConversationsV1ServiceServiceUserServiceUserConversation withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timers")
    public Object timers;
    public ConversationsV1ServiceServiceUserServiceUserConversation withTimers(Object timers) {
        this.timers = timers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public ConversationsV1ServiceServiceUserServiceUserConversation withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unread_messages_count")
    public Long unreadMessagesCount;
    public ConversationsV1ServiceServiceUserServiceUserConversation withUnreadMessagesCount(Long unreadMessagesCount) {
        this.unreadMessagesCount = unreadMessagesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1ServiceServiceUserServiceUserConversation withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_sid")
    public String userSid;
    public ConversationsV1ServiceServiceUserServiceUserConversation withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ConversationsV1UserUserConversation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1UserUserConversation withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public String attributes;
    public ConversationsV1UserUserConversation withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_sid")
    public String chatServiceSid;
    public ConversationsV1UserUserConversation withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_sid")
    public String conversationSid;
    public ConversationsV1UserUserConversation withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_state")
    public UserConversationEnumStateEnum conversationState;
    public ConversationsV1UserUserConversation withConversationState(UserConversationEnumStateEnum conversationState) {
        this.conversationState = conversationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public ConversationsV1UserUserConversation withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ConversationsV1UserUserConversation withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ConversationsV1UserUserConversation withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ConversationsV1UserUserConversation withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_read_message_index")
    public Long lastReadMessageIndex;
    public ConversationsV1UserUserConversation withLastReadMessageIndex(Long lastReadMessageIndex) {
        this.lastReadMessageIndex = lastReadMessageIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ConversationsV1UserUserConversation withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification_level")
    public UserConversationEnumNotificationLevelEnum notificationLevel;
    public ConversationsV1UserUserConversation withNotificationLevel(UserConversationEnumNotificationLevelEnum notificationLevel) {
        this.notificationLevel = notificationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_sid")
    public String participantSid;
    public ConversationsV1UserUserConversation withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timers")
    public Object timers;
    public ConversationsV1UserUserConversation withTimers(Object timers) {
        this.timers = timers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public ConversationsV1UserUserConversation withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unread_messages_count")
    public Long unreadMessagesCount;
    public ConversationsV1UserUserConversation withUnreadMessagesCount(Long unreadMessagesCount) {
        this.unreadMessagesCount = unreadMessagesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1UserUserConversation withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_sid")
    public String userSid;
    public ConversationsV1UserUserConversation withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}
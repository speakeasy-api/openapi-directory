package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ConversationsV1ParticipantConversation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1ParticipantConversation withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_sid")
    public String chatServiceSid;
    public ConversationsV1ParticipantConversation withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_attributes")
    public String conversationAttributes;
    public ConversationsV1ParticipantConversation withConversationAttributes(String conversationAttributes) {
        this.conversationAttributes = conversationAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_created_by")
    public String conversationCreatedBy;
    public ConversationsV1ParticipantConversation withConversationCreatedBy(String conversationCreatedBy) {
        this.conversationCreatedBy = conversationCreatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("conversation_date_created")
    public OffsetDateTime conversationDateCreated;
    public ConversationsV1ParticipantConversation withConversationDateCreated(OffsetDateTime conversationDateCreated) {
        this.conversationDateCreated = conversationDateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("conversation_date_updated")
    public OffsetDateTime conversationDateUpdated;
    public ConversationsV1ParticipantConversation withConversationDateUpdated(OffsetDateTime conversationDateUpdated) {
        this.conversationDateUpdated = conversationDateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_friendly_name")
    public String conversationFriendlyName;
    public ConversationsV1ParticipantConversation withConversationFriendlyName(String conversationFriendlyName) {
        this.conversationFriendlyName = conversationFriendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_sid")
    public String conversationSid;
    public ConversationsV1ParticipantConversation withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_state")
    public ParticipantConversationEnumStateEnum conversationState;
    public ConversationsV1ParticipantConversation withConversationState(ParticipantConversationEnumStateEnum conversationState) {
        this.conversationState = conversationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_timers")
    public Object conversationTimers;
    public ConversationsV1ParticipantConversation withConversationTimers(Object conversationTimers) {
        this.conversationTimers = conversationTimers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_unique_name")
    public String conversationUniqueName;
    public ConversationsV1ParticipantConversation withConversationUniqueName(String conversationUniqueName) {
        this.conversationUniqueName = conversationUniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ConversationsV1ParticipantConversation withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_identity")
    public String participantIdentity;
    public ConversationsV1ParticipantConversation withParticipantIdentity(String participantIdentity) {
        this.participantIdentity = participantIdentity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_messaging_binding")
    public Object participantMessagingBinding;
    public ConversationsV1ParticipantConversation withParticipantMessagingBinding(Object participantMessagingBinding) {
        this.participantMessagingBinding = participantMessagingBinding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_sid")
    public String participantSid;
    public ConversationsV1ParticipantConversation withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_user_sid")
    public String participantUserSid;
    public ConversationsV1ParticipantConversation withParticipantUserSid(String participantUserSid) {
        this.participantUserSid = participantUserSid;
        return this;
    }
}
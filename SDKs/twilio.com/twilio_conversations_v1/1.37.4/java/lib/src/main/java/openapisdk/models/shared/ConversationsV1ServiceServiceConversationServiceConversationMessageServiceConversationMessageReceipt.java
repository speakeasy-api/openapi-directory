package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel_message_sid")
    public String channelMessageSid;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withChannelMessageSid(String channelMessageSid) {
        this.channelMessageSid = channelMessageSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_sid")
    public String chatServiceSid;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_sid")
    public String conversationSid;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public Long errorCode;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withErrorCode(Long errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_sid")
    public String messageSid;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_sid")
    public String participantSid;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ServiceConversationMessageReceiptEnumDeliveryStatusEnum status;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withStatus(ServiceConversationMessageReceiptEnumDeliveryStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt withUrl(String url) {
        this.url = url;
        return this;
    }
}
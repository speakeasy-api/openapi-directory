package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ConversationsV1ConversationConversationMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ConversationsV1ConversationConversationMessage withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public String attributes;
    public ConversationsV1ConversationConversationMessage withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public ConversationsV1ConversationConversationMessage withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public ConversationsV1ConversationConversationMessage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_sid")
    public String conversationSid;
    public ConversationsV1ConversationConversationMessage withConversationSid(String conversationSid) {
        this.conversationSid = conversationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ConversationsV1ConversationConversationMessage withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ConversationsV1ConversationConversationMessage withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery")
    public Object delivery;
    public ConversationsV1ConversationConversationMessage withDelivery(Object delivery) {
        this.delivery = delivery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;
    public ConversationsV1ConversationConversationMessage withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ConversationsV1ConversationConversationMessage withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public Object[] media;
    public ConversationsV1ConversationConversationMessage withMedia(Object[] media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participant_sid")
    public String participantSid;
    public ConversationsV1ConversationConversationMessage withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ConversationsV1ConversationConversationMessage withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ConversationsV1ConversationConversationMessage withUrl(String url) {
        this.url = url;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SuperChatEventSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountMicros")
    public String amountMicros;
    public SuperChatEventSnippet withAmountMicros(String amountMicros) {
        this.amountMicros = amountMicros;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public SuperChatEventSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentText")
    public String commentText;
    public SuperChatEventSnippet withCommentText(String commentText) {
        this.commentText = commentText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public SuperChatEventSnippet withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public SuperChatEventSnippet withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayString")
    public String displayString;
    public SuperChatEventSnippet withDisplayString(String displayString) {
        this.displayString = displayString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSuperStickerEvent")
    public Boolean isSuperStickerEvent;
    public SuperChatEventSnippet withIsSuperStickerEvent(Boolean isSuperStickerEvent) {
        this.isSuperStickerEvent = isSuperStickerEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageType")
    public Long messageType;
    public SuperChatEventSnippet withMessageType(Long messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("superStickerMetadata")
    public SuperStickerMetadata superStickerMetadata;
    public SuperChatEventSnippet withSuperStickerMetadata(SuperStickerMetadata superStickerMetadata) {
        this.superStickerMetadata = superStickerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supporterDetails")
    public ChannelProfileDetails supporterDetails;
    public SuperChatEventSnippet withSupporterDetails(ChannelProfileDetails supporterDetails) {
        this.supporterDetails = supporterDetails;
        return this;
    }
}
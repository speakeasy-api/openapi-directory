package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody2Video {
    @JsonProperty("channel")
    public SendMessageRequestBody2VideoChannelEnum channel;
    public SendMessageRequestBody2Video withChannel(SendMessageRequestBody2VideoChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody2Video withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody2Video withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody2VideoMessageTypeEnum messageType;
    public SendMessageRequestBody2Video withMessageType(SendMessageRequestBody2VideoMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody2Video withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("video")
    public Object video;
    public SendMessageRequestBody2Video withVideo(Object video) {
        this.video = video;
        return this;
    }
}
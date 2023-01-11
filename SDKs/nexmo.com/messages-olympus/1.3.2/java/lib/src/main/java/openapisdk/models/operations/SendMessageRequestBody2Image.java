package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody2Image {
    @JsonProperty("channel")
    public SendMessageRequestBody2ImageChannelEnum channel;
    public SendMessageRequestBody2Image withChannel(SendMessageRequestBody2ImageChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody2Image withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody2Image withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("image")
    public Object image;
    public SendMessageRequestBody2Image withImage(Object image) {
        this.image = image;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody2ImageMessageTypeEnum messageType;
    public SendMessageRequestBody2Image withMessageType(SendMessageRequestBody2ImageMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody2Image withTo(String to) {
        this.to = to;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3Image {
    @JsonProperty("channel")
    public SendMessageRequestBody3ImageChannelEnum channel;
    public SendMessageRequestBody3Image withChannel(SendMessageRequestBody3ImageChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody3Image withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody3Image withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("image")
    public Object image;
    public SendMessageRequestBody3Image withImage(Object image) {
        this.image = image;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody3ImageMessageTypeEnum messageType;
    public SendMessageRequestBody3Image withMessageType(SendMessageRequestBody3ImageMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody3Image withTo(String to) {
        this.to = to;
        return this;
    }
}
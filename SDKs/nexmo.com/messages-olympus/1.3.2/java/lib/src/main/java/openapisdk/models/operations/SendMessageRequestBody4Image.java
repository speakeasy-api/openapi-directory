package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4Image {
    @JsonProperty("channel")
    public SendMessageRequestBody4ImageChannelEnum channel;
    public SendMessageRequestBody4Image withChannel(SendMessageRequestBody4ImageChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody4Image withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody4Image withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("image")
    public Object image;
    public SendMessageRequestBody4Image withImage(Object image) {
        this.image = image;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody4ImageMessageTypeEnum messageType;
    public SendMessageRequestBody4Image withMessageType(SendMessageRequestBody4ImageMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messenger")
    public SendMessageRequestBody4ImageMessenger messenger;
    public SendMessageRequestBody4Image withMessenger(SendMessageRequestBody4ImageMessenger messenger) {
        this.messenger = messenger;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody4Image withTo(String to) {
        this.to = to;
        return this;
    }
}
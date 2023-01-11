package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody5Image {
    @JsonProperty("channel")
    public SendMessageRequestBody5ImageChannelEnum channel;
    public SendMessageRequestBody5Image withChannel(SendMessageRequestBody5ImageChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody5Image withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody5Image withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("image")
    public Object image;
    public SendMessageRequestBody5Image withImage(Object image) {
        this.image = image;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody5ImageMessageTypeEnum messageType;
    public SendMessageRequestBody5Image withMessageType(SendMessageRequestBody5ImageMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody5Image withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viber_service")
    public SendMessageRequestBody5ImageViberService viberService;
    public SendMessageRequestBody5Image withViberService(SendMessageRequestBody5ImageViberService viberService) {
        this.viberService = viberService;
        return this;
    }
}
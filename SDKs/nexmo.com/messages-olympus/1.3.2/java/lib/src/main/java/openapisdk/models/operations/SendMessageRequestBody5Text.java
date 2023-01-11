package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendMessageRequestBody5Text
 * The text of message to send.
**/
public class SendMessageRequestBody5Text {
    @JsonProperty("channel")
    public SendMessageRequestBody5TextChannelEnum channel;
    public SendMessageRequestBody5Text withChannel(SendMessageRequestBody5TextChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody5Text withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody5Text withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody5TextMessageTypeEnum messageType;
    public SendMessageRequestBody5Text withMessageType(SendMessageRequestBody5TextMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("text")
    public Object text;
    public SendMessageRequestBody5Text withText(Object text) {
        this.text = text;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody5Text withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viber_service")
    public SendMessageRequestBody5TextViberService viberService;
    public SendMessageRequestBody5Text withViberService(SendMessageRequestBody5TextViberService viberService) {
        this.viberService = viberService;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendMessageRequestBody4Text
 * The text of message to send.
**/
public class SendMessageRequestBody4Text {
    @JsonProperty("channel")
    public SendMessageRequestBody4TextChannelEnum channel;
    public SendMessageRequestBody4Text withChannel(SendMessageRequestBody4TextChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody4Text withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody4Text withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody4TextMessageTypeEnum messageType;
    public SendMessageRequestBody4Text withMessageType(SendMessageRequestBody4TextMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messenger")
    public SendMessageRequestBody4TextMessenger messenger;
    public SendMessageRequestBody4Text withMessenger(SendMessageRequestBody4TextMessenger messenger) {
        this.messenger = messenger;
        return this;
    }
    @JsonProperty("text")
    public Object text;
    public SendMessageRequestBody4Text withText(Object text) {
        this.text = text;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody4Text withTo(String to) {
        this.to = to;
        return this;
    }
}
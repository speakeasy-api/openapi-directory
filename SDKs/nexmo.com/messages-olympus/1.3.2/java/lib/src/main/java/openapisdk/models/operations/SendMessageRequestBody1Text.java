package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendMessageRequestBody1Text
 * The text of message to send.
**/
public class SendMessageRequestBody1Text {
    @JsonProperty("channel")
    public SendMessageRequestBody1TextChannelEnum channel;
    public SendMessageRequestBody1Text withChannel(SendMessageRequestBody1TextChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody1Text withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody1Text withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody1TextMessageTypeEnum messageType;
    public SendMessageRequestBody1Text withMessageType(SendMessageRequestBody1TextMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("text")
    public Object text;
    public SendMessageRequestBody1Text withText(Object text) {
        this.text = text;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody1Text withTo(String to) {
        this.to = to;
        return this;
    }
}
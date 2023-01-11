package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendMessageRequestBody3Text
 * The text of message to send.
**/
public class SendMessageRequestBody3Text {
    @JsonProperty("channel")
    public SendMessageRequestBody3TextChannelEnum channel;
    public SendMessageRequestBody3Text withChannel(SendMessageRequestBody3TextChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody3Text withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody3Text withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody3TextMessageTypeEnum messageType;
    public SendMessageRequestBody3Text withMessageType(SendMessageRequestBody3TextMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("text")
    public Object text;
    public SendMessageRequestBody3Text withText(Object text) {
        this.text = text;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody3Text withTo(String to) {
        this.to = to;
        return this;
    }
}
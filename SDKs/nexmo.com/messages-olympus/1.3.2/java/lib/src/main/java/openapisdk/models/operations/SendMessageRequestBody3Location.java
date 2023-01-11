package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3Location {
    @JsonProperty("channel")
    public SendMessageRequestBody3LocationChannelEnum channel;
    public SendMessageRequestBody3Location withChannel(SendMessageRequestBody3LocationChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody3Location withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody3Location withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("location")
    public SendMessageRequestBody3LocationLocation location;
    public SendMessageRequestBody3Location withLocation(SendMessageRequestBody3LocationLocation location) {
        this.location = location;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody3LocationMessageTypeEnum messageType;
    public SendMessageRequestBody3Location withMessageType(SendMessageRequestBody3LocationMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public Object text;
    public SendMessageRequestBody3Location withText(Object text) {
        this.text = text;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody3Location withTo(String to) {
        this.to = to;
        return this;
    }
}
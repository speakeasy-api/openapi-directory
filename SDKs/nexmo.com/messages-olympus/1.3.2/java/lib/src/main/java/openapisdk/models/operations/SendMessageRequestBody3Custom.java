package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3Custom {
    @JsonProperty("channel")
    public SendMessageRequestBody3CustomChannelEnum channel;
    public SendMessageRequestBody3Custom withChannel(SendMessageRequestBody3CustomChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody3Custom withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public java.util.Map<String, Object> custom;
    public SendMessageRequestBody3Custom withCustom(java.util.Map<String, Object> custom) {
        this.custom = custom;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody3Custom withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody3CustomMessageTypeEnum messageType;
    public SendMessageRequestBody3Custom withMessageType(SendMessageRequestBody3CustomMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody3Custom withTo(String to) {
        this.to = to;
        return this;
    }
}
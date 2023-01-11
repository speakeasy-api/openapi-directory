package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody2Audio {
    @JsonProperty("audio")
    public Object audio;
    public SendMessageRequestBody2Audio withAudio(Object audio) {
        this.audio = audio;
        return this;
    }
    @JsonProperty("channel")
    public SendMessageRequestBody2AudioChannelEnum channel;
    public SendMessageRequestBody2Audio withChannel(SendMessageRequestBody2AudioChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody2Audio withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody2Audio withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody2AudioMessageTypeEnum messageType;
    public SendMessageRequestBody2Audio withMessageType(SendMessageRequestBody2AudioMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody2Audio withTo(String to) {
        this.to = to;
        return this;
    }
}
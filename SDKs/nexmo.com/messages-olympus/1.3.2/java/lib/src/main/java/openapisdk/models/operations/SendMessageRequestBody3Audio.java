package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3Audio {
    @JsonProperty("audio")
    public Object audio;
    public SendMessageRequestBody3Audio withAudio(Object audio) {
        this.audio = audio;
        return this;
    }
    @JsonProperty("channel")
    public SendMessageRequestBody3AudioChannelEnum channel;
    public SendMessageRequestBody3Audio withChannel(SendMessageRequestBody3AudioChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody3Audio withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody3Audio withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody3AudioMessageTypeEnum messageType;
    public SendMessageRequestBody3Audio withMessageType(SendMessageRequestBody3AudioMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody3Audio withTo(String to) {
        this.to = to;
        return this;
    }
}
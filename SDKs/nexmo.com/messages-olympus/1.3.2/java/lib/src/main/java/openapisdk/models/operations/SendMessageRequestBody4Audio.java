package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4Audio {
    @JsonProperty("audio")
    public Object audio;
    public SendMessageRequestBody4Audio withAudio(Object audio) {
        this.audio = audio;
        return this;
    }
    @JsonProperty("channel")
    public SendMessageRequestBody4AudioChannelEnum channel;
    public SendMessageRequestBody4Audio withChannel(SendMessageRequestBody4AudioChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody4Audio withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody4Audio withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody4AudioMessageTypeEnum messageType;
    public SendMessageRequestBody4Audio withMessageType(SendMessageRequestBody4AudioMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messenger")
    public SendMessageRequestBody4AudioMessenger messenger;
    public SendMessageRequestBody4Audio withMessenger(SendMessageRequestBody4AudioMessenger messenger) {
        this.messenger = messenger;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody4Audio withTo(String to) {
        this.to = to;
        return this;
    }
}
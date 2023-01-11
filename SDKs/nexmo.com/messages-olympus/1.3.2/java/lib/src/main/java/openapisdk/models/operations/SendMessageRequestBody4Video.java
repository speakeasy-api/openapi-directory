package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4Video {
    @JsonProperty("channel")
    public SendMessageRequestBody4VideoChannelEnum channel;
    public SendMessageRequestBody4Video withChannel(SendMessageRequestBody4VideoChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody4Video withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody4Video withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody4VideoMessageTypeEnum messageType;
    public SendMessageRequestBody4Video withMessageType(SendMessageRequestBody4VideoMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messenger")
    public SendMessageRequestBody4VideoMessenger messenger;
    public SendMessageRequestBody4Video withMessenger(SendMessageRequestBody4VideoMessenger messenger) {
        this.messenger = messenger;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody4Video withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("video")
    public Object video;
    public SendMessageRequestBody4Video withVideo(Object video) {
        this.video = video;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3Video {
    @JsonProperty("channel")
    public SendMessageRequestBody3VideoChannelEnum channel;
    public SendMessageRequestBody3Video withChannel(SendMessageRequestBody3VideoChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody3Video withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody3Video withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody3VideoMessageTypeEnum messageType;
    public SendMessageRequestBody3Video withMessageType(SendMessageRequestBody3VideoMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody3Video withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("video")
    public Object video;
    public SendMessageRequestBody3Video withVideo(Object video) {
        this.video = video;
        return this;
    }
}
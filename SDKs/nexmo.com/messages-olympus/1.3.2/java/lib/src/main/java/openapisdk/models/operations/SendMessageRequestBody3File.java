package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3File {
    @JsonProperty("channel")
    public SendMessageRequestBody3FileChannelEnum channel;
    public SendMessageRequestBody3File withChannel(SendMessageRequestBody3FileChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody3File withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("file")
    public Object file;
    public SendMessageRequestBody3File withFile(Object file) {
        this.file = file;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody3File withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody3FileMessageTypeEnum messageType;
    public SendMessageRequestBody3File withMessageType(SendMessageRequestBody3FileMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody3File withTo(String to) {
        this.to = to;
        return this;
    }
}
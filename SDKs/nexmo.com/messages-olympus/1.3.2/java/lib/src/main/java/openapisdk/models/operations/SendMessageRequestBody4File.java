package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody4File {
    @JsonProperty("channel")
    public SendMessageRequestBody4FileChannelEnum channel;
    public SendMessageRequestBody4File withChannel(SendMessageRequestBody4FileChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody4File withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("file")
    public Object file;
    public SendMessageRequestBody4File withFile(Object file) {
        this.file = file;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody4File withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody4FileMessageTypeEnum messageType;
    public SendMessageRequestBody4File withMessageType(SendMessageRequestBody4FileMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messenger")
    public SendMessageRequestBody4FileMessenger messenger;
    public SendMessageRequestBody4File withMessenger(SendMessageRequestBody4FileMessenger messenger) {
        this.messenger = messenger;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody4File withTo(String to) {
        this.to = to;
        return this;
    }
}
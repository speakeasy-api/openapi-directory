package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody2VCard {
    @JsonProperty("channel")
    public SendMessageRequestBody2VCardChannelEnum channel;
    public SendMessageRequestBody2VCard withChannel(SendMessageRequestBody2VCardChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody2VCard withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody2VCard withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody2VCardMessageTypeEnum messageType;
    public SendMessageRequestBody2VCard withMessageType(SendMessageRequestBody2VCardMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody2VCard withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("vcard")
    public Object vcard;
    public SendMessageRequestBody2VCard withVcard(Object vcard) {
        this.vcard = vcard;
        return this;
    }
}
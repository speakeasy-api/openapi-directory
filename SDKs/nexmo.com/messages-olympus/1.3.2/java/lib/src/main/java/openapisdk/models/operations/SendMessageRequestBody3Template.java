package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3Template {
    @JsonProperty("channel")
    public SendMessageRequestBody3TemplateChannelEnum channel;
    public SendMessageRequestBody3Template withChannel(SendMessageRequestBody3TemplateChannelEnum channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public SendMessageRequestBody3Template withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public SendMessageRequestBody3Template withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message_type")
    public SendMessageRequestBody3TemplateMessageTypeEnum messageType;
    public SendMessageRequestBody3Template withMessageType(SendMessageRequestBody3TemplateMessageTypeEnum messageType) {
        this.messageType = messageType;
        return this;
    }
    @JsonProperty("template")
    public SendMessageRequestBody3TemplateTemplate template;
    public SendMessageRequestBody3Template withTemplate(SendMessageRequestBody3TemplateTemplate template) {
        this.template = template;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public SendMessageRequestBody3Template withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("whatsapp")
    public SendMessageRequestBody3TemplateWhatsapp whatsapp;
    public SendMessageRequestBody3Template withWhatsapp(SendMessageRequestBody3TemplateWhatsapp whatsapp) {
        this.whatsapp = whatsapp;
        return this;
    }
}
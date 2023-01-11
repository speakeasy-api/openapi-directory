package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessageProperty {
    @JsonProperty("content")
    public MessagePropertyContent content;
    public MessageProperty withContent(MessagePropertyContent content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messenger")
    public MessagePropertyMessenger messenger;
    public MessageProperty withMessenger(MessagePropertyMessenger messenger) {
        this.messenger = messenger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viber_service_msg")
    public MessagePropertyViberServiceMsg viberServiceMsg;
    public MessageProperty withViberServiceMsg(MessagePropertyViberServiceMsg viberServiceMsg) {
        this.viberServiceMsg = viberServiceMsg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whatsapp")
    public MessagePropertyWhatsapp whatsapp;
    public MessageProperty withWhatsapp(MessagePropertyWhatsapp whatsapp) {
        this.whatsapp = whatsapp;
        return this;
    }
}
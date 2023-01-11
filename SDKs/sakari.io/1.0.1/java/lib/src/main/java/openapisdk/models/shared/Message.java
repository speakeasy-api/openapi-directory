package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Message {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public ContactIdentifiers contact;
    public Message withContact(ContactIdentifiers contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation")
    public MessageConversation conversation;
    public Message withConversation(MessageConversation conversation) {
        this.conversation = conversation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public Updated created;
    public Message withCreated(Updated created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Error error;
    public Message withError(Error error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Message withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public MessageMedia[] media;
    public Message withMedia(MessageMedia[] media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Message withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outgoing")
    public Boolean outgoing;
    public Message withOutgoing(Boolean outgoing) {
        this.outgoing = outgoing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public Message withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public Message withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public Message withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segments")
    public Double segments;
    public Message withSegments(Double segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Message withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public Message withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public Updated updated;
    public Message withUpdated(Updated updated) {
        this.updated = updated;
        return this;
    }
}
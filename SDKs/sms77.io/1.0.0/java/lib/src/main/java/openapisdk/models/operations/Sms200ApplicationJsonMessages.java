package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Sms200ApplicationJsonMessages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoding")
    public String encoding;
    public Sms200ApplicationJsonMessages withEncoding(String encoding) {
        this.encoding = encoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public Sms200ApplicationJsonMessages withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_text")
    public String errorText;
    public Sms200ApplicationJsonMessages withErrorText(String errorText) {
        this.errorText = errorText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Sms200ApplicationJsonMessages withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public String[] messages;
    public Sms200ApplicationJsonMessages withMessages(String[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parts")
    public Long parts;
    public Sms200ApplicationJsonMessages withParts(Long parts) {
        this.parts = parts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public Sms200ApplicationJsonMessages withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipient")
    public String recipient;
    public Sms200ApplicationJsonMessages withRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sender")
    public String sender;
    public Sms200ApplicationJsonMessages withSender(String sender) {
        this.sender = sender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public Sms200ApplicationJsonMessages withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Sms200ApplicationJsonMessages withText(String text) {
        this.text = text;
        return this;
    }
}
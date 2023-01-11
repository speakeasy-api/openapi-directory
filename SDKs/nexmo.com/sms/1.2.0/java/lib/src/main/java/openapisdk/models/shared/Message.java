package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Message {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account-ref")
    public String accountRef;
    public Message withAccountRef(String accountRef) {
        this.accountRef = accountRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client-ref")
    public String clientRef;
    public Message withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message-id")
    public String messageId;
    public Message withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message-price")
    public String messagePrice;
    public Message withMessagePrice(String messagePrice) {
        this.messagePrice = messagePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public Message withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remaining-balance")
    public String remainingBalance;
    public Message withRemainingBalance(String remainingBalance) {
        this.remainingBalance = remainingBalance;
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
    @JsonProperty("to")
    public String to;
    public Message withTo(String to) {
        this.to = to;
        return this;
    }
}
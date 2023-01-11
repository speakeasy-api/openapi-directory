package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JsonSmsInboundWithBody
 * Inbound SMS
**/
public class JsonSmsInboundWithBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public JsonSmsInboundWithBody withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public JsonSmsInboundWithBody withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public JsonSmsInboundWithBody withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public JsonSmsInboundWithBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_received")
    public LocalDate dateReceived;
    public JsonSmsInboundWithBody withDateReceived(LocalDate dateReceived) {
        this.dateReceived = dateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public java.util.Map<String, Object> direction;
    public JsonSmsInboundWithBody withDirection(java.util.Map<String, Object> direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public JsonSmsInboundWithBody withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_body")
    public String messageBody;
    public JsonSmsInboundWithBody withMessageBody(String messageBody) {
        this.messageBody = messageBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_id")
    public String messageId;
    public JsonSmsInboundWithBody withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public JsonSmsInboundWithBody withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_name")
    public String networkName;
    public JsonSmsInboundWithBody withNetworkName(String networkName) {
        this.networkName = networkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public JsonSmsInboundWithBody withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Double totalPrice;
    public JsonSmsInboundWithBody withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
}
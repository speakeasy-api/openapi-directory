package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JsonSmsOutboundWithBody
 * Outbound SMS
**/
public class JsonSmsOutboundWithBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public JsonSmsOutboundWithBody withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public JsonSmsOutboundWithBody withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concatenated")
    public Boolean concatenated;
    public JsonSmsOutboundWithBody withConcatenated(Boolean concatenated) {
        this.concatenated = concatenated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public JsonSmsOutboundWithBody withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public JsonSmsOutboundWithBody withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public JsonSmsOutboundWithBody withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_finalized")
    public LocalDate dateFinalized;
    public JsonSmsOutboundWithBody withDateFinalized(LocalDate dateFinalized) {
        this.dateFinalized = dateFinalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_received")
    public LocalDate dateReceived;
    public JsonSmsOutboundWithBody withDateReceived(LocalDate dateReceived) {
        this.dateReceived = dateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public DirectionEnum direction;
    public JsonSmsOutboundWithBody withDirection(DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public String errorCode;
    public JsonSmsOutboundWithBody withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code_description")
    public String errorCodeDescription;
    public JsonSmsOutboundWithBody withErrorCodeDescription(String errorCodeDescription) {
        this.errorCodeDescription = errorCodeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public JsonSmsOutboundWithBody withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public Long latency;
    public JsonSmsOutboundWithBody withLatency(Long latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_body")
    public String messageBody;
    public JsonSmsOutboundWithBody withMessageBody(String messageBody) {
        this.messageBody = messageBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_id")
    public String messageId;
    public JsonSmsOutboundWithBody withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public JsonSmsOutboundWithBody withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_name")
    public String networkName;
    public JsonSmsOutboundWithBody withNetworkName(String networkName) {
        this.networkName = networkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SmsStatusEnum status;
    public JsonSmsOutboundWithBody withStatus(SmsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public JsonSmsOutboundWithBody withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Double totalPrice;
    public JsonSmsOutboundWithBody withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
}
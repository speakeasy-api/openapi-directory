package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CsvMessagesOutbound
 * Outbound Messages
**/
public class CsvMessagesOutbound {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public CsvMessagesOutbound withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_ref")
    public String clientRef;
    public CsvMessagesOutbound withClientRef(String clientRef) {
        this.clientRef = clientRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public CsvMessagesOutbound withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public CsvMessagesOutbound withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CsvMessagesOutbound withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_finalized")
    public LocalDate dateFinalized;
    public CsvMessagesOutbound withDateFinalized(LocalDate dateFinalized) {
        this.dateFinalized = dateFinalized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_received")
    public LocalDate dateReceived;
    public CsvMessagesOutbound withDateReceived(LocalDate dateReceived) {
        this.dateReceived = dateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public DirectionEnum direction;
    public CsvMessagesOutbound withDirection(DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public String errorCode;
    public CsvMessagesOutbound withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CsvMessagesOutbound withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public Long latency;
    public CsvMessagesOutbound withLatency(Long latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_body")
    public String messageBody;
    public CsvMessagesOutbound withMessageBody(String messageBody) {
        this.messageBody = messageBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_id")
    public String messageId;
    public CsvMessagesOutbound withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;
    public CsvMessagesOutbound withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public CsvMessagesOutbound withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CsvMessagesOutbound withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Double totalPrice;
    public CsvMessagesOutbound withTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
}
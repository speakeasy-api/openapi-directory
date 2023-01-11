package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PaymentEventResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public PaymentEventResponse withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public PaymentEventResponse withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("eventDateTime")
    public OffsetDateTime eventDateTime;
    public PaymentEventResponse withEventDateTime(OffsetDateTime eventDateTime) {
        this.eventDateTime = eventDateTime;
        return this;
    }
    @JsonProperty("eventId")
    public String eventId;
    public PaymentEventResponse withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonProperty("eventType")
    public PaymentEventResponseEventTypeEnum eventType;
    public PaymentEventResponse withEventType(PaymentEventResponseEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public PaymentEventResponse withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentAmount")
    public Long paymentAmount;
    public PaymentEventResponse withPaymentAmount(Long paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCurrency")
    public PaymentAuditCurrencyEnum paymentCurrency;
    public PaymentEventResponse withPaymentCurrency(PaymentAuditCurrencyEnum paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public PaymentEventResponse withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public PaymentEventResponse withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAmount")
    public Long sourceAmount;
    public PaymentEventResponse withSourceAmount(Long sourceAmount) {
        this.sourceAmount = sourceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCurrency")
    public PaymentAuditCurrencyEnum sourceCurrency;
    public PaymentEventResponse withSourceCurrency(PaymentAuditCurrencyEnum sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
}
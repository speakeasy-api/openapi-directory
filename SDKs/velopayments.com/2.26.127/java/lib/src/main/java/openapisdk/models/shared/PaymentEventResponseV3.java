package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PaymentEventResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public PaymentEventResponseV3 withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public PaymentEventResponseV3 withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("eventDateTime")
    public OffsetDateTime eventDateTime;
    public PaymentEventResponseV3 withEventDateTime(OffsetDateTime eventDateTime) {
        this.eventDateTime = eventDateTime;
        return this;
    }
    @JsonProperty("eventId")
    public String eventId;
    public PaymentEventResponseV3 withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonProperty("eventType")
    public PaymentEventResponseV3EventTypeEnum eventType;
    public PaymentEventResponseV3 withEventType(PaymentEventResponseV3EventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public PaymentEventResponseV3 withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentAmount")
    public Long paymentAmount;
    public PaymentEventResponseV3 withPaymentAmount(Long paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCurrency")
    public PaymentAuditCurrencyV3Enum paymentCurrency;
    public PaymentEventResponseV3 withPaymentCurrency(PaymentAuditCurrencyV3Enum paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public PaymentEventResponseV3 withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public PaymentEventResponseV3 withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAmount")
    public Long sourceAmount;
    public PaymentEventResponseV3 withSourceAmount(Long sourceAmount) {
        this.sourceAmount = sourceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCurrency")
    public PaymentAuditCurrencyV3Enum sourceCurrency;
    public PaymentEventResponseV3 withSourceCurrency(PaymentAuditCurrencyV3Enum sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
}
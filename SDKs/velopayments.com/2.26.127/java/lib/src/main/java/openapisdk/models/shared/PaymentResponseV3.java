package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PaymentResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public PaymentResponseV3 withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public PaymentResponseV3 withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public PaymentResponseV3 withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("events")
    public PaymentEventResponseV3[] events;
    public PaymentResponseV3 withEvents(PaymentEventResponseV3[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filenameReference")
    public String filenameReference;
    public PaymentResponseV3 withFilenameReference(String filenameReference) {
        this.filenameReference = filenameReference;
        return this;
    }
    @JsonProperty("fundingStatus")
    public PaymentResponseV3FundingStatusEnum fundingStatus;
    public PaymentResponseV3 withFundingStatus(PaymentResponseV3FundingStatusEnum fundingStatus) {
        this.fundingStatus = fundingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public PaymentResponseV3 withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualIdentificationNumber")
    public String individualIdentificationNumber;
    public PaymentResponseV3 withIndividualIdentificationNumber(String individualIdentificationNumber) {
        this.individualIdentificationNumber = individualIdentificationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invertedRate")
    public Float invertedRate;
    public PaymentResponseV3 withInvertedRate(Float invertedRate) {
        this.invertedRate = invertedRate;
        return this;
    }
    @JsonProperty("payeeId")
    public String payeeId;
    public PaymentResponseV3 withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonProperty("paymentAmount")
    public Long paymentAmount;
    public PaymentResponseV3 withPaymentAmount(Long paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelId")
    public String paymentChannelId;
    public PaymentResponseV3 withPaymentChannelId(String paymentChannelId) {
        this.paymentChannelId = paymentChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelName")
    public String paymentChannelName;
    public PaymentResponseV3 withPaymentChannelName(String paymentChannelName) {
        this.paymentChannelName = paymentChannelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCurrency")
    public PaymentAuditCurrencyV3Enum paymentCurrency;
    public PaymentResponseV3 withPaymentCurrency(PaymentAuditCurrencyV3Enum paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @JsonProperty("paymentId")
    public String paymentId;
    public PaymentResponseV3 withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMemo")
    public String paymentMemo;
    public PaymentResponseV3 withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    @JsonProperty("payorId")
    public String payorId;
    public PaymentResponseV3 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorName")
    public String payorName;
    public PaymentResponseV3 withPayorName(String payorName) {
        this.payorName = payorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorPaymentId")
    public String payorPaymentId;
    public PaymentResponseV3 withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    @JsonProperty("quoteId")
    public String quoteId;
    public PaymentResponseV3 withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("railsBatchId")
    public String railsBatchId;
    public PaymentResponseV3 withRailsBatchId(String railsBatchId) {
        this.railsBatchId = railsBatchId;
        return this;
    }
    @JsonProperty("railsId")
    public String railsId;
    public PaymentResponseV3 withRailsId(String railsId) {
        this.railsId = railsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("railsPaymentId")
    public String railsPaymentId;
    public PaymentResponseV3 withRailsPaymentId(String railsPaymentId) {
        this.railsPaymentId = railsPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Float rate;
    public PaymentResponseV3 withRate(Float rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectionReason")
    public String rejectionReason;
    public PaymentResponseV3 withRejectionReason(String rejectionReason) {
        this.rejectionReason = rejectionReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;
    public PaymentResponseV3 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnCost")
    public Long returnCost;
    public PaymentResponseV3 withReturnCost(Long returnCost) {
        this.returnCost = returnCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnReason")
    public String returnReason;
    public PaymentResponseV3 withReturnReason(String returnReason) {
        this.returnReason = returnReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public PaymentResponseV3 withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    @JsonProperty("sourceAccountId")
    public String sourceAccountId;
    public PaymentResponseV3 withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;
    public PaymentResponseV3 withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAmount")
    public Long sourceAmount;
    public PaymentResponseV3 withSourceAmount(Long sourceAmount) {
        this.sourceAmount = sourceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCurrency")
    public PaymentAuditCurrencyV3Enum sourceCurrency;
    public PaymentResponseV3 withSourceCurrency(PaymentAuditCurrencyV3Enum sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @JsonProperty("status")
    public PaymentResponseV3StatusEnum status;
    public PaymentResponseV3 withStatus(PaymentResponseV3StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("submittedDateTime")
    public OffsetDateTime submittedDateTime;
    public PaymentResponseV3 withSubmittedDateTime(OffsetDateTime submittedDateTime) {
        this.submittedDateTime = submittedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traceNumber")
    public String traceNumber;
    public PaymentResponseV3 withTraceNumber(String traceNumber) {
        this.traceNumber = traceNumber;
        return this;
    }
}
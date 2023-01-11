package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PaymentResponseV4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public PaymentResponseV4 withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public PaymentResponseV4 withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public PaymentResponseV4 withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("events")
    public PaymentEventResponse[] events;
    public PaymentResponseV4 withEvents(PaymentEventResponse[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filenameReference")
    public String filenameReference;
    public PaymentResponseV4 withFilenameReference(String filenameReference) {
        this.filenameReference = filenameReference;
        return this;
    }
    @JsonProperty("fundingStatus")
    public PaymentResponseV4FundingStatusEnum fundingStatus;
    public PaymentResponseV4 withFundingStatus(PaymentResponseV4FundingStatusEnum fundingStatus) {
        this.fundingStatus = fundingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public PaymentResponseV4 withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualIdentificationNumber")
    public String individualIdentificationNumber;
    public PaymentResponseV4 withIndividualIdentificationNumber(String individualIdentificationNumber) {
        this.individualIdentificationNumber = individualIdentificationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invertedRate")
    public Double invertedRate;
    public PaymentResponseV4 withInvertedRate(Double invertedRate) {
        this.invertedRate = invertedRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPaymentCcyBaseCcy")
    public Boolean isPaymentCcyBaseCcy;
    public PaymentResponseV4 withIsPaymentCcyBaseCcy(Boolean isPaymentCcyBaseCcy) {
        this.isPaymentCcyBaseCcy = isPaymentCcyBaseCcy;
        return this;
    }
    @JsonProperty("payeeId")
    public String payeeId;
    public PaymentResponseV4 withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonProperty("paymentAmount")
    public Long paymentAmount;
    public PaymentResponseV4 withPaymentAmount(Long paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelId")
    public String paymentChannelId;
    public PaymentResponseV4 withPaymentChannelId(String paymentChannelId) {
        this.paymentChannelId = paymentChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelName")
    public String paymentChannelName;
    public PaymentResponseV4 withPaymentChannelName(String paymentChannelName) {
        this.paymentChannelName = paymentChannelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCurrency")
    public PaymentAuditCurrencyEnum paymentCurrency;
    public PaymentResponseV4 withPaymentCurrency(PaymentAuditCurrencyEnum paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @JsonProperty("paymentId")
    public String paymentId;
    public PaymentResponseV4 withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMemo")
    public String paymentMemo;
    public PaymentResponseV4 withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMetadata")
    public String paymentMetadata;
    public PaymentResponseV4 withPaymentMetadata(String paymentMetadata) {
        this.paymentMetadata = paymentMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentTrackingReference")
    public String paymentTrackingReference;
    public PaymentResponseV4 withPaymentTrackingReference(String paymentTrackingReference) {
        this.paymentTrackingReference = paymentTrackingReference;
        return this;
    }
    @JsonProperty("payorId")
    public String payorId;
    public PaymentResponseV4 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorName")
    public String payorName;
    public PaymentResponseV4 withPayorName(String payorName) {
        this.payorName = payorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorPaymentId")
    public String payorPaymentId;
    public PaymentResponseV4 withPayorPaymentId(String payorPaymentId) {
        this.payorPaymentId = payorPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payout")
    public Object payout;
    public PaymentResponseV4 withPayout(Object payout) {
        this.payout = payout;
        return this;
    }
    @JsonProperty("quoteId")
    public String quoteId;
    public PaymentResponseV4 withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("railsBatchId")
    public String railsBatchId;
    public PaymentResponseV4 withRailsBatchId(String railsBatchId) {
        this.railsBatchId = railsBatchId;
        return this;
    }
    @JsonProperty("railsId")
    public String railsId;
    public PaymentResponseV4 withRailsId(String railsId) {
        this.railsId = railsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("railsPaymentId")
    public String railsPaymentId;
    public PaymentResponseV4 withRailsPaymentId(String railsPaymentId) {
        this.railsPaymentId = railsPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public PaymentResponseV4 withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectionReason")
    public String rejectionReason;
    public PaymentResponseV4 withRejectionReason(String rejectionReason) {
        this.rejectionReason = rejectionReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;
    public PaymentResponseV4 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemId")
    public String remoteSystemId;
    public PaymentResponseV4 withRemoteSystemId(String remoteSystemId) {
        this.remoteSystemId = remoteSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemPaymentId")
    public String remoteSystemPaymentId;
    public PaymentResponseV4 withRemoteSystemPaymentId(String remoteSystemPaymentId) {
        this.remoteSystemPaymentId = remoteSystemPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnCost")
    public Long returnCost;
    public PaymentResponseV4 withReturnCost(Long returnCost) {
        this.returnCost = returnCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnReason")
    public String returnReason;
    public PaymentResponseV4 withReturnReason(String returnReason) {
        this.returnReason = returnReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public PaymentResponseV4 withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    @JsonProperty("sourceAccountId")
    public String sourceAccountId;
    public PaymentResponseV4 withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;
    public PaymentResponseV4 withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAmount")
    public Long sourceAmount;
    public PaymentResponseV4 withSourceAmount(Long sourceAmount) {
        this.sourceAmount = sourceAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCurrency")
    public PaymentAuditCurrencyEnum sourceCurrency;
    public PaymentResponseV4 withSourceCurrency(PaymentAuditCurrencyEnum sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @JsonProperty("status")
    public PaymentResponseV4StatusEnum status;
    public PaymentResponseV4 withStatus(PaymentResponseV4StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("submittedDateTime")
    public OffsetDateTime submittedDateTime;
    public PaymentResponseV4 withSubmittedDateTime(OffsetDateTime submittedDateTime) {
        this.submittedDateTime = submittedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traceNumber")
    public String traceNumber;
    public PaymentResponseV4 withTraceNumber(String traceNumber) {
        this.traceNumber = traceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmissionType")
    public String transmissionType;
    public PaymentResponseV4 withTransmissionType(String transmissionType) {
        this.transmissionType = transmissionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withdrawable")
    public Boolean withdrawable;
    public PaymentResponseV4 withWithdrawable(Boolean withdrawable) {
        this.withdrawable = withdrawable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withdrawnReason")
    public String withdrawnReason;
    public PaymentResponseV4 withWithdrawnReason(String withdrawnReason) {
        this.withdrawnReason = withdrawnReason;
        return this;
    }
}
/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * PaymentResponseV4 - 200 response, request completed okay
 */
public class PaymentResponseV4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;

    public PaymentResponseV4 withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    
    /**
     * The account number for the account which will receive the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;

    public PaymentResponseV4 withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    
    /**
     * Populated with rejection reason code if the payment was withdrawn automatically at instruct time
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoWithdrawnReasonCode")
    public String autoWithdrawnReasonCode;

    public PaymentResponseV4 withAutoWithdrawnReasonCode(String autoWithdrawnReasonCode) {
        this.autoWithdrawnReasonCode = autoWithdrawnReasonCode;
        return this;
    }
    
    /**
     * The country code of the payment channel.
     */
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
    
    /**
     * ACH file payment was submitted in, if applicable
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filenameReference")
    public String filenameReference;

    public PaymentResponseV4 withFilenameReference(String filenameReference) {
        this.filenameReference = filenameReference;
        return this;
    }
    
    /**
     * Current funding status of the payment. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
     */
    @JsonProperty("fundingStatus")
    public String fundingStatus;

    public PaymentResponseV4 withFundingStatus(String fundingStatus) {
        this.fundingStatus = fundingStatus;
        return this;
    }
    
    /**
     * The iban for the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;

    public PaymentResponseV4 withIban(String iban) {
        this.iban = iban;
        return this;
    }
    
    /**
     * Individual Identification Number assigned to the payment in the ACH file, if applicable
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualIdentificationNumber")
    public String individualIdentificationNumber;

    public PaymentResponseV4 withIndividualIdentificationNumber(String individualIdentificationNumber) {
        this.individualIdentificationNumber = individualIdentificationNumber;
        return this;
    }
    
    /**
     * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
     */
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
    
    /**
     * The country code of the payee's address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeAddressCountryCode")
    public String payeeAddressCountryCode;

    public PaymentResponseV4 withPayeeAddressCountryCode(String payeeAddressCountryCode) {
        this.payeeAddressCountryCode = payeeAddressCountryCode;
        return this;
    }
    
    /**
     * The id of the paymeee
     */
    @JsonProperty("payeeId")
    public String payeeId;

    public PaymentResponseV4 withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    
    /**
     * The amount which the payee will receive
     */
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
    
    /**
     * ISO-4217 3 character currency code
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCurrency")
    public String paymentCurrency;

    public PaymentResponseV4 withPaymentCurrency(String paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    
    /**
     * The id of the payment
     */
    @JsonProperty("paymentId")
    public String paymentId;

    public PaymentResponseV4 withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    
    /**
     * The payment memo set by the payor
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMemo")
    public String paymentMemo;

    public PaymentResponseV4 withPaymentMemo(String paymentMemo) {
        this.paymentMemo = paymentMemo;
        return this;
    }
    
    /**
     * Metadata for the payment
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMetadata")
    public String paymentMetadata;

    public PaymentResponseV4 withPaymentMetadata(String paymentMetadata) {
        this.paymentMetadata = paymentMetadata;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentScheme")
    public String paymentScheme;

    public PaymentResponseV4 withPaymentScheme(String paymentScheme) {
        this.paymentScheme = paymentScheme;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentTrackingReference")
    public String paymentTrackingReference;

    public PaymentResponseV4 withPaymentTrackingReference(String paymentTrackingReference) {
        this.paymentTrackingReference = paymentTrackingReference;
        return this;
    }
    
    /**
     * The id of the payor
     */
    @JsonProperty("payorId")
    public String payorId;

    public PaymentResponseV4 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    
    /**
     * The name of the payor
     */
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
    public PaymentResponseV4Payout payout;

    public PaymentResponseV4 withPayout(PaymentResponseV4Payout payout) {
        this.payout = payout;
        return this;
    }
    
    /**
     * FX details relating to a payout that was executed or is still waiting to be executed
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postInstructFxInfo")
    public PostInstructFxInfo postInstructFxInfo;

    public PaymentResponseV4 withPostInstructFxInfo(PostInstructFxInfo postInstructFxInfo) {
        this.postInstructFxInfo = postInstructFxInfo;
        return this;
    }
    
    /**
     * The quote Id used for the FX
     */
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
    
    /**
     * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
     */
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
    
    /**
     * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
     */
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
    
    /**
     * The remote id by which the payor refers to the payee. Only populated once payment is confirmed
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;

    public PaymentResponseV4 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    
    /**
     * The velo id of the remote system orchestrating the payment. Not populated for normal Velo payments.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemId")
    public String remoteSystemId;

    public PaymentResponseV4 withRemoteSystemId(String remoteSystemId) {
        this.remoteSystemId = remoteSystemId;
        return this;
    }
    
    /**
     * The id of the payment in the remote system. Not populated for normal Velo payments.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteSystemPaymentId")
    public String remoteSystemPaymentId;

    public PaymentResponseV4 withRemoteSystemPaymentId(String remoteSystemPaymentId) {
        this.remoteSystemPaymentId = remoteSystemPaymentId;
        return this;
    }
    
    /**
     * The return cost if a returned payment.
     */
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
    
    /**
     * The routing number for the payment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;

    public PaymentResponseV4 withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    
    /**
     * Details relating to a payout that was executed via a schedule or is still waiting to be executed
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public PayoutSchedule schedule;

    public PaymentResponseV4 withSchedule(PayoutSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    
    /**
     * The id of the source account from which the payment was taken
     */
    @JsonProperty("sourceAccountId")
    public String sourceAccountId;

    public PaymentResponseV4 withSourceAccountId(String sourceAccountId) {
        this.sourceAccountId = sourceAccountId;
        return this;
    }
    
    /**
     * The name of the source account from which the payment was taken
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;

    public PaymentResponseV4 withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    
    /**
     * The source amount for the payment (amount debited to make the payment)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAmount")
    public Long sourceAmount;

    public PaymentResponseV4 withSourceAmount(Long sourceAmount) {
        this.sourceAmount = sourceAmount;
        return this;
    }
    
    /**
     * ISO-4217 3 character currency code
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCurrency")
    public String sourceCurrency;

    public PaymentResponseV4 withSourceCurrency(String sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    
    /**
     * Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, RETURNED, WITHDRAWN
     */
    @JsonProperty("status")
    public String status;

    public PaymentResponseV4 withStatus(String status) {
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
    
    /**
     * Trace Number assigned to the payment in the ACH file, if applicable
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traceNumber")
    public String traceNumber;

    public PaymentResponseV4 withTraceNumber(String traceNumber) {
        this.traceNumber = traceNumber;
        return this;
    }
    
    /**
     * The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE, GACHO
     */
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
    
    public PaymentResponseV4(@JsonProperty("events") PaymentEventResponse[] events, @JsonProperty("fundingStatus") String fundingStatus, @JsonProperty("payeeId") String payeeId, @JsonProperty("paymentAmount") Long paymentAmount, @JsonProperty("paymentId") String paymentId, @JsonProperty("payorId") String payorId, @JsonProperty("quoteId") String quoteId, @JsonProperty("railsId") String railsId, @JsonProperty("sourceAccountId") String sourceAccountId, @JsonProperty("status") String status, @JsonProperty("submittedDateTime") OffsetDateTime submittedDateTime) {
        this.events = events;
        this.fundingStatus = fundingStatus;
        this.payeeId = payeeId;
        this.paymentAmount = paymentAmount;
        this.paymentId = paymentId;
        this.payorId = payorId;
        this.quoteId = quoteId;
        this.railsId = railsId;
        this.sourceAccountId = sourceAccountId;
        this.status = status;
        this.submittedDateTime = submittedDateTime;
  }
}

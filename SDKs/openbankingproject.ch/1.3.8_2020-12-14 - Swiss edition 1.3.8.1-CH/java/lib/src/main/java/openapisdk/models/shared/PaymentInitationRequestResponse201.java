package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitationRequestResponse201
 * Body of the response for a successful payment initiation request.
**/
public class PaymentInitationRequestResponse201 {
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public PaymentInitationRequestResponse201 withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeData")
    public ChallengeData challengeData;
    public PaymentInitationRequestResponse201 withChallengeData(ChallengeData challengeData) {
        this.challengeData = challengeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chosenScaMethod")
    public ChosenScaMethod chosenScaMethod;
    public PaymentInitationRequestResponse201 withChosenScaMethod(ChosenScaMethod chosenScaMethod) {
        this.chosenScaMethod = chosenScaMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyConversionFee")
    public Amount currencyConversionFee;
    public PaymentInitationRequestResponse201 withCurrencyConversionFee(Amount currencyConversionFee) {
        this.currencyConversionFee = currencyConversionFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedInterbankSettlementAmount")
    public Amount estimatedInterbankSettlementAmount;
    public PaymentInitationRequestResponse201 withEstimatedInterbankSettlementAmount(Amount estimatedInterbankSettlementAmount) {
        this.estimatedInterbankSettlementAmount = estimatedInterbankSettlementAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedTotalAmount")
    public Amount estimatedTotalAmount;
    public PaymentInitationRequestResponse201 withEstimatedTotalAmount(Amount estimatedTotalAmount) {
        this.estimatedTotalAmount = estimatedTotalAmount;
        return this;
    }
    @JsonProperty("paymentId")
    public String paymentId;
    public PaymentInitationRequestResponse201 withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public PaymentInitationRequestResponse201 withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaMethods")
    public AuthenticationObject[] scaMethods;
    public PaymentInitationRequestResponse201 withScaMethods(AuthenticationObject[] scaMethods) {
        this.scaMethods = scaMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage2Xx[] tppMessages;
    public PaymentInitationRequestResponse201 withTppMessages(TppMessage2Xx[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionFeeIndicator")
    public Boolean transactionFeeIndicator;
    public PaymentInitationRequestResponse201 withTransactionFeeIndicator(Boolean transactionFeeIndicator) {
        this.transactionFeeIndicator = transactionFeeIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionFees")
    public Amount transactionFees;
    public PaymentInitationRequestResponse201 withTransactionFees(Amount transactionFees) {
        this.transactionFees = transactionFees;
        return this;
    }
    @JsonProperty("transactionStatus")
    public TransactionStatusEnum transactionStatus;
    public PaymentInitationRequestResponse201 withTransactionStatus(TransactionStatusEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
}
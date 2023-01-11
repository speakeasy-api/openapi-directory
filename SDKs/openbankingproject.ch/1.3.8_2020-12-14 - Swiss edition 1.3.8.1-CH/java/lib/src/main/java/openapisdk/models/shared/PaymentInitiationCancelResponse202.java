package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationCancelResponse202
 * Body of the response for a successful cancel payment request.
**/
public class PaymentInitiationCancelResponse202 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public PaymentInitiationCancelResponse202 withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeData")
    public ChallengeData challengeData;
    public PaymentInitiationCancelResponse202 withChallengeData(ChallengeData challengeData) {
        this.challengeData = challengeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chosenScaMethod")
    public ChosenScaMethod chosenScaMethod;
    public PaymentInitiationCancelResponse202 withChosenScaMethod(ChosenScaMethod chosenScaMethod) {
        this.chosenScaMethod = chosenScaMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaMethods")
    public AuthenticationObject[] scaMethods;
    public PaymentInitiationCancelResponse202 withScaMethods(AuthenticationObject[] scaMethods) {
        this.scaMethods = scaMethods;
        return this;
    }
    @JsonProperty("transactionStatus")
    public TransactionStatusEnum transactionStatus;
    public PaymentInitiationCancelResponse202 withTransactionStatus(TransactionStatusEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
}
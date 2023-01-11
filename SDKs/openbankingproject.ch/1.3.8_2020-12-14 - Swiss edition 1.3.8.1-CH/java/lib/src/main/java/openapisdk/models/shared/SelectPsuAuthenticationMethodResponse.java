package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SelectPsuAuthenticationMethodResponse
 * Body of the JSON response for a successful select PSU authentication method request.
**/
public class SelectPsuAuthenticationMethodResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public SelectPsuAuthenticationMethodResponse withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeData")
    public ChallengeData challengeData;
    public SelectPsuAuthenticationMethodResponse withChallengeData(ChallengeData challengeData) {
        this.challengeData = challengeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chosenScaMethod")
    public ChosenScaMethod chosenScaMethod;
    public SelectPsuAuthenticationMethodResponse withChosenScaMethod(ChosenScaMethod chosenScaMethod) {
        this.chosenScaMethod = chosenScaMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyConversionFees")
    public Amount currencyConversionFees;
    public SelectPsuAuthenticationMethodResponse withCurrencyConversionFees(Amount currencyConversionFees) {
        this.currencyConversionFees = currencyConversionFees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedInterbankSettlementAmount")
    public Amount estimatedInterbankSettlementAmount;
    public SelectPsuAuthenticationMethodResponse withEstimatedInterbankSettlementAmount(Amount estimatedInterbankSettlementAmount) {
        this.estimatedInterbankSettlementAmount = estimatedInterbankSettlementAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedTotalAmount")
    public Amount estimatedTotalAmount;
    public SelectPsuAuthenticationMethodResponse withEstimatedTotalAmount(Amount estimatedTotalAmount) {
        this.estimatedTotalAmount = estimatedTotalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public SelectPsuAuthenticationMethodResponse withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonProperty("scaStatus")
    public ScaStatusEnum scaStatus;
    public SelectPsuAuthenticationMethodResponse withScaStatus(ScaStatusEnum scaStatus) {
        this.scaStatus = scaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionFees")
    public Amount transactionFees;
    public SelectPsuAuthenticationMethodResponse withTransactionFees(Amount transactionFees) {
        this.transactionFees = transactionFees;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePsuAuthenticationResponse
 * Body of the JSON response for a successful update PSU authentication request.
**/
public class UpdatePsuAuthenticationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public UpdatePsuAuthenticationResponse withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorisationId")
    public String authorisationId;
    public UpdatePsuAuthenticationResponse withAuthorisationId(String authorisationId) {
        this.authorisationId = authorisationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeData")
    public ChallengeData challengeData;
    public UpdatePsuAuthenticationResponse withChallengeData(ChallengeData challengeData) {
        this.challengeData = challengeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chosenScaMethod")
    public ChosenScaMethod chosenScaMethod;
    public UpdatePsuAuthenticationResponse withChosenScaMethod(ChosenScaMethod chosenScaMethod) {
        this.chosenScaMethod = chosenScaMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyConversionFees")
    public Amount currencyConversionFees;
    public UpdatePsuAuthenticationResponse withCurrencyConversionFees(Amount currencyConversionFees) {
        this.currencyConversionFees = currencyConversionFees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedInterbankSettlementAmount")
    public Amount estimatedInterbankSettlementAmount;
    public UpdatePsuAuthenticationResponse withEstimatedInterbankSettlementAmount(Amount estimatedInterbankSettlementAmount) {
        this.estimatedInterbankSettlementAmount = estimatedInterbankSettlementAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedTotalAmount")
    public Amount estimatedTotalAmount;
    public UpdatePsuAuthenticationResponse withEstimatedTotalAmount(Amount estimatedTotalAmount) {
        this.estimatedTotalAmount = estimatedTotalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public UpdatePsuAuthenticationResponse withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaMethods")
    public AuthenticationObject[] scaMethods;
    public UpdatePsuAuthenticationResponse withScaMethods(AuthenticationObject[] scaMethods) {
        this.scaMethods = scaMethods;
        return this;
    }
    @JsonProperty("scaStatus")
    public ScaStatusEnum scaStatus;
    public UpdatePsuAuthenticationResponse withScaStatus(ScaStatusEnum scaStatus) {
        this.scaStatus = scaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionFees")
    public Amount transactionFees;
    public UpdatePsuAuthenticationResponse withTransactionFees(Amount transactionFees) {
        this.transactionFees = transactionFees;
        return this;
    }
}
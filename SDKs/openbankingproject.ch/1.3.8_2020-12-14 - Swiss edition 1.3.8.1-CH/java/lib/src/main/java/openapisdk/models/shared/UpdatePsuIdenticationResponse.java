package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePsuIdenticationResponse
 * Body of the JSON response for a successful update PSU identification request.
**/
public class UpdatePsuIdenticationResponse {
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public UpdatePsuIdenticationResponse withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyConversionFees")
    public Amount currencyConversionFees;
    public UpdatePsuIdenticationResponse withCurrencyConversionFees(Amount currencyConversionFees) {
        this.currencyConversionFees = currencyConversionFees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedInterbankSettlementAmount")
    public Amount estimatedInterbankSettlementAmount;
    public UpdatePsuIdenticationResponse withEstimatedInterbankSettlementAmount(Amount estimatedInterbankSettlementAmount) {
        this.estimatedInterbankSettlementAmount = estimatedInterbankSettlementAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedTotalAmount")
    public Amount estimatedTotalAmount;
    public UpdatePsuIdenticationResponse withEstimatedTotalAmount(Amount estimatedTotalAmount) {
        this.estimatedTotalAmount = estimatedTotalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public UpdatePsuIdenticationResponse withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaMethods")
    public AuthenticationObject[] scaMethods;
    public UpdatePsuIdenticationResponse withScaMethods(AuthenticationObject[] scaMethods) {
        this.scaMethods = scaMethods;
        return this;
    }
    @JsonProperty("scaStatus")
    public ScaStatusEnum scaStatus;
    public UpdatePsuIdenticationResponse withScaStatus(ScaStatusEnum scaStatus) {
        this.scaStatus = scaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionFees")
    public Amount transactionFees;
    public UpdatePsuIdenticationResponse withTransactionFees(Amount transactionFees) {
        this.transactionFees = transactionFees;
        return this;
    }
}
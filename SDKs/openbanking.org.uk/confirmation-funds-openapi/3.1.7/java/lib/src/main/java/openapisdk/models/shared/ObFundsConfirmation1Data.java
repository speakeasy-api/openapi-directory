package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObFundsConfirmation1Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObFundsConfirmation1Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObFundsConfirmation1DataInstructedAmount instructedAmount;
    public ObFundsConfirmation1Data withInstructedAmount(ObFundsConfirmation1DataInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("Reference")
    public String reference;
    public ObFundsConfirmation1Data withReference(String reference) {
        this.reference = reference;
        return this;
    }
}
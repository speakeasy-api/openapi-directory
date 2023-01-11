package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObFundsConfirmationConsent1 {
    @JsonProperty("Data")
    public ObFundsConfirmationConsent1Data data;
    public ObFundsConfirmationConsent1 withData(ObFundsConfirmationConsent1Data data) {
        this.data = data;
        return this;
    }
}
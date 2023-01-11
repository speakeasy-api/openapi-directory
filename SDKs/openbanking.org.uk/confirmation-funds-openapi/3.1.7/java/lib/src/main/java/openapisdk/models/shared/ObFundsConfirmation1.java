package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObFundsConfirmation1 {
    @JsonProperty("Data")
    public ObFundsConfirmation1Data data;
    public ObFundsConfirmation1 withData(ObFundsConfirmation1Data data) {
        this.data = data;
        return this;
    }
}
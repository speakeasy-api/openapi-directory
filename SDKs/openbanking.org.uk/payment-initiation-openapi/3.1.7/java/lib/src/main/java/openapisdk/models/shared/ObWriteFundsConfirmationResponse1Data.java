package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteFundsConfirmationResponse1Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FundsAvailableResult")
    public ObWriteFundsConfirmationResponse1DataFundsAvailableResult fundsAvailableResult;
    public ObWriteFundsConfirmationResponse1Data withFundsAvailableResult(ObWriteFundsConfirmationResponse1DataFundsAvailableResult fundsAvailableResult) {
        this.fundsAvailableResult = fundsAvailableResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteFundsConfirmationResponse1Data withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}
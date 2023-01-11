package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObCreditLine1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObCreditLine1 withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Included")
    public Boolean included;
    public ObCreditLine1 withIncluded(Boolean included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ObExternalLimitType1CodeEnum type;
    public ObCreditLine1 withType(ObExternalLimitType1CodeEnum type) {
        this.type = type;
        return this;
    }
}
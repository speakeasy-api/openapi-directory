package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreditEstimate
 * An estimated credit applied to the costs on a SKU.
**/
public class CreditEstimate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditAmount")
    public Money creditAmount;
    public CreditEstimate withCreditAmount(Money creditAmount) {
        this.creditAmount = creditAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditDescription")
    public String creditDescription;
    public CreditEstimate withCreditDescription(String creditDescription) {
        this.creditDescription = creditDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditType")
    public String creditType;
    public CreditEstimate withCreditType(String creditType) {
        this.creditType = creditType;
        return this;
    }
}
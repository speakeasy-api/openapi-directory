package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayoutPayeeV3
 * Payee data associated with a payment. Either individual or company must be populated
**/
public class PayoutPayeeV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public PayoutCompanyV3 company;
    public PayoutPayeeV3 withCompany(PayoutCompanyV3 company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public PayoutIndividualV3 individual;
    public PayoutPayeeV3 withIndividual(PayoutIndividualV3 individual) {
        this.individual = individual;
        return this;
    }
    @JsonProperty("payeeId")
    public String payeeId;
    public PayoutPayeeV3 withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}
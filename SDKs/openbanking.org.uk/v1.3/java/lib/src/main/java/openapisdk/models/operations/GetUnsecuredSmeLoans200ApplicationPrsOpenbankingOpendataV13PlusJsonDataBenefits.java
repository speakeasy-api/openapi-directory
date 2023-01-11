package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
 * Benefit
**/
public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits {
    @JsonProperty("Benefit")
    public Boolean benefit;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits withBenefit(Boolean benefit) {
        this.benefit = benefit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitGroup")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[] benefitGroup;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits withBenefitGroup(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[] benefitGroup) {
        this.benefitGroup = benefitGroup;
        return this;
    }
}
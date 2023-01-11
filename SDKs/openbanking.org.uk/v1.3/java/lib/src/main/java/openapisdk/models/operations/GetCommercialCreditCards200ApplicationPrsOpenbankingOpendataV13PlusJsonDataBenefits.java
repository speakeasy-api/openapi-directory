package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
 * Benefit
**/
public class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits {
    @JsonProperty("Benefit")
    public Boolean benefit;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits withBenefit(Boolean benefit) {
        this.benefit = benefit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitGroup")
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[] benefitGroup;
    public GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits withBenefitGroup(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[] benefitGroup) {
        this.benefitGroup = benefitGroup;
        return this;
    }
}
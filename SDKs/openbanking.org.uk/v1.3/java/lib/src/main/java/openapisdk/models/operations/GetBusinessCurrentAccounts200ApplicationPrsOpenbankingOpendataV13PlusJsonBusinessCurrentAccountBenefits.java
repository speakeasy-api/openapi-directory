package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits
 * Benefit
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits {
    @JsonProperty("Benefit")
    public Boolean benefit;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits withBenefit(Boolean benefit) {
        this.benefit = benefit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitGroup")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup[] benefitGroup;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits withBenefitGroup(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup[] benefitGroup) {
        this.benefitGroup = benefitGroup;
        return this;
    }
}
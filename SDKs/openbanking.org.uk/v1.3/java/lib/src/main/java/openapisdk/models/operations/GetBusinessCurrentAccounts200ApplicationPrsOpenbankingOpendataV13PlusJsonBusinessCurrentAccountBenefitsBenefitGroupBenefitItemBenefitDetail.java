package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail
 * Benefit detail
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitDescription")
    public String benefitDescription;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitDescription(String benefitDescription) {
        this.benefitDescription = benefitDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitID")
    public String benefitID;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitId(String benefitID) {
        this.benefitID = benefitID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitName")
    public String benefitName;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitName(String benefitName) {
        this.benefitName = benefitName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitType")
    public String benefitType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitType(String benefitType) {
        this.benefitType = benefitType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitValue")
    public String benefitValue;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitValue(String benefitValue) {
        this.benefitValue = benefitValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Counter")
    public Long counter;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withCounter(Long counter) {
        this.counter = counter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CriteriaType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[] criteriaType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withCriteriaType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[] criteriaType) {
        this.criteriaType = criteriaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultToAccounts")
    public Boolean defaultToAccounts;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withDefaultToAccounts(Boolean defaultToAccounts) {
        this.defaultToAccounts = defaultToAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumCriteria")
    public String maximumCriteria;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withMaximumCriteria(String maximumCriteria) {
        this.maximumCriteria = maximumCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumCriteria")
    public String minimumCriteria;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withMinimumCriteria(String minimumCriteria) {
        this.minimumCriteria = minimumCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PromotionEndDate")
    public String promotionEndDate;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withPromotionEndDate(String promotionEndDate) {
        this.promotionEndDate = promotionEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PromotionStartDate")
    public String promotionStartDate;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail withPromotionStartDate(String promotionStartDate) {
        this.promotionStartDate = promotionStartDate;
        return this;
    }
}
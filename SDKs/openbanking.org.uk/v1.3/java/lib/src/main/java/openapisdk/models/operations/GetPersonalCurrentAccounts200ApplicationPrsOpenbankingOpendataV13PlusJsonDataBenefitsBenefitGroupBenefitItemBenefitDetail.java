package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
 * Benefit detail
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitDescription")
    public String benefitDescription;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitDescription(String benefitDescription) {
        this.benefitDescription = benefitDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitID")
    public String benefitID;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitId(String benefitID) {
        this.benefitID = benefitID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitName")
    public String benefitName;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitName(String benefitName) {
        this.benefitName = benefitName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitType")
    public String benefitType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitType(String benefitType) {
        this.benefitType = benefitType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BenefitValue")
    public String benefitValue;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withBenefitValue(String benefitValue) {
        this.benefitValue = benefitValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Counter")
    public Long counter;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withCounter(Long counter) {
        this.counter = counter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CriteriaType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[] criteriaType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withCriteriaType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[] criteriaType) {
        this.criteriaType = criteriaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultToAccounts")
    public Boolean defaultToAccounts;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withDefaultToAccounts(Boolean defaultToAccounts) {
        this.defaultToAccounts = defaultToAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumCriteria")
    public String maximumCriteria;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withMaximumCriteria(String maximumCriteria) {
        this.maximumCriteria = maximumCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumCriteria")
    public String minimumCriteria;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withMinimumCriteria(String minimumCriteria) {
        this.minimumCriteria = minimumCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PromotionEndDate")
    public String promotionEndDate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withPromotionEndDate(String promotionEndDate) {
        this.promotionEndDate = promotionEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PromotionStartDate")
    public String promotionStartDate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail withPromotionStartDate(String promotionStartDate) {
        this.promotionStartDate = promotionStartDate;
        return this;
    }
}
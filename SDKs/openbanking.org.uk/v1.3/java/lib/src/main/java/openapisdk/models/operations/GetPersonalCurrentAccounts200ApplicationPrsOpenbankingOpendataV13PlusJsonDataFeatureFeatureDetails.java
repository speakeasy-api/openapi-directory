package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails
 * Feature Details
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CriteriaType")
    public String criteriaType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withCriteriaType(String criteriaType) {
        this.criteriaType = criteriaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfChange")
    public String dateOfChange;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withDateOfChange(String dateOfChange) {
        this.dateOfChange = dateOfChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeatureDescription")
    public String featureDescription;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withFeatureDescription(String featureDescription) {
        this.featureDescription = featureDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeatureName")
    public String featureName;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeatureSubType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum featureSubType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withFeatureSubType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum featureSubType) {
        this.featureSubType = featureSubType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeatureType")
    public String featureType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withFeatureType(String featureType) {
        this.featureType = featureType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeatureValue")
    public String featureValue;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withFeatureValue(String featureValue) {
        this.featureValue = featureValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LengthPromotionalInDays")
    public Long lengthPromotionalInDays;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withLengthPromotionalInDays(Long lengthPromotionalInDays) {
        this.lengthPromotionalInDays = lengthPromotionalInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPromotionOrFutureTerms")
    public String startPromotionOrFutureTerms;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withStartPromotionOrFutureTerms(String startPromotionOrFutureTerms) {
        this.startPromotionOrFutureTerms = startPromotionOrFutureTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopPromotionOrFutureTerms")
    public String stopPromotionOrFutureTerms;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails withStopPromotionOrFutureTerms(String stopPromotionOrFutureTerms) {
        this.stopPromotionOrFutureTerms = stopPromotionOrFutureTerms;
        return this;
    }
}
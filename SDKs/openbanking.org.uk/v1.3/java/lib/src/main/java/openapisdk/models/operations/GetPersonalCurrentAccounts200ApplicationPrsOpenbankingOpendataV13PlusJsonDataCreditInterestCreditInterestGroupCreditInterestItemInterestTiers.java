package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
 * Credit Interest Tiers
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("APRAERRate")
    public String apraerRate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withApraerRate(String apraerRate) {
        this.apraerRate = apraerRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DailyChargeForMaximum")
    public String dailyChargeForMaximum;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withDailyChargeForMaximum(String dailyChargeForMaximum) {
        this.dailyChargeForMaximum = dailyChargeForMaximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DailyChargeForMinimum")
    public String dailyChargeForMinimum;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withDailyChargeForMinimum(String dailyChargeForMinimum) {
        this.dailyChargeForMinimum = dailyChargeForMinimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InterestTier")
    public String interestTier;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withInterestTier(String interestTier) {
        this.interestTier = interestTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rate")
    public String rate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withRate(String rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RateComparisonType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum rateComparisonType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withRateComparisonType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum rateComparisonType) {
        this.rateComparisonType = rateComparisonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TierValueMaximum")
    public String tierValueMaximum;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withTierValueMaximum(String tierValueMaximum) {
        this.tierValueMaximum = tierValueMaximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TierValueMinimum")
    public String tierValueMinimum;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withTierValueMinimum(String tierValueMinimum) {
        this.tierValueMinimum = tierValueMinimum;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
 * Credit Interest Tiers
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("APRAERRate")
    public String apraerRate;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withApraerRate(String apraerRate) {
        this.apraerRate = apraerRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DailyChargeForMaximum")
    public String dailyChargeForMaximum;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withDailyChargeForMaximum(String dailyChargeForMaximum) {
        this.dailyChargeForMaximum = dailyChargeForMaximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DailyChargeForMinimum")
    public String dailyChargeForMinimum;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withDailyChargeForMinimum(String dailyChargeForMinimum) {
        this.dailyChargeForMinimum = dailyChargeForMinimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InterestTier")
    public String interestTier;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withInterestTier(String interestTier) {
        this.interestTier = interestTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rate")
    public String rate;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withRate(String rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RateComparisonType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum rateComparisonType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withRateComparisonType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum rateComparisonType) {
        this.rateComparisonType = rateComparisonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TierValueMaximum")
    public String tierValueMaximum;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withTierValueMaximum(String tierValueMaximum) {
        this.tierValueMaximum = tierValueMaximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TierValueMinimum")
    public String tierValueMinimum;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers withTierValueMinimum(String tierValueMinimum) {
        this.tierValueMinimum = tierValueMinimum;
        return this;
    }
}
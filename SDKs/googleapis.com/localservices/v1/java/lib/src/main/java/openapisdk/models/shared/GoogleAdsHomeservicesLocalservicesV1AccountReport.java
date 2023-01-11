package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAdsHomeservicesLocalservicesV1AccountReport
 * An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18
**/
public class GoogleAdsHomeservicesLocalservicesV1AccountReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregatorInfo")
    public GoogleAdsHomeservicesLocalservicesV1AggregatorInfo aggregatorInfo;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withAggregatorInfo(GoogleAdsHomeservicesLocalservicesV1AggregatorInfo aggregatorInfo) {
        this.aggregatorInfo = aggregatorInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageFiveStarRating")
    public Double averageFiveStarRating;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withAverageFiveStarRating(Double averageFiveStarRating) {
        this.averageFiveStarRating = averageFiveStarRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageWeeklyBudget")
    public Double averageWeeklyBudget;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withAverageWeeklyBudget(Double averageWeeklyBudget) {
        this.averageWeeklyBudget = averageWeeklyBudget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessName")
    public String businessName;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentPeriodChargedLeads")
    public String currentPeriodChargedLeads;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withCurrentPeriodChargedLeads(String currentPeriodChargedLeads) {
        this.currentPeriodChargedLeads = currentPeriodChargedLeads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentPeriodConnectedPhoneCalls")
    public String currentPeriodConnectedPhoneCalls;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withCurrentPeriodConnectedPhoneCalls(String currentPeriodConnectedPhoneCalls) {
        this.currentPeriodConnectedPhoneCalls = currentPeriodConnectedPhoneCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentPeriodPhoneCalls")
    public String currentPeriodPhoneCalls;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withCurrentPeriodPhoneCalls(String currentPeriodPhoneCalls) {
        this.currentPeriodPhoneCalls = currentPeriodPhoneCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentPeriodTotalCost")
    public Double currentPeriodTotalCost;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withCurrentPeriodTotalCost(Double currentPeriodTotalCost) {
        this.currentPeriodTotalCost = currentPeriodTotalCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionsLastTwoDays")
    public String impressionsLastTwoDays;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withImpressionsLastTwoDays(String impressionsLastTwoDays) {
        this.impressionsLastTwoDays = impressionsLastTwoDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneLeadResponsiveness")
    public Double phoneLeadResponsiveness;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withPhoneLeadResponsiveness(Double phoneLeadResponsiveness) {
        this.phoneLeadResponsiveness = phoneLeadResponsiveness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousPeriodChargedLeads")
    public String previousPeriodChargedLeads;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withPreviousPeriodChargedLeads(String previousPeriodChargedLeads) {
        this.previousPeriodChargedLeads = previousPeriodChargedLeads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousPeriodConnectedPhoneCalls")
    public String previousPeriodConnectedPhoneCalls;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withPreviousPeriodConnectedPhoneCalls(String previousPeriodConnectedPhoneCalls) {
        this.previousPeriodConnectedPhoneCalls = previousPeriodConnectedPhoneCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousPeriodPhoneCalls")
    public String previousPeriodPhoneCalls;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withPreviousPeriodPhoneCalls(String previousPeriodPhoneCalls) {
        this.previousPeriodPhoneCalls = previousPeriodPhoneCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousPeriodTotalCost")
    public Double previousPeriodTotalCost;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withPreviousPeriodTotalCost(Double previousPeriodTotalCost) {
        this.previousPeriodTotalCost = previousPeriodTotalCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReview")
    public Integer totalReview;
    public GoogleAdsHomeservicesLocalservicesV1AccountReport withTotalReview(Integer totalReview) {
        this.totalReview = totalReview;
        return this;
    }
}
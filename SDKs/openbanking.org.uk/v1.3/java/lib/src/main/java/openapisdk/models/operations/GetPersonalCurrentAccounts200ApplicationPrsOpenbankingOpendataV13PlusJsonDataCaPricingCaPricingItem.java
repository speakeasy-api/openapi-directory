package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem
 * Card Pricing
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfChange")
    public String dateOfChange;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem withDateOfChange(String dateOfChange) {
        this.dateOfChange = dateOfChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateAdjustment")
    public String exchangeRateAdjustment;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem withExchangeRateAdjustment(String exchangeRateAdjustment) {
        this.exchangeRateAdjustment = exchangeRateAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LengthPromotionalInDays")
    public Long lengthPromotionalInDays;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem withLengthPromotionalInDays(Long lengthPromotionalInDays) {
        this.lengthPromotionalInDays = lengthPromotionalInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPromotionOrFutureTerms")
    public String startPromotionOrFutureTerms;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem withStartPromotionOrFutureTerms(String startPromotionOrFutureTerms) {
        this.startPromotionOrFutureTerms = startPromotionOrFutureTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopPromotionOrFutureTerms")
    public String stopPromotionOrFutureTerms;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem withStopPromotionOrFutureTerms(String stopPromotionOrFutureTerms) {
        this.stopPromotionOrFutureTerms = stopPromotionOrFutureTerms;
        return this;
    }
}
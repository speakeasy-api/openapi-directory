package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem
 * Credit Interest item
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalculationFrequency")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum calculationFrequency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withCalculationFrequency(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum calculationFrequency) {
        this.calculationFrequency = calculationFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalculationMethod")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum calculationMethod;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withCalculationMethod(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum calculationMethod) {
        this.calculationMethod = calculationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfChange")
    public String dateOfChange;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withDateOfChange(String dateOfChange) {
        this.dateOfChange = dateOfChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public String endDate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FixedInterestLength")
    public Long fixedInterestLength;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withFixedInterestLength(Long fixedInterestLength) {
        this.fixedInterestLength = fixedInterestLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InterestNotes")
    public String interestNotes;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withInterestNotes(String interestNotes) {
        this.interestNotes = interestNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InterestRateType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum interestRateType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withInterestRateType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum interestRateType) {
        this.interestRateType = interestRateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InterestTiers")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[] interestTiers;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withInterestTiers(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[] interestTiers) {
        this.interestTiers = interestTiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LengthPromotionalInDays")
    public Long lengthPromotionalInDays;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withLengthPromotionalInDays(Long lengthPromotionalInDays) {
        this.lengthPromotionalInDays = lengthPromotionalInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethod")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum paymentMethod;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withPaymentMethod(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPromotionOrFutureTerms")
    public String startPromotionOrFutureTerms;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withStartPromotionOrFutureTerms(String startPromotionOrFutureTerms) {
        this.startPromotionOrFutureTerms = startPromotionOrFutureTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopPromotionOrFutureTerms")
    public String stopPromotionOrFutureTerms;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem withStopPromotionOrFutureTerms(String stopPromotionOrFutureTerms) {
        this.stopPromotionOrFutureTerms = stopPromotionOrFutureTerms;
        return this;
    }
}
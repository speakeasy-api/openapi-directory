package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft
 * Overdraft
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfChange")
    public String dateOfChange;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withDateOfChange(String dateOfChange) {
        this.dateOfChange = dateOfChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeNegotiableIndicator")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum feeChargeNegotiableIndicator;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withFeeChargeNegotiableIndicator(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum feeChargeNegotiableIndicator) {
        this.feeChargeNegotiableIndicator = feeChargeNegotiableIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndCharges")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges[] feesAndCharges;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withFeesAndCharges(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LengthPromotionalInDays")
    public Long lengthPromotionalInDays;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withLengthPromotionalInDays(Long lengthPromotionalInDays) {
        this.lengthPromotionalInDays = lengthPromotionalInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumMonthlyOverdraftCharge")
    public String maximumMonthlyOverdraftCharge;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withMaximumMonthlyOverdraftCharge(String maximumMonthlyOverdraftCharge) {
        this.maximumMonthlyOverdraftCharge = maximumMonthlyOverdraftCharge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverdraftProductState")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum overdraftProductState;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withOverdraftProductState(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum overdraftProductState) {
        this.overdraftProductState = overdraftProductState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverdraftTierBandSet")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet[] overdraftTierBandSet;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withOverdraftTierBandSet(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet[] overdraftTierBandSet) {
        this.overdraftTierBandSet = overdraftTierBandSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverdraftType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum overdraftType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withOverdraftType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum overdraftType) {
        this.overdraftType = overdraftType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPromotionOrFutureTerms")
    public String startPromotionOrFutureTerms;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withStartPromotionOrFutureTerms(String startPromotionOrFutureTerms) {
        this.startPromotionOrFutureTerms = startPromotionOrFutureTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopPromotionOrFutureTerms")
    public String stopPromotionOrFutureTerms;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withStopPromotionOrFutureTerms(String stopPromotionOrFutureTerms) {
        this.stopPromotionOrFutureTerms = stopPromotionOrFutureTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Term")
    public String term;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft withTerm(String term) {
        this.term = term;
        return this;
    }
}
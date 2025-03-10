/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft - Overdraft
 */
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft {
    /**
     * Date of the change if it refers to future terms
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfChange")
    public String dateOfChange;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withDateOfChange(String dateOfChange) {
        this.dateOfChange = dateOfChange;
        return this;
    }
    
    /**
     * Fee Charge negotiable Indicator
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeNegotiableIndicator")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum feeChargeNegotiableIndicator;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withFeeChargeNegotiableIndicator(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum feeChargeNegotiableIndicator) {
        this.feeChargeNegotiableIndicator = feeChargeNegotiableIndicator;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndCharges")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges[] feesAndCharges;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withFeesAndCharges(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    
    /**
     * Describes the length if only a duration is given instead of a date
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LengthPromotionalInDays")
    public Long lengthPromotionalInDays;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withLengthPromotionalInDays(Long lengthPromotionalInDays) {
        this.lengthPromotionalInDays = lengthPromotionalInDays;
        return this;
    }
    
    /**
     * Maximum Monthly Charge (MMC) for Overdraft fee and charges.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumMonthlyOverdraftCharge")
    public String maximumMonthlyOverdraftCharge;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withMaximumMonthlyOverdraftCharge(String maximumMonthlyOverdraftCharge) {
        this.maximumMonthlyOverdraftCharge = maximumMonthlyOverdraftCharge;
        return this;
    }
    
    /**
     * Notes on the overdraft
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    
    /**
     * Describes if the offering is promotional or a description of a future state.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverdraftProductState")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum overdraftProductState;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withOverdraftProductState(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum overdraftProductState) {
        this.overdraftProductState = overdraftProductState;
        return this;
    }
    
    /**
     * Overdraft Tier Band Set
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverdraftTierBandSet")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet[] overdraftTierBandSet;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withOverdraftTierBandSet(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet[] overdraftTierBandSet) {
        this.overdraftTierBandSet = overdraftTierBandSet;
        return this;
    }
    
    /**
     * Defines if the overdraft facility is committed 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverdraftType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum overdraftType;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withOverdraftType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum overdraftType) {
        this.overdraftType = overdraftType;
        return this;
    }
    
    /**
     * Describes the start date
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPromotionOrFutureTerms")
    public String startPromotionOrFutureTerms;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withStartPromotionOrFutureTerms(String startPromotionOrFutureTerms) {
        this.startPromotionOrFutureTerms = startPromotionOrFutureTerms;
        return this;
    }
    
    /**
     * Describes the end date
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopPromotionOrFutureTerms")
    public String stopPromotionOrFutureTerms;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withStopPromotionOrFutureTerms(String stopPromotionOrFutureTerms) {
        this.stopPromotionOrFutureTerms = stopPromotionOrFutureTerms;
        return this;
    }
    
    /**
     * The duration of the overdraft, if it is non permanent
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Term")
    public String term;

    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft withTerm(String term) {
        this.term = term;
        return this;
    }
    
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft(){}
}

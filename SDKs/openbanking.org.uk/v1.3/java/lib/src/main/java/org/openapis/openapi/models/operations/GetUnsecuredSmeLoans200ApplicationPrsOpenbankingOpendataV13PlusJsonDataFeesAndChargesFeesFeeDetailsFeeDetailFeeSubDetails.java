/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails - Fee Sub Details
 */
public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails {
    /**
     * Fee in GBP
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeAmount")
    public String feeAmount;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeAmount(String feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    
    /**
     * Triggering frequency of the fee
     */
    @JsonProperty("FeeFrequency")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum feeFrequency;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeFrequency(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum feeFrequency) {
        this.feeFrequency = feeFrequency;
        return this;
    }
    
    /**
     * Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeHigherTier")
    public Long feeHigherTier;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeHigherTier(Long feeHigherTier) {
        this.feeHigherTier = feeHigherTier;
        return this;
    }
    
    /**
     * Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeLowerTier")
    public Long feeLowerTier;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeLowerTier(Long feeLowerTier) {
        this.feeLowerTier = feeLowerTier;
        return this;
    }
    
    /**
     * Fee in GBP
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeMax")
    public String feeMax;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeMax(String feeMax) {
        this.feeMax = feeMax;
        return this;
    }
    
    /**
     * Fee in GBP
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeMin")
    public String feeMin;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeMin(String feeMin) {
        this.feeMin = feeMin;
        return this;
    }
    
    /**
     * % Rate
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeRate")
    public String feeRate;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeRate(String feeRate) {
        this.feeRate = feeRate;
        return this;
    }
    
    /**
     * Supplementary information for fees and charges
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndChargesNotes")
    public String feesAndChargesNotes;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeesAndChargesNotes(String feesAndChargesNotes) {
        this.feesAndChargesNotes = feesAndChargesNotes;
        return this;
    }
    
    /**
     * Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor
     */
    @JsonProperty("Negotiable")
    public Boolean negotiable;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withNegotiable(Boolean negotiable) {
        this.negotiable = negotiable;
        return this;
    }
    
    /**
     * Representative Rate
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepresentativeRate")
    public String representativeRate;

    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withRepresentativeRate(String representativeRate) {
        this.representativeRate = representativeRate;
        return this;
    }
    
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails(@JsonProperty("FeeFrequency") GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum feeFrequency, @JsonProperty("Negotiable") Boolean negotiable) {
        this.feeFrequency = feeFrequency;
        this.negotiable = negotiable;
  }
}

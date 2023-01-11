package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees
 * Fees
**/
public class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfChange")
    public String dateOfChange;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees withDateOfChange(String dateOfChange) {
        this.dateOfChange = dateOfChange;
        return this;
    }
    @JsonProperty("FeeDetails")
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[] feeDetails;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees withFeeDetails(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[] feeDetails) {
        this.feeDetails = feeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeHigherTier")
    public Long feeHigherTier;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees withFeeHigherTier(Long feeHigherTier) {
        this.feeHigherTier = feeHigherTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeLowerTier")
    public Long feeLowerTier;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees withFeeLowerTier(Long feeLowerTier) {
        this.feeLowerTier = feeLowerTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LengthPromotionalInDays")
    public Long lengthPromotionalInDays;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees withLengthPromotionalInDays(Long lengthPromotionalInDays) {
        this.lengthPromotionalInDays = lengthPromotionalInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartPromotionOrFutureTerms")
    public String startPromotionOrFutureTerms;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees withStartPromotionOrFutureTerms(String startPromotionOrFutureTerms) {
        this.startPromotionOrFutureTerms = startPromotionOrFutureTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StopPromotionOrFutureTerms")
    public String stopPromotionOrFutureTerms;
    public GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees withStopPromotionOrFutureTerms(String stopPromotionOrFutureTerms) {
        this.stopPromotionOrFutureTerms = stopPromotionOrFutureTerms;
        return this;
    }
}
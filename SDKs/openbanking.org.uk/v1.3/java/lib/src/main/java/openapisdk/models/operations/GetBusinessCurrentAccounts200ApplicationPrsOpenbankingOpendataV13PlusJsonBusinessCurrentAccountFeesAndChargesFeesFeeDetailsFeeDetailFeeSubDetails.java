package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
 * Fee Sub Details
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeAmount")
    public String feeAmount;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeAmount(String feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonProperty("FeeFrequency")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum feeFrequency;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeFrequency(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum feeFrequency) {
        this.feeFrequency = feeFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeHigherTier")
    public Long feeHigherTier;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeHigherTier(Long feeHigherTier) {
        this.feeHigherTier = feeHigherTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeLowerTier")
    public Long feeLowerTier;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeLowerTier(Long feeLowerTier) {
        this.feeLowerTier = feeLowerTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeMax")
    public String feeMax;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeMax(String feeMax) {
        this.feeMax = feeMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeMin")
    public String feeMin;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeMin(String feeMin) {
        this.feeMin = feeMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeRate")
    public String feeRate;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeRate(String feeRate) {
        this.feeRate = feeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndChargesNotes")
    public String feesAndChargesNotes;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeesAndChargesNotes(String feesAndChargesNotes) {
        this.feesAndChargesNotes = feesAndChargesNotes;
        return this;
    }
    @JsonProperty("Negotiable")
    public Boolean negotiable;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withNegotiable(Boolean negotiable) {
        this.negotiable = negotiable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepresentativeRate")
    public String representativeRate;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withRepresentativeRate(String representativeRate) {
        this.representativeRate = representativeRate;
        return this;
    }
}
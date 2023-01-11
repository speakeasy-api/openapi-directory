package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
 * Fee Sub Details
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeAmount")
    public String feeAmount;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeAmount(String feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonProperty("FeeFrequency")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum feeFrequency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeFrequency(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum feeFrequency) {
        this.feeFrequency = feeFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeHigherTier")
    public Long feeHigherTier;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeHigherTier(Long feeHigherTier) {
        this.feeHigherTier = feeHigherTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeLowerTier")
    public Long feeLowerTier;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeLowerTier(Long feeLowerTier) {
        this.feeLowerTier = feeLowerTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeMax")
    public String feeMax;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeMax(String feeMax) {
        this.feeMax = feeMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeMin")
    public String feeMin;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeMin(String feeMin) {
        this.feeMin = feeMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeRate")
    public String feeRate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeeRate(String feeRate) {
        this.feeRate = feeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndChargesNotes")
    public String feesAndChargesNotes;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withFeesAndChargesNotes(String feesAndChargesNotes) {
        this.feesAndChargesNotes = feesAndChargesNotes;
        return this;
    }
    @JsonProperty("Negotiable")
    public Boolean negotiable;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withNegotiable(Boolean negotiable) {
        this.negotiable = negotiable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RepresentativeRate")
    public String representativeRate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails withRepresentativeRate(String representativeRate) {
        this.representativeRate = representativeRate;
        return this;
    }
}
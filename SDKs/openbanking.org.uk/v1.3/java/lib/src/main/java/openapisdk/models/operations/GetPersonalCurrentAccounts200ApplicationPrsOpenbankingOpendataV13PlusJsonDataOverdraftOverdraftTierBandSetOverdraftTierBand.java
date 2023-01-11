package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand
 * Tiers
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EAR")
    public String ear;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand withEar(String ear) {
        this.ear = ear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndCharges")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[] feesAndCharges;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand withFeesAndCharges(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TierBandIdentification")
    public String tierBandIdentification;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand withTierBandIdentification(String tierBandIdentification) {
        this.tierBandIdentification = tierBandIdentification;
        return this;
    }
    @JsonProperty("TierValueMaximum")
    public String tierValueMaximum;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand withTierValueMaximum(String tierValueMaximum) {
        this.tierValueMaximum = tierValueMaximum;
        return this;
    }
    @JsonProperty("TierValueMinimum")
    public String tierValueMinimum;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand withTierValueMinimum(String tierValueMinimum) {
        this.tierValueMinimum = tierValueMinimum;
        return this;
    }
}
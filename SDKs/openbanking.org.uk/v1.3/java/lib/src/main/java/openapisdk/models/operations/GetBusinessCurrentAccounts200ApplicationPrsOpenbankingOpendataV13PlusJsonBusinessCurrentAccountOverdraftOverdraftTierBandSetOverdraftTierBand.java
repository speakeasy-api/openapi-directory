package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand
 * Tiers
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EAR")
    public String ear;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand withEar(String ear) {
        this.ear = ear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndCharges")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[] feesAndCharges;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand withFeesAndCharges(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TierBandIdentification")
    public String tierBandIdentification;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand withTierBandIdentification(String tierBandIdentification) {
        this.tierBandIdentification = tierBandIdentification;
        return this;
    }
    @JsonProperty("TierValueMaximum")
    public String tierValueMaximum;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand withTierValueMaximum(String tierValueMaximum) {
        this.tierValueMaximum = tierValueMaximum;
        return this;
    }
    @JsonProperty("TierValueMinimum")
    public String tierValueMinimum;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand withTierValueMinimum(String tierValueMinimum) {
        this.tierValueMinimum = tierValueMinimum;
        return this;
    }
}
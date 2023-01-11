package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet
 * Tier Bandset
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArrangementOtherType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType arrangementOtherType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withArrangementOtherType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType arrangementOtherType) {
        this.arrangementOtherType = arrangementOtherType;
        return this;
    }
    @JsonProperty("ArrangementType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum arrangementType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withArrangementType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum arrangementType) {
        this.arrangementType = arrangementType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferAmount")
    public String bufferAmount;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withBufferAmount(String bufferAmount) {
        this.bufferAmount = bufferAmount;
        return this;
    }
    @JsonProperty("CMADefinedIndicator")
    public Boolean cmaDefinedIndicator;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withCmaDefinedIndicator(Boolean cmaDefinedIndicator) {
        this.cmaDefinedIndicator = cmaDefinedIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EAR")
    public String ear;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withEar(String ear) {
        this.ear = ear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndCharges")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges[] feesAndCharges;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withFeesAndCharges(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverdraftTierBand")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand[] overdraftTierBand;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withOverdraftTierBand(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand[] overdraftTierBand) {
        this.overdraftTierBand = overdraftTierBand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TierBandSetIdentification")
    public String tierBandSetIdentification;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet withTierBandSetIdentification(String tierBandSetIdentification) {
        this.tierBandSetIdentification = tierBandSetIdentification;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet
 * Tier Bandset
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArrangementOtherType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType arrangementOtherType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withArrangementOtherType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType arrangementOtherType) {
        this.arrangementOtherType = arrangementOtherType;
        return this;
    }
    @JsonProperty("ArrangementType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum arrangementType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withArrangementType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum arrangementType) {
        this.arrangementType = arrangementType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferAmount")
    public String bufferAmount;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withBufferAmount(String bufferAmount) {
        this.bufferAmount = bufferAmount;
        return this;
    }
    @JsonProperty("CMADefinedIndicator")
    public Boolean cmaDefinedIndicator;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withCmaDefinedIndicator(Boolean cmaDefinedIndicator) {
        this.cmaDefinedIndicator = cmaDefinedIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EAR")
    public String ear;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withEar(String ear) {
        this.ear = ear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeesAndCharges")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges[] feesAndCharges;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withFeesAndCharges(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges[] feesAndCharges) {
        this.feesAndCharges = feesAndCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverdraftTierBand")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand[] overdraftTierBand;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withOverdraftTierBand(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand[] overdraftTierBand) {
        this.overdraftTierBand = overdraftTierBand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TierBandSetIdentification")
    public String tierBandSetIdentification;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet withTierBandSetIdentification(String tierBandSetIdentification) {
        this.tierBandSetIdentification = tierBandSetIdentification;
        return this;
    }
}
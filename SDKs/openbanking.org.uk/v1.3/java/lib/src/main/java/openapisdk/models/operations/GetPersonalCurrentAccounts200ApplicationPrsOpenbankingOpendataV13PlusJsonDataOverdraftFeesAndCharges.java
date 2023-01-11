package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges
 * Overdraft Fees Charges
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeAmount")
    public String feeChargeAmount;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeAmount(String feeChargeAmount) {
        this.feeChargeAmount = feeChargeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeApplicationFrequency")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum feeChargeApplicationFrequency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeApplicationFrequency(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum feeChargeApplicationFrequency) {
        this.feeChargeApplicationFrequency = feeChargeApplicationFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeCalculationFrequency")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum feeChargeCalculationFrequency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeCalculationFrequency(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum feeChargeCalculationFrequency) {
        this.feeChargeCalculationFrequency = feeChargeCalculationFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeOtherApplicationFrequency")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency feeChargeOtherApplicationFrequency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeOtherApplicationFrequency(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency feeChargeOtherApplicationFrequency) {
        this.feeChargeOtherApplicationFrequency = feeChargeOtherApplicationFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeOtherCalculationFrequency")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency feeChargeOtherCalculationFrequency;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeOtherCalculationFrequency(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency feeChargeOtherCalculationFrequency) {
        this.feeChargeOtherCalculationFrequency = feeChargeOtherCalculationFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeOtherType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType feeChargeOtherType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeOtherType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType feeChargeOtherType) {
        this.feeChargeOtherType = feeChargeOtherType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeRate")
    public String feeChargeRate;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeRate(String feeChargeRate) {
        this.feeChargeRate = feeChargeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeRateOtherType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType feeChargeRateOtherType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeRateOtherType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType feeChargeRateOtherType) {
        this.feeChargeRateOtherType = feeChargeRateOtherType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeeChargeRateType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum feeChargeRateType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeRateType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum feeChargeRateType) {
        this.feeChargeRateType = feeChargeRateType;
        return this;
    }
    @JsonProperty("FeeChargeType")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum feeChargeType;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges withFeeChargeType(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum feeChargeType) {
        this.feeChargeType = feeChargeType;
        return this;
    }
}
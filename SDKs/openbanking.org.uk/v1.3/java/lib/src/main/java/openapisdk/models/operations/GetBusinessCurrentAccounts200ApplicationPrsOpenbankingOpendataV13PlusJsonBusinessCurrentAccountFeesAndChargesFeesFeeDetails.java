package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails
 * Fee Details
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails {
    @JsonProperty("FeeDetail")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail feeDetail;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails withFeeDetail(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail feeDetail) {
        this.feeDetail = feeDetail;
        return this;
    }
    @JsonProperty("FeeSubType")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum feeSubType;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails withFeeSubType(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum feeSubType) {
        this.feeSubType = feeSubType;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedProductTaxAndComplianceSettings
 * Details about taxation and legal compliance for managed products.
**/
public class ManagedProductTaxAndComplianceSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eeaWithdrawalRightType")
    public ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum eeaWithdrawalRightType;
    public ManagedProductTaxAndComplianceSettings withEeaWithdrawalRightType(ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum eeaWithdrawalRightType) {
        this.eeaWithdrawalRightType = eeaWithdrawalRightType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRateInfoByRegionCode")
    public java.util.Map<String, RegionalTaxRateInfo> taxRateInfoByRegionCode;
    public ManagedProductTaxAndComplianceSettings withTaxRateInfoByRegionCode(java.util.Map<String, RegionalTaxRateInfo> taxRateInfoByRegionCode) {
        this.taxRateInfoByRegionCode = taxRateInfoByRegionCode;
        return this;
    }
}
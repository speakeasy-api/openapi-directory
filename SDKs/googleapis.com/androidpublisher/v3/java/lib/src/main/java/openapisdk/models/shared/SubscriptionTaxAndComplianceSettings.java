package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionTaxAndComplianceSettings
 * Details about taxation, Google Play policy and legal compliance for subscription products.
**/
public class SubscriptionTaxAndComplianceSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eeaWithdrawalRightType")
    public SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum eeaWithdrawalRightType;
    public SubscriptionTaxAndComplianceSettings withEeaWithdrawalRightType(SubscriptionTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum eeaWithdrawalRightType) {
        this.eeaWithdrawalRightType = eeaWithdrawalRightType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRateInfoByRegionCode")
    public java.util.Map<String, RegionalTaxRateInfo> taxRateInfoByRegionCode;
    public SubscriptionTaxAndComplianceSettings withTaxRateInfoByRegionCode(java.util.Map<String, RegionalTaxRateInfo> taxRateInfoByRegionCode) {
        this.taxRateInfoByRegionCode = taxRateInfoByRegionCode;
        return this;
    }
}
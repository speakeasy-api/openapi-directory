import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalTaxRateInfo } from "./regionaltaxrateinfo";
/**
 * Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.
 */
export declare enum ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum {
    WithdrawalRightTypeUnspecified = "WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED",
    WithdrawalRightDigitalContent = "WITHDRAWAL_RIGHT_DIGITAL_CONTENT",
    WithdrawalRightService = "WITHDRAWAL_RIGHT_SERVICE"
}
/**
 * Details about taxation and legal compliance for managed products.
 */
export declare class ManagedProductTaxAndComplianceSettings extends SpeakeasyBase {
    /**
     * Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.
     */
    eeaWithdrawalRightType?: ManagedProductTaxAndComplianceSettingsEeaWithdrawalRightTypeEnum;
    /**
     * A mapping from region code to tax rate details. The keys are region codes as defined by Unicode's "CLDR".
     */
    taxRateInfoByRegionCode?: Record<string, RegionalTaxRateInfo>;
}

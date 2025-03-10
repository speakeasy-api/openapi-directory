import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The recency of the first and third party audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used.
 */
export declare enum FirstAndThirdPartyAudienceTargetingSettingRecencyEnum {
    RecencyNoLimit = "RECENCY_NO_LIMIT",
    Recency1Minute = "RECENCY_1_MINUTE",
    Recency5Minutes = "RECENCY_5_MINUTES",
    Recency10Minutes = "RECENCY_10_MINUTES",
    Recency15Minutes = "RECENCY_15_MINUTES",
    Recency30Minutes = "RECENCY_30_MINUTES",
    Recency1Hour = "RECENCY_1_HOUR",
    Recency2Hours = "RECENCY_2_HOURS",
    Recency3Hours = "RECENCY_3_HOURS",
    Recency6Hours = "RECENCY_6_HOURS",
    Recency12Hours = "RECENCY_12_HOURS",
    Recency1Day = "RECENCY_1_DAY",
    Recency2Days = "RECENCY_2_DAYS",
    Recency3Days = "RECENCY_3_DAYS",
    Recency5Days = "RECENCY_5_DAYS",
    Recency7Days = "RECENCY_7_DAYS",
    Recency10Days = "RECENCY_10_DAYS",
    Recency14Days = "RECENCY_14_DAYS",
    Recency15Days = "RECENCY_15_DAYS",
    Recency21Days = "RECENCY_21_DAYS",
    Recency28Days = "RECENCY_28_DAYS",
    Recency30Days = "RECENCY_30_DAYS",
    Recency40Days = "RECENCY_40_DAYS",
    Recency45Days = "RECENCY_45_DAYS",
    Recency60Days = "RECENCY_60_DAYS",
    Recency90Days = "RECENCY_90_DAYS",
    Recency120Days = "RECENCY_120_DAYS",
    Recency180Days = "RECENCY_180_DAYS",
    Recency270Days = "RECENCY_270_DAYS",
    Recency365Days = "RECENCY_365_DAYS"
}
/**
 * Details of first and third party audience targeting setting.
 */
export declare class FirstAndThirdPartyAudienceTargetingSetting extends SpeakeasyBase {
    /**
     * Required. First and third party audience id of the first and third party audience targeting setting. This id is first_and_third_party_audience_id.
     */
    firstAndThirdPartyAudienceId?: string;
    /**
     * The recency of the first and third party audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used.
     */
    recency?: FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
}

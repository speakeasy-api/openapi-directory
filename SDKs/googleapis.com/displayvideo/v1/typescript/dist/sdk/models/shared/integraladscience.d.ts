import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Display Viewability section (applicable to display line items only).
 */
export declare enum IntegralAdScienceDisplayViewabilityEnum {
    PerformanceViewabilityUnspecified = "PERFORMANCE_VIEWABILITY_UNSPECIFIED",
    PerformanceViewability40 = "PERFORMANCE_VIEWABILITY_40",
    PerformanceViewability50 = "PERFORMANCE_VIEWABILITY_50",
    PerformanceViewability60 = "PERFORMANCE_VIEWABILITY_60",
    PerformanceViewability70 = "PERFORMANCE_VIEWABILITY_70"
}
/**
 * Ad Fraud settings.
 */
export declare enum IntegralAdScienceExcludedAdFraudRiskEnum {
    SuspiciousActivityUnspecified = "SUSPICIOUS_ACTIVITY_UNSPECIFIED",
    SuspiciousActivityHr = "SUSPICIOUS_ACTIVITY_HR",
    SuspiciousActivityHmr = "SUSPICIOUS_ACTIVITY_HMR"
}
/**
 * Brand Safety - **Adult content**.
 */
export declare enum IntegralAdScienceExcludedAdultRiskEnum {
    AdultUnspecified = "ADULT_UNSPECIFIED",
    AdultHr = "ADULT_HR",
    AdultHmr = "ADULT_HMR"
}
/**
 * Brand Safety - **Alcohol**.
 */
export declare enum IntegralAdScienceExcludedAlcoholRiskEnum {
    AlcoholUnspecified = "ALCOHOL_UNSPECIFIED",
    AlcoholHr = "ALCOHOL_HR",
    AlcoholHmr = "ALCOHOL_HMR"
}
/**
 * Brand Safety - **Drugs**.
 */
export declare enum IntegralAdScienceExcludedDrugsRiskEnum {
    DrugsUnspecified = "DRUGS_UNSPECIFIED",
    DrugsHr = "DRUGS_HR",
    DrugsHmr = "DRUGS_HMR"
}
/**
 * Brand Safety - **Gambling**.
 */
export declare enum IntegralAdScienceExcludedGamblingRiskEnum {
    GamblingUnspecified = "GAMBLING_UNSPECIFIED",
    GamblingHr = "GAMBLING_HR",
    GamblingHmr = "GAMBLING_HMR"
}
/**
 * Brand Safety - **Hate speech**.
 */
export declare enum IntegralAdScienceExcludedHateSpeechRiskEnum {
    HateSpeechUnspecified = "HATE_SPEECH_UNSPECIFIED",
    HateSpeechHr = "HATE_SPEECH_HR",
    HateSpeechHmr = "HATE_SPEECH_HMR"
}
/**
 * Brand Safety - **Illegal downloads**.
 */
export declare enum IntegralAdScienceExcludedIllegalDownloadsRiskEnum {
    IllegalDownloadsUnspecified = "ILLEGAL_DOWNLOADS_UNSPECIFIED",
    IllegalDownloadsHr = "ILLEGAL_DOWNLOADS_HR",
    IllegalDownloadsHmr = "ILLEGAL_DOWNLOADS_HMR"
}
/**
 * Brand Safety - **Offensive language**.
 */
export declare enum IntegralAdScienceExcludedOffensiveLanguageRiskEnum {
    OffensiveLanguageUnspecified = "OFFENSIVE_LANGUAGE_UNSPECIFIED",
    OffensiveLanguageHr = "OFFENSIVE_LANGUAGE_HR",
    OffensiveLanguageHmr = "OFFENSIVE_LANGUAGE_HMR"
}
/**
 * Brand Safety - **Violence**.
 */
export declare enum IntegralAdScienceExcludedViolenceRiskEnum {
    ViolenceUnspecified = "VIOLENCE_UNSPECIFIED",
    ViolenceHr = "VIOLENCE_HR",
    ViolenceHmr = "VIOLENCE_HMR"
}
/**
 * True advertising quality (applicable to Display line items only).
 */
export declare enum IntegralAdScienceTraqScoreOptionEnum {
    TraqUnspecified = "TRAQ_UNSPECIFIED",
    Traq250 = "TRAQ_250",
    Traq500 = "TRAQ_500",
    Traq600 = "TRAQ_600",
    Traq700 = "TRAQ_700",
    Traq750 = "TRAQ_750",
    Traq875 = "TRAQ_875",
    Traq1000 = "TRAQ_1000"
}
/**
 * Video Viewability Section (applicable to video line items only).
 */
export declare enum IntegralAdScienceVideoViewabilityEnum {
    VideoViewabilityUnspecified = "VIDEO_VIEWABILITY_UNSPECIFIED",
    VideoViewability40 = "VIDEO_VIEWABILITY_40",
    VideoViewability50 = "VIDEO_VIEWABILITY_50",
    VideoViewability60 = "VIDEO_VIEWABILITY_60",
    VideoViewability70 = "VIDEO_VIEWABILITY_70"
}
/**
 * Details of Integral Ad Science settings.
 */
export declare class IntegralAdScience extends SpeakeasyBase {
    /**
     * The custom segment ID provided by Integral Ad Science. The ID must be between `1000001` and `1999999`, inclusive.
     */
    customSegmentId?: string[];
    /**
     * Display Viewability section (applicable to display line items only).
     */
    displayViewability?: IntegralAdScienceDisplayViewabilityEnum;
    /**
     * Brand Safety - **Unrateable**.
     */
    excludeUnrateable?: boolean;
    /**
     * Ad Fraud settings.
     */
    excludedAdFraudRisk?: IntegralAdScienceExcludedAdFraudRiskEnum;
    /**
     * Brand Safety - **Adult content**.
     */
    excludedAdultRisk?: IntegralAdScienceExcludedAdultRiskEnum;
    /**
     * Brand Safety - **Alcohol**.
     */
    excludedAlcoholRisk?: IntegralAdScienceExcludedAlcoholRiskEnum;
    /**
     * Brand Safety - **Drugs**.
     */
    excludedDrugsRisk?: IntegralAdScienceExcludedDrugsRiskEnum;
    /**
     * Brand Safety - **Gambling**.
     */
    excludedGamblingRisk?: IntegralAdScienceExcludedGamblingRiskEnum;
    /**
     * Brand Safety - **Hate speech**.
     */
    excludedHateSpeechRisk?: IntegralAdScienceExcludedHateSpeechRiskEnum;
    /**
     * Brand Safety - **Illegal downloads**.
     */
    excludedIllegalDownloadsRisk?: IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
    /**
     * Brand Safety - **Offensive language**.
     */
    excludedOffensiveLanguageRisk?: IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
    /**
     * Brand Safety - **Violence**.
     */
    excludedViolenceRisk?: IntegralAdScienceExcludedViolenceRiskEnum;
    /**
     * True advertising quality (applicable to Display line items only).
     */
    traqScoreOption?: IntegralAdScienceTraqScoreOptionEnum;
    /**
     * Video Viewability Section (applicable to video line items only).
     */
    videoViewability?: IntegralAdScienceVideoViewabilityEnum;
}

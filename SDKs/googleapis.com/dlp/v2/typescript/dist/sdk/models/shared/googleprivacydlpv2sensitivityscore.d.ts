import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The score applied to the resource.
 */
export declare enum GooglePrivacyDlpV2SensitivityScoreScoreEnum {
    SensitivityScoreUnspecified = "SENSITIVITY_SCORE_UNSPECIFIED",
    SensitivityLow = "SENSITIVITY_LOW",
    SensitivityModerate = "SENSITIVITY_MODERATE",
    SensitivityHigh = "SENSITIVITY_HIGH"
}
/**
 * Score is a summary of all elements in the data profile. A higher number means more sensitive.
 */
export declare class GooglePrivacyDlpV2SensitivityScore extends SpeakeasyBase {
    /**
     * The score applied to the resource.
     */
    score?: GooglePrivacyDlpV2SensitivityScoreScoreEnum;
}

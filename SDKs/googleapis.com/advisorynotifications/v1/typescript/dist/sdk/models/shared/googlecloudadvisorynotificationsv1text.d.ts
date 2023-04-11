import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the localization.
 */
export declare enum GoogleCloudAdvisorynotificationsV1TextLocalizationStateEnum {
    LocalizationStateUnspecified = "LOCALIZATION_STATE_UNSPECIFIED",
    LocalizationStateNotApplicable = "LOCALIZATION_STATE_NOT_APPLICABLE",
    LocalizationStatePending = "LOCALIZATION_STATE_PENDING",
    LocalizationStateCompleted = "LOCALIZATION_STATE_COMPLETED"
}
/**
 * A text object containing the English text and its localized copies.
 */
export declare class GoogleCloudAdvisorynotificationsV1Text extends SpeakeasyBase {
    /**
     * The English copy.
     */
    enText?: string;
    /**
     * Status of the localization.
     */
    localizationState?: GoogleCloudAdvisorynotificationsV1TextLocalizationStateEnum;
    /**
     * The requested localized copy (if applicable).
     */
    localizedText?: string;
}

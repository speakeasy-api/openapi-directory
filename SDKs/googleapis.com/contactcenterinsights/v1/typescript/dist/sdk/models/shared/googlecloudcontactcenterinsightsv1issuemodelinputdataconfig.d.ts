import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.
 */
export declare enum GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}
/**
 * Configs for the input data used to create the issue model.
 */
export declare class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig extends SpeakeasyBase {
    /**
     * A filter to reduce the conversations used for training the model to a specific subset.
     */
    filter?: string;
    /**
     * Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.
     */
    medium?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;
    /**
     * Output only. Number of conversations used in training. Output only.
     */
    trainingConversationsCount?: string;
}
/**
 * Configs for the input data used to create the issue model.
 */
export declare class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput extends SpeakeasyBase {
    /**
     * A filter to reduce the conversations used for training the model to a specific subset.
     */
    filter?: string;
    /**
     * Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.
     */
    medium?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;
}

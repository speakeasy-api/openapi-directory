import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. The type of how to aggregate answers.
 */
export declare enum GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum {
    StringAggregationTypeUnspecified = "STRING_AGGREGATION_TYPE_UNSPECIFIED",
    MajorityVote = "MAJORITY_VOTE",
    UnanimousVote = "UNANIMOUS_VOTE",
    NoAggregation = "NO_AGGREGATION"
}
/**
 * Config for image classification human labeling task.
 */
export declare class GoogleCloudDatalabelingV1beta1ImageClassificationConfig extends SpeakeasyBase {
    /**
     * Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image.
     */
    allowMultiLabel?: boolean;
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string;
    /**
     * Optional. The type of how to aggregate answers.
     */
    answerAggregationType?: GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1SentimentConfig } from "./googleclouddatalabelingv1beta1sentimentconfig";
/**
 * Config for text classification human labeling task.
 */
export declare class GoogleCloudDatalabelingV1beta1TextClassificationConfig extends SpeakeasyBase {
    /**
     * Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one text segment.
     */
    allowMultiLabel?: boolean;
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string;
    /**
     * Config for setting up sentiments.
     */
    sentimentConfig?: GoogleCloudDatalabelingV1beta1SentimentConfig;
}

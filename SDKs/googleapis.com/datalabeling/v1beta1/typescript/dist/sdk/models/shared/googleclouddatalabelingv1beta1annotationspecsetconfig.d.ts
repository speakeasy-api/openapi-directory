import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Annotation spec set with the setting of allowing multi labels or not.
 */
export declare class GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig extends SpeakeasyBase {
    /**
     * Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set.
     */
    allowMultiLabel?: boolean;
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string;
}

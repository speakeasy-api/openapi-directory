import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry } from "./googleclouddatalabelingv1beta1confidencemetricsentry";
export declare class GoogleCloudDatalabelingV1beta1PrCurve extends SpeakeasyBase {
    /**
     * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
     */
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve.
     */
    areaUnderCurve?: number;
    /**
     * Entries that make up the precision-recall graph. Each entry is a "point" on the graph drawn for a different `confidence_threshold`.
     */
    confidenceMetricsEntries?: GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry[];
    /**
     * Mean average prcision of this curve.
     */
    meanAveragePrecision?: number;
}

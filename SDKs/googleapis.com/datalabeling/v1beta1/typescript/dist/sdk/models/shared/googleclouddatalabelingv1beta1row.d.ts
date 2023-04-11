import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry } from "./googleclouddatalabelingv1beta1confusionmatrixentry";
/**
 * A row in the confusion matrix. Each entry in this row has the same ground truth label.
 */
export declare class GoogleCloudDatalabelingV1beta1Row extends SpeakeasyBase {
    /**
     * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
     */
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * A list of the confusion matrix entries. One entry for each possible predicted label.
     */
    entries?: GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry[];
}

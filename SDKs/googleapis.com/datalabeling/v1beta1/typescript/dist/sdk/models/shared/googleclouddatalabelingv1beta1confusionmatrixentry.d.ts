import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
export declare class GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry extends SpeakeasyBase {
    /**
     * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
     */
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * Number of items predicted to have this label. (The ground truth label for these items is the `Row.annotationSpec` of this entry's parent.)
     */
    itemCount?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
/**
 * An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
 */
export declare class GoogleCloudDatalabelingV1beta1AnnotationSpecSet extends SpeakeasyBase {
    /**
     * Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task.
     */
    annotationSpecs?: GoogleCloudDatalabelingV1beta1AnnotationSpec[];
    /**
     * Output only. The names of any related resources that are blocking changes to the annotation spec set.
     */
    blockingResources?: string[];
    /**
     * Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long.
     */
    description?: string;
    /**
     * Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters.
     */
    displayName?: string;
    /**
     * Output only. The AnnotationSpecSet resource name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"
     */
    name?: string;
}

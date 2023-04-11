import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
 */
export declare class GoogleCloudDatalabelingV1beta1AnnotationSpec extends SpeakeasyBase {
    /**
     * Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long.
     */
    description?: string;
    /**
     * Required. The display name of the AnnotationSpec. Maximum of 64 characters.
     */
    displayName?: string;
    /**
     * Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes `dog` and `cat`, might contain one AnnotationSpec with `{ display_name: "dog", index: 0 }` and one AnnotationSpec with `{ display_name: "cat", index: 1 }`. This is especially useful for model training as it encodes the string labels into numeric values.
     */
    index?: number;
}

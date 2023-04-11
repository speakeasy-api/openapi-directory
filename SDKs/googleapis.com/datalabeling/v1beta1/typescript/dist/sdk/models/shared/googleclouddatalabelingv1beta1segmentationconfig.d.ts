import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for image segmentation
 */
export declare class GoogleCloudDatalabelingV1beta1SegmentationConfig extends SpeakeasyBase {
    /**
     * Required. Annotation spec set resource name. format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}
     */
    annotationSpecSet?: string;
    /**
     * Instruction message showed on labelers UI.
     */
    instructionMessage?: string;
}

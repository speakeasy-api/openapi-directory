import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for image bounding poly (and bounding box) human labeling task.
 */
export declare class GoogleCloudDatalabelingV1beta1BoundingPolyConfig extends SpeakeasyBase {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string;
    /**
     * Optional. Instruction message showed on contributors UI.
     */
    instructionMessage?: string;
}

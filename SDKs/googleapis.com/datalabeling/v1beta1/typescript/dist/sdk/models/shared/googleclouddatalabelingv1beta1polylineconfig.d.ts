import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for image polyline human labeling task.
 */
export declare class GoogleCloudDatalabelingV1beta1PolylineConfig extends SpeakeasyBase {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string;
    /**
     * Optional. Instruction message showed on contributors UI.
     */
    instructionMessage?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics about annotation specs.
 */
export declare class GoogleCloudDatalabelingV1beta1LabelStats extends SpeakeasyBase {
    /**
     * Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.
     */
    exampleCount?: Record<string, string>;
}

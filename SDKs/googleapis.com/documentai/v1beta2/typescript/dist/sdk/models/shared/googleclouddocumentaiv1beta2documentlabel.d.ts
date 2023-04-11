import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.
 */
export declare class GoogleCloudDocumentaiV1beta2DocumentLabel extends SpeakeasyBase {
    /**
     * Label is generated AutoML model. This field stores the full resource name of the AutoML model. Format: `projects/{project-id}/locations/{location-id}/models/{model-id}`
     */
    automlModel?: string;
    /**
     * Confidence score between 0 and 1 for label assignment.
     */
    confidence?: number;
    /**
     * Name of the label. When the label is generated from AutoML Text Classification model, this field represents the name of the category.
     */
    name?: string;
}

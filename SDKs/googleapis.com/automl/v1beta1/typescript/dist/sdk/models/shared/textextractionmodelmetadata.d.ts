import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Model metadata that is specific to text extraction.
 */
export declare class TextExtractionModelMetadata extends SpeakeasyBase {
    /**
     * Indicates the scope of model use case. * `default`: Use to train a general text extraction model. Default value. * `health_care`: Use to train a text extraction model that is tuned for healthcare applications.
     */
    modelHint?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for TEXT_DETECTION.
 */
export declare class GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig extends SpeakeasyBase {
    /**
     * Language hint can be specified if the language to be detected is known a priori. It can increase the accuracy of the detection. Language hint must be language code in BCP-47 format. Automatic language detection is performed if no hint is provided.
     */
    languageHints?: string[];
    /**
     * Model to use for text detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
     */
    model?: string;
}

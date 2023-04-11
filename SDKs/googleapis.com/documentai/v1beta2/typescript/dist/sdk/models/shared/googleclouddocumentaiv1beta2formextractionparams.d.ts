import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2KeyValuePairHint } from "./googleclouddocumentaiv1beta2keyvaluepairhint";
/**
 * Parameters to control form extraction behavior.
 */
export declare class GoogleCloudDocumentaiV1beta2FormExtractionParams extends SpeakeasyBase {
    /**
     * Whether to enable form extraction.
     */
    enabled?: boolean;
    /**
     * Reserved for future use.
     */
    keyValuePairHints?: GoogleCloudDocumentaiV1beta2KeyValuePairHint[];
    /**
     * Model version of the form extraction system. Default is "builtin/stable". Specify "builtin/latest" for the latest model. For custom form models, specify: "custom/{model_name}". Model name format is "bucket_name/path/to/modeldir" corresponding to "gs://bucket_name/path/to/modeldir" where annotated examples are stored.
     */
    modelVersion?: string;
}

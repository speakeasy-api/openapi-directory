import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters to control entity extraction behavior.
 */
export declare class GoogleCloudDocumentaiV1beta2EntityExtractionParams extends SpeakeasyBase {
    /**
     * Whether to enable entity extraction.
     */
    enabled?: boolean;
    /**
     * Model version of the entity extraction. Default is "builtin/stable". Specify "builtin/latest" for the latest model.
     */
    modelVersion?: string;
}

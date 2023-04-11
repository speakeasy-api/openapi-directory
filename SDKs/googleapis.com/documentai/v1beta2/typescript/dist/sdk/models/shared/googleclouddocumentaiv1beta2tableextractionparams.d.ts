import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2TableBoundHint } from "./googleclouddocumentaiv1beta2tableboundhint";
/**
 * Parameters to control table extraction behavior.
 */
export declare class GoogleCloudDocumentaiV1beta2TableExtractionParams extends SpeakeasyBase {
    /**
     * Whether to enable table extraction.
     */
    enabled?: boolean;
    /**
     * Optional. Reserved for future use.
     */
    headerHints?: string[];
    /**
     * Model version of the table extraction system. Default is "builtin/stable". Specify "builtin/latest" for the latest model.
     */
    modelVersion?: string;
    /**
     * Optional. Table bounding box hints that can be provided to complex cases which our algorithm cannot locate the table(s) in.
     */
    tableBoundHints?: GoogleCloudDocumentaiV1beta2TableBoundHint[];
}

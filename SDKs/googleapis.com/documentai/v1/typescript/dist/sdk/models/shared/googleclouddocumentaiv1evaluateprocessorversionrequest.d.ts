import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1BatchDocumentsInputConfig } from "./googleclouddocumentaiv1batchdocumentsinputconfig";
/**
 * Evaluates the given ProcessorVersion against the supplied documents.
 */
export declare class GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest extends SpeakeasyBase {
    /**
     * The common config to specify a set of documents used as input.
     */
    evaluationDocuments?: GoogleCloudDocumentaiV1BatchDocumentsInputConfig;
}

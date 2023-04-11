import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig } from "./googleclouddocumentaiv1beta3batchdocumentsinputconfig";
/**
 * The input data used to train a new `ProcessorVersion`.
 */
export declare class GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData extends SpeakeasyBase {
    /**
     * The common config to specify a set of documents used as input.
     */
    testDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
    /**
     * The common config to specify a set of documents used as input.
     */
    trainingDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
}

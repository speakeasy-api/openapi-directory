import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1BatchDocumentsInputConfig } from "./googleclouddocumentaiv1batchdocumentsinputconfig";
/**
 * The input data used to train a new `ProcessorVersion`.
 */
export declare class GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData extends SpeakeasyBase {
    /**
     * The common config to specify a set of documents used as input.
     */
    testDocuments?: GoogleCloudDocumentaiV1BatchDocumentsInputConfig;
    /**
     * The common config to specify a set of documents used as input.
     */
    trainingDocuments?: GoogleCloudDocumentaiV1BatchDocumentsInputConfig;
}

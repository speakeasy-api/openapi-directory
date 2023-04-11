import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig } from "./googleclouddocumentaiv1beta3batchdocumentsinputconfig";
import { GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig } from "./googleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig";
import { GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig } from "./googleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig";
import { GoogleCloudDocumentaiV1beta3DocumentOutputConfig } from "./googleclouddocumentaiv1beta3documentoutputconfig";
import { GoogleCloudDocumentaiV1beta3ProcessOptions } from "./googleclouddocumentaiv1beta3processoptions";
/**
 * Request message for batch process document method.
 */
export declare class GoogleCloudDocumentaiV1beta3BatchProcessRequest extends SpeakeasyBase {
    /**
     * Config that controls the output of documents. All documents will be written as a JSON file.
     */
    documentOutputConfig?: GoogleCloudDocumentaiV1beta3DocumentOutputConfig;
    /**
     * The input config for each single document in the batch process.
     */
    inputConfigs?: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig[];
    /**
     * The common config to specify a set of documents used as input.
     */
    inputDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
    /**
     * The message for output config in batch process.
     */
    outputConfig?: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig;
    /**
     * Options for Process API
     */
    processOptions?: GoogleCloudDocumentaiV1beta3ProcessOptions;
    /**
     * Whether Human Review feature should be skipped for this request. Default to false.
     */
    skipHumanReview?: boolean;
}

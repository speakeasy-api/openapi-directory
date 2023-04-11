import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1BatchDocumentsInputConfig } from "./googleclouddocumentaiv1batchdocumentsinputconfig";
import { GoogleCloudDocumentaiV1DocumentOutputConfig } from "./googleclouddocumentaiv1documentoutputconfig";
/**
 * Request message for batch process document method.
 */
export declare class GoogleCloudDocumentaiV1BatchProcessRequest extends SpeakeasyBase {
    /**
     * Config that controls the output of documents. All documents will be written as a JSON file.
     */
    documentOutputConfig?: GoogleCloudDocumentaiV1DocumentOutputConfig;
    /**
     * The common config to specify a set of documents used as input.
     */
    inputDocuments?: GoogleCloudDocumentaiV1BatchDocumentsInputConfig;
    /**
     * Whether Human Review feature should be skipped for this request. Default to false.
     */
    skipHumanReview?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig } from "./googleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig";
/**
 * Config that controls the output of documents. All documents will be written as a JSON file.
 */
export declare class GoogleCloudDocumentaiV1beta3DocumentOutputConfig extends SpeakeasyBase {
    /**
     * The configuration used when outputting documents.
     */
    gcsOutputConfig?: GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig;
}

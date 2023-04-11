import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1GcsDocuments } from "./googleclouddocumentaiv1gcsdocuments";
import { GoogleCloudDocumentaiV1GcsPrefix } from "./googleclouddocumentaiv1gcsprefix";
/**
 * The common config to specify a set of documents used as input.
 */
export declare class GoogleCloudDocumentaiV1BatchDocumentsInputConfig extends SpeakeasyBase {
    /**
     * Specifies a set of documents on Cloud Storage.
     */
    gcsDocuments?: GoogleCloudDocumentaiV1GcsDocuments;
    /**
     * Specifies all documents on Cloud Storage with a common prefix.
     */
    gcsPrefix?: GoogleCloudDocumentaiV1GcsPrefix;
}

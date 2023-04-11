import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3GcsDocuments } from "./googleclouddocumentaiv1beta3gcsdocuments";
import { GoogleCloudDocumentaiV1beta3GcsPrefix } from "./googleclouddocumentaiv1beta3gcsprefix";
/**
 * The common config to specify a set of documents used as input.
 */
export declare class GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig extends SpeakeasyBase {
    /**
     * Specifies a set of documents on Cloud Storage.
     */
    gcsDocuments?: GoogleCloudDocumentaiV1beta3GcsDocuments;
    /**
     * Specifies all documents on Cloud Storage with a common prefix.
     */
    gcsPrefix?: GoogleCloudDocumentaiV1beta3GcsPrefix;
}

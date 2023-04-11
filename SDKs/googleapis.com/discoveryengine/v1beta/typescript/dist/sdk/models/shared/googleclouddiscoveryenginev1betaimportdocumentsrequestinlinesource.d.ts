import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaDocument } from "./googleclouddiscoveryenginev1betadocument";
/**
 * The inline source for the input config for ImportDocuments method.
 */
export declare class GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource extends SpeakeasyBase {
    /**
     * Required. A list of documents to update/create. Each document must have a valid Document.id. Recommended max of 100 items.
     */
    documents?: GoogleCloudDiscoveryengineV1betaDocument[];
}

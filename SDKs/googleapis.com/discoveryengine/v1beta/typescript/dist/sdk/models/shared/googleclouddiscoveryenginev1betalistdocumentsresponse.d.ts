import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaDocument } from "./googleclouddiscoveryenginev1betadocument";
/**
 * Response message for DocumentService.ListDocuments method.
 */
export declare class GoogleCloudDiscoveryengineV1betaListDocumentsResponse extends SpeakeasyBase {
    /**
     * The Documents.
     */
    documents?: GoogleCloudDiscoveryengineV1betaDocument[];
    /**
     * A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}

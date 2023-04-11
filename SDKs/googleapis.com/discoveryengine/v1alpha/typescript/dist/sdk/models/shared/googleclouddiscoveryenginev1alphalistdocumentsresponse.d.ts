import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaDocument } from "./googleclouddiscoveryenginev1alphadocument";
/**
 * Response message for DocumentService.ListDocuments method.
 */
export declare class GoogleCloudDiscoveryengineV1alphaListDocumentsResponse extends SpeakeasyBase {
    /**
     * The Documents.
     */
    documents?: GoogleCloudDiscoveryengineV1alphaDocument[];
    /**
     * A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}

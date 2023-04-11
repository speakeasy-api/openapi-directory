import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedCertificate } from "./authorizedcertificate";
/**
 * Response message for AuthorizedCertificates.ListAuthorizedCertificates.
 */
export declare class ListAuthorizedCertificatesResponse extends SpeakeasyBase {
    /**
     * The SSL certificates the user is authorized to administer.
     */
    certificates?: AuthorizedCertificate[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * Response message for CertificateAuthorityService.ListCertificates.
 */
export declare class ListCertificatesResponse extends SpeakeasyBase {
    /**
     * The list of Certificates.
     */
    certificates?: Certificate[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCertificatesRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[];
}

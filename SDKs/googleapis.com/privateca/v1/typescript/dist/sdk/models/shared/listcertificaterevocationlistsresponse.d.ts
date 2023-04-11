import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateRevocationList } from "./certificaterevocationlist";
/**
 * Response message for CertificateAuthorityService.ListCertificateRevocationLists.
 */
export declare class ListCertificateRevocationListsResponse extends SpeakeasyBase {
    /**
     * The list of CertificateRevocationLists.
     */
    certificateRevocationLists?: CertificateRevocationList[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[];
}

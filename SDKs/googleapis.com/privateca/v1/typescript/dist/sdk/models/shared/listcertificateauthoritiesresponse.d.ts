import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthority } from "./certificateauthority";
/**
 * Response message for CertificateAuthorityService.ListCertificateAuthorities.
 */
export declare class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
    /**
     * The list of CertificateAuthorities.
     */
    certificateAuthorities?: CertificateAuthority[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[];
}

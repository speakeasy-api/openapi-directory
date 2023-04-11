import { SpeakeasyBase } from "../../../internal/utils";
import { CaPool } from "./capool";
/**
 * Response message for CertificateAuthorityService.ListCaPools.
 */
export declare class ListCaPoolsResponse extends SpeakeasyBase {
    /**
     * The list of CaPools.
     */
    caPools?: CaPool[];
    /**
     * A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * A list of locations (e.g. "us-west1") that could not be reached.
     */
    unreachable?: string[];
}

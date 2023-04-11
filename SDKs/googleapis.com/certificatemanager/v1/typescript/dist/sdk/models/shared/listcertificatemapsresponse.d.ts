import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateMap } from "./certificatemap";
/**
 * Response for the `ListCertificateMaps` method.
 */
export declare class ListCertificateMapsResponse extends SpeakeasyBase {
    /**
     * A list of certificate maps for the parent resource.
     */
    certificateMaps?: CertificateMap[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}

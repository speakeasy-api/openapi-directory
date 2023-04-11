import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateMapEntry } from "./certificatemapentry";
/**
 * Response for the `ListCertificateMapEntries` method.
 */
export declare class ListCertificateMapEntriesResponse extends SpeakeasyBase {
    /**
     * A list of certificate map entries for the parent resource.
     */
    certificateMapEntries?: CertificateMapEntry[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}

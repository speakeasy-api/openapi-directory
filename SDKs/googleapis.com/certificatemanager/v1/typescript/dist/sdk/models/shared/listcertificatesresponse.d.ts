import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * Response for the `ListCertificates` method.
 */
export declare class ListCertificatesResponse extends SpeakeasyBase {
    /**
     * A list of certificates for the parent resource.
     */
    certificates?: Certificate[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[];
}

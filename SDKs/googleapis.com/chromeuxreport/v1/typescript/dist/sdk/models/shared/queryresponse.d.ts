import { SpeakeasyBase } from "../../../internal/utils";
import { RecordT } from "./record";
import { UrlNormalization } from "./urlnormalization";
/**
 * Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
 */
export declare class QueryResponse extends SpeakeasyBase {
    /**
     * Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
     */
    record?: RecordT;
    /**
     * Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
     */
    urlNormalizationDetails?: UrlNormalization;
}

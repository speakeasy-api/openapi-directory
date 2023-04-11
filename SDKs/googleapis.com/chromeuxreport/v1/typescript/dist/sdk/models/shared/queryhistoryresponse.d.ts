import { SpeakeasyBase } from "../../../internal/utils";
import { HistoryRecord } from "./historyrecord";
import { UrlNormalization } from "./urlnormalization";
/**
 * Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryHistoryRequest`. The returned response will have a history record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
 */
export declare class QueryHistoryResponse extends SpeakeasyBase {
    /**
     * HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions.
     */
    record?: HistoryRecord;
    /**
     * Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.
     */
    urlNormalizationDetails?: UrlNormalization;
}

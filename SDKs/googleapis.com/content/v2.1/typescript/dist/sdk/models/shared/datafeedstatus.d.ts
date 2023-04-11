import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatusError } from "./datafeedstatuserror";
/**
 * The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
 */
export declare class DatafeedStatus extends SpeakeasyBase {
    /**
     * The country for which the status is reported, represented as a CLDR territory code.
     */
    country?: string;
    /**
     * The ID of the feed for which the status is reported.
     */
    datafeedId?: string;
    /**
     * The list of errors occurring in the feed.
     */
    errors?: DatafeedStatusError[];
    /**
     * The feed label status is reported for.
     */
    feedLabel?: string;
    /**
     * The number of items in the feed that were processed.
     */
    itemsTotal?: string;
    /**
     * The number of items in the feed that were valid.
     */
    itemsValid?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeedStatus`"
     */
    kind?: string;
    /**
     * The two-letter ISO 639-1 language for which the status is reported.
     */
    language?: string;
    /**
     * The last date at which the feed was uploaded.
     */
    lastUploadDate?: string;
    /**
     * The processing status of the feed. Acceptable values are: - "`"`failure`": The feed could not be processed or all items had errors.`" - "`in progress`": The feed is being processed. - "`none`": The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status. - "`success`": The feed was processed successfully, though some items might have had errors.
     */
    processingStatus?: string;
    /**
     * The list of errors occurring in the feed.
     */
    warnings?: DatafeedStatusError[];
}

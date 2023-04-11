import { SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";
/**
 * A batch entry encoding a single non-batch datafeeds request.
 */
export declare class DatafeedsCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * Datafeed configuration data.
     */
    datafeed?: Datafeed;
    /**
     * The ID of the data feed to get, delete or fetch.
     */
    datafeedId?: string;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`delete`" - "`fetchNow`" - "`get`" - "`insert`" - "`update`"
     */
    method?: string;
}

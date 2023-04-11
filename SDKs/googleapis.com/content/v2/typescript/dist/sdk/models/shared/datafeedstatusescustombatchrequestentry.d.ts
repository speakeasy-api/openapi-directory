import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch entry encoding a single non-batch datafeedstatuses request.
 */
export declare class DatafeedstatusesCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that for multi-target datafeeds this parameter is required.
     */
    country?: string;
    /**
     * The ID of the data feed to get.
     */
    datafeedId?: string;
    /**
     * The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that for multi-target datafeeds this parameter is required.
     */
    language?: string;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`"
     */
    method?: string;
}

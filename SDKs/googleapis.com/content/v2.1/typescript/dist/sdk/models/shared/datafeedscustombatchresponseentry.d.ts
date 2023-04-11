import { SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch datafeeds response.
 */
export declare class DatafeedsCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * Datafeed configuration data.
     */
    datafeed?: Datafeed;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
}

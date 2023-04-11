import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatus } from "./datafeedstatus";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch datafeedstatuses response.
 */
export declare class DatafeedstatusesCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
     */
    datafeedStatus?: DatafeedStatus;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { DataPoint } from "./datapoint";
/**
 * Successful response
 */
export declare class ListDataPointChangesResponse extends SpeakeasyBase {
    /**
     * The data stream ID of the data source with data point changes.
     */
    dataSourceId?: string;
    /**
     * Deleted data points for the user. Note, for modifications this should be parsed before handling insertions.
     */
    deletedDataPoint?: DataPoint[];
    /**
     * Inserted data points for the user.
     */
    insertedDataPoint?: DataPoint[];
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
}

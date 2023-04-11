import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataScan } from "./googleclouddataplexv1datascan";
/**
 * List dataScans response.
 */
export declare class GoogleCloudDataplexV1ListDataScansResponse extends SpeakeasyBase {
    /**
     * DataScans (BASIC view only) under the given parent location.
     */
    dataScans?: GoogleCloudDataplexV1DataScan[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}

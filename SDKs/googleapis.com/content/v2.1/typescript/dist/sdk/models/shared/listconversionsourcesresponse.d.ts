import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionSource } from "./conversionsource";
/**
 * Response message for the ListConversionSources method.
 */
export declare class ListConversionSourcesResponse extends SpeakeasyBase {
    /**
     * List of conversion sources.
     */
    conversionSources?: ConversionSource[];
    /**
     * Token to be used to fetch the next results page.
     */
    nextPageToken?: string;
}

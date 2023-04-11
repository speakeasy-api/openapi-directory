import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If you do not specify a value for filter (see the Optional Parameters), your query will be matched to tags in all four Times dictionaries: subject, geographic location, organization and person. To use more than one, separate with commas.
 *
 * @remarks
 *
 */
export declare enum GetTimestagsFilterEnum {
    Des = "Des",
    Geo = "Geo",
    Org = "Org",
    Per = "Per"
}
export declare class GetTimestagsRequest extends SpeakeasyBase {
    /**
     * If you do not specify a value for filter (see the Optional Parameters), your query will be matched to tags in all four Times dictionaries: subject, geographic location, organization and person. To use more than one, separate with commas.
     *
     * @remarks
     *
     */
    filter?: GetTimestagsFilterEnum;
    /**
     * Sets the maximum number of results
     */
    max?: number;
    /**
     * Your search query
     */
    query: string;
}
export declare class GetTimestagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of tags
     */
    getTimestags200ApplicationJSONArrays?: string[][];
}

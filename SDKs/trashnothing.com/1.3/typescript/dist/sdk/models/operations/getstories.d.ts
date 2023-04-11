import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoriesSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetStoriesRequest extends SpeakeasyBase {
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * Find groups near the given latitude and longitude.
     */
    latitude?: number;
    /**
     * Find groups near the given latitude and longitude.
     */
    longitude?: number;
    /**
     * The page of stories to return.
     */
    page?: number;
    /**
     * The number of stories to return per page (must be >= 1 and <= 50).
     */
    perPage?: number;
    /**
     * How to sort the stories that are returned.  One of: date, distance, likes, views <br /><br /> Setting sort_by to date will sort posts from newest to oldest.  Setting sort_by to distance will sort posts from nearest to farthest.  Setting sort_by to likes will sort posts with the most likes first.  Setting sort_by to views will show the posts with the most views first.
     *
     * @remarks
     *
     */
    sortBy?: string;
}
/**
 * The stories and paging data.
 */
export declare class GetStories200ApplicationJSON extends SpeakeasyBase {
    stories?: shared.Story[];
}
export declare class GetStoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The stories and paging data.
     */
    getStories200ApplicationJSONObject?: GetStories200ApplicationJSON;
}

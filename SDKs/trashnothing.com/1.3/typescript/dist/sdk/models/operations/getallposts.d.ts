import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllPostsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetAllPostsRequest extends SpeakeasyBase {
    /**
     * Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.
     *
     * @remarks
     *
     */
    dateMax: Date;
    /**
     * Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.
     *
     * @remarks
     *
     */
    dateMin: Date;
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * The page of posts to return.
     */
    page?: number;
    /**
     * The number of posts to return per page (must be >= 1 and <= 50).
     */
    perPage?: number;
    /**
     * A comma separated list of the post types to return.  The available post types are: offer, wanted
     *
     * @remarks
     *
     */
    types: string;
}
/**
 * The posts.
 */
export declare class GetAllPosts200ApplicationJSON extends SpeakeasyBase {
    posts?: shared.Post[];
}
export declare class GetAllPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The posts.
     */
    getAllPosts200ApplicationJSONObject?: GetAllPosts200ApplicationJSON;
}

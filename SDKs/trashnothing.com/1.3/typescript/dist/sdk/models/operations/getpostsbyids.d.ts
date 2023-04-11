import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPostsByIdsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetPostsByIdsRequest extends SpeakeasyBase {
    /**
     * A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned.
     *
     * @remarks
     *
     */
    postIds: string;
}
/**
 * The posts.
 */
export declare class GetPostsByIds200ApplicationJSON extends SpeakeasyBase {
    /**
     * The IDs of posts that are forbidden for the current user.
     */
    forbidden?: string[];
    /**
     * The IDs of posts that weren't found (may have been deleted or never existed).
     */
    notFound?: string[];
    posts?: shared.Post[];
}
export declare class GetPostsByIdsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The posts.
     */
    getPostsByIds200ApplicationJSONObject?: GetPostsByIds200ApplicationJSON;
}

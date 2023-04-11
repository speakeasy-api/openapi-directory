import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserPostsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetUserPostsRequest extends SpeakeasyBase {
    /**
     * Only posts older than this UTC date and time will be returned.
     */
    dateMax?: Date;
    /**
     * Only posts newer than or equal to this UTC date and time will be returned.
     *
     * @remarks
     *
     */
    dateMin?: Date;
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.
     *
     * @remarks
     *
     */
    groupIds?: string;
    /**
     * If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.
     *
     * @remarks
     *
     */
    includeReposts?: number;
    /**
     * The latitude of a point around which to return posts.
     *
     * @remarks
     *
     */
    latitude?: number;
    /**
     * The longitude of a point around which to return posts.
     *
     * @remarks
     *
     */
    longitude?: number;
    /**
     * A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.
     *
     * @remarks
     *
     */
    outcomes?: string;
    /**
     * The page of posts to return.
     */
    page?: number;
    /**
     * The number of posts to return per page (must be >= 1 and <= 100).
     */
    perPage?: number;
    /**
     * The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.
     *
     * @remarks
     *
     */
    radius?: number;
    /**
     * How to sort the posts that are returned.  One of: date, active, distance <br /><br />
     *
     * @remarks
     * Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.
     *
     */
    sortBy?: string;
    /**
     * A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.
     *
     * @remarks
     *
     */
    sources: string;
    /**
     * A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin
     *
     * @remarks
     *
     */
    types: string;
    /**
     * The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.
     *
     * @remarks
     *
     */
    userId: string;
}
/**
 * The posts and paging data.
 */
export declare class GetUserPosts200ApplicationJSON extends SpeakeasyBase {
    /**
     * The index of the last post being returned (an integer between start_index and num_posts).
     */
    endIndex?: number;
    /**
     * The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
     *
     * @remarks
     *
     */
    groupIds?: string[];
    /**
     * The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
     *
     * @remarks
     *
     */
    lastListingsView?: Date;
    /**
     * The total number of pages available.
     */
    numPages?: number;
    /**
     * The total number of posts available.
     */
    numPosts?: number;
    /**
     * The page number of the posts being returned.
     */
    page?: number;
    /**
     * The number of posts being returned per page.
     */
    perPage?: number;
    posts?: shared.Post[];
    /**
     * The index of the first post being returned (an integer between 1 and num_posts).
     */
    startIndex?: number;
}
export declare class GetUserPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The posts and paging data.
     */
    getUserPosts200ApplicationJSONObject?: GetUserPosts200ApplicationJSON;
}

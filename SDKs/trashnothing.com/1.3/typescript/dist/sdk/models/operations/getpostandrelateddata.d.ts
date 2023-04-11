import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPostAndRelatedDataSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetPostAndRelatedDataRequest extends SpeakeasyBase {
    /**
     * The ID of the post to retrieve.
     */
    postId: string;
}
/**
 * The post and related data.
 */
export declare class GetPostAndRelatedData200ApplicationJSON extends SpeakeasyBase {
    author?: shared.User;
    /**
     * Count of offer posts made by the post author in the last 90 days.
     */
    authorOfferCount?: number;
    /**
     * Other active posts from the post author in the last 90 days. A maximum of 30 posts will be returned.
     *
     * @remarks
     *
     */
    authorPosts?: shared.Post[];
    /**
     * Count of wanted posts made by the post author in the last 90 days.
     */
    authorWantedCount?: number;
    /**
     * Whether or not the current user has bookmarked this post.  Will be null for api key requests and for the current users' posts.
     */
    bookmarked?: boolean;
    /**
     * Feedback the current user has left on the post author.
     */
    feedback?: shared.Feedback[];
    /**
     * The groups the post is published on.
     */
    groups?: shared.Group[];
    /**
     * An offer, wanted, admin, taken or received post.
     */
    post?: shared.Post;
    /**
     * Whether or not the current user has replied to this post.  Will be null for api key requests and for the current users' posts.
     */
    replied?: boolean;
    /**
     * Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.
     *
     * @remarks
     *
     */
    userCanReply?: boolean;
    /**
     * Whether or not the current user has previously viewed this post.  Will be null for api key requests and for the current users' posts.
     */
    viewed?: boolean;
}
export declare class GetPostAndRelatedDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The post and related data.
     */
    getPostAndRelatedData200ApplicationJSONObject?: GetPostAndRelatedData200ApplicationJSON;
}

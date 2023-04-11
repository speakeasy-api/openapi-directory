import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostReviewsRequest extends SpeakeasyBase {
    /**
     * The id of the App that will own this review
     */
    appId: string;
    /**
     * True if the review should be automatically approved. The default is False.
     */
    autoApprove?: boolean;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: string;
    /**
     * The review's description. Limited to 2000 characters.
     */
    description: string;
    /**
     * The review's headline. Limited to 50 characters.
     */
    headline: string;
    /**
     * True if a review can be created only by a user that has owned the app. The default is True.
     */
    mustOwnApp?: boolean;
    /**
     * The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)
     */
    rating: number;
    /**
     * The type for this review
     */
    type?: string;
    /**
     * The id of the User account that is posting this review
     */
    userAccountId?: string;
    /**
     * The id of the User that is posting this review
     */
    userId: string;
}
export declare class PostReviewsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

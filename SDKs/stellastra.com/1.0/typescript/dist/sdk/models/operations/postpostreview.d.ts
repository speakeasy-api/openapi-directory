import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The user_email must use a professional domain, free domains are not supported.
 */
export declare class PostPostReviewRequestBody extends SpeakeasyBase {
    rating: number;
    userEmail: string;
    userName?: string;
}
/**
 * The user's star rating, must be a single integer from [1, 2, 3, 4, 5]
 */
export declare enum PostPostReviewRatingEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5"
}
export declare class PostPostReviewRequest extends SpeakeasyBase {
    /**
     * The request body requires the user_email and rating. The parameter use_name is optional.
     */
    requestBody: PostPostReviewRequestBody;
    /**
     * The user's star rating, must be a single integer from [1, 2, 3, 4, 5]
     */
    rating: PostPostReviewRatingEnum;
    /**
     * User's email to which the review verification will be sent.
     */
    userEmail: string;
    /**
     * The user's name, defaults to empty string "".  Thus, if this is omitted, the email to the user will not use the user's name.
     */
    userName?: string;
}
/**
 * The 403 response can have many detailed response messages related to the user's email address validation
 */
export declare class PostPostReview403ApplicationJSON extends SpeakeasyBase {
    data?: string;
}
/**
 * This can appear because the authorization header is missing or malformed, or becuse the auth email and key pair is not authorized.
 */
export declare class PostPostReview401ApplicationJSON extends SpeakeasyBase {
    data?: string;
}
/**
 * A status code of 400 is returned when a required parameter is mising, such as 'rating' or 'user_email'.
 */
export declare class PostPostReview400ApplicationJSON extends SpeakeasyBase {
    data?: string;
}
/**
 * A response code of 200 means the request was succesful, and the user has been sent an email confirming their review.
 */
export declare class PostPostReview200ApplicationJSON extends SpeakeasyBase {
    data?: string;
}
export declare class PostPostReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A response code of 200 means the request was succesful, and the user has been sent an email confirming their review.
     */
    postPostReview200ApplicationJSONObject?: PostPostReview200ApplicationJSON;
    /**
     * A status code of 400 is returned when a required parameter is mising, such as 'rating' or 'user_email'.
     */
    postPostReview400ApplicationJSONObject?: PostPostReview400ApplicationJSON;
    /**
     * This can appear because the authorization header is missing or malformed, or because the auth email and key pair is not authorized.
     */
    postPostReview401ApplicationJSONObject?: PostPostReview401ApplicationJSON;
    /**
     * The 403 response can have many detailed response messages related to the user's email address validation
     */
    postPostReview403ApplicationJSONObject?: PostPostReview403ApplicationJSON;
}

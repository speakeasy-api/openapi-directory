import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchReviewsReviewIdRequest extends SpeakeasyBase {
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: string;
    /**
     * The review's description. Limited to 2000 characters.
     */
    description?: string;
    /**
     * The review's headline. Limited to 50 characters.
     */
    headline?: string;
    /**
     * The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)
     */
    rating?: number;
    /**
     * The id of the Review to be updated
     */
    reviewId: string;
    /**
     * The id of the User account that is posting this review
     */
    userAccountId?: string;
    /**
     * The id of the User that is updating this review
     */
    userId: string;
}
export declare class PatchReviewsReviewIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

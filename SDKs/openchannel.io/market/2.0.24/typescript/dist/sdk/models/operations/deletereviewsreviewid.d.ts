import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteReviewsReviewIdRequest extends SpeakeasyBase {
    /**
     * The id of the Review to be updated
     */
    reviewId: string;
    /**
     * The id of the User account that is emoving this review
     */
    userAccountId?: string;
    /**
     * The id of the User that is removing this review
     */
    userId: string;
}
export declare class DeleteReviewsReviewIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

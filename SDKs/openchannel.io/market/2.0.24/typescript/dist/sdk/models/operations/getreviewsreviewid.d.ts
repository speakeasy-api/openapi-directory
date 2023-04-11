import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReviewsReviewIdRequest extends SpeakeasyBase {
    /**
     * The id of the review to be located
     */
    reviewId: string;
}
export declare class GetReviewsReviewIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

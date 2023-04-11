import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WithdrawPostRequest extends SpeakeasyBase {
    /**
     * The ID of the post to withdraw.
     */
    postId: string;
}
export declare class WithdrawPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The updated post.
     */
    post?: shared.Post;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

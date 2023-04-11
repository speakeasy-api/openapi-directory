import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PromisePostRequest extends SpeakeasyBase {
    /**
     * The ID of the post to promise.
     */
    postId: string;
}
export declare class PromisePostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The updated post.
     */
    post?: shared.Post;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

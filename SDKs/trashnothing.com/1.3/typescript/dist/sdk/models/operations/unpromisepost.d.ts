import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnpromisePostRequest extends SpeakeasyBase {
    /**
     * The ID of the post to unpromise.
     */
    postId: string;
}
export declare class UnpromisePostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The updated post.
     */
    post?: shared.Post;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SatisfyPostRequest extends SpeakeasyBase {
    /**
     * The ID of the post to satisfy.
     */
    postId: string;
}
export declare class SatisfyPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The updated post.
     */
    post?: shared.Post;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

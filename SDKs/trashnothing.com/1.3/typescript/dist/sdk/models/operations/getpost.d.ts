import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPostSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetPostRequest extends SpeakeasyBase {
    /**
     * The ID of the post to retrieve.
     */
    postId: string;
}
export declare class GetPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The post.
     */
    post?: shared.Post;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

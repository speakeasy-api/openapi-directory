import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SharePostRequest extends SpeakeasyBase {
    /**
     * The ID of the post to share.
     */
    postId: string;
}
export declare class SharePostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

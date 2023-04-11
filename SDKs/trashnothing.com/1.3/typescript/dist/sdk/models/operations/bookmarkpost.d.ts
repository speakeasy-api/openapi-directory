import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BookmarkPostRequest extends SpeakeasyBase {
    postId: string;
}
export declare class BookmarkPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

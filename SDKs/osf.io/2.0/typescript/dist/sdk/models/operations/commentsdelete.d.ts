import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CommentsDeleteRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the comment you wish to delete.
     */
    commentId: string;
}
export declare class CommentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

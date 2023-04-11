import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the comment entity.
 */
export declare class NodesCommentCreateCommentAttributesInput extends SpeakeasyBase {
    /**
     * The content of the comment.
     */
    content?: string;
}
export declare class NodesCommentCreateCommentInput extends SpeakeasyBase {
    /**
     * The properties of the comment entity.
     */
    attributes?: NodesCommentCreateCommentAttributesInput;
}
export declare class NodesCommentCreateRequest extends SpeakeasyBase {
    requestBody: NodesCommentCreateCommentInput;
    /**
     * The unique identifier of the node you want to comment on.
     */
    nodeId: string;
}
export declare class NodesCommentCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

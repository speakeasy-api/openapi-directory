import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubmitCommentPathParams extends SpeakeasyBase {
    activityId: number;
    projectId: number;
}
export declare class SubmitCommentRequestBody extends SpeakeasyBase {
    comment: string;
}
export declare class SubmitCommentRequest extends SpeakeasyBase {
    pathParams: SubmitCommentPathParams;
    request?: SubmitCommentRequestBody;
}
export declare class SubmitCommentResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

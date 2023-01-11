import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActivityCommentsPathParams extends SpeakeasyBase {
    activityId: number;
    projectId: number;
}
export declare class GetActivityCommentsRequest extends SpeakeasyBase {
    pathParams: GetActivityCommentsPathParams;
}
export declare class GetActivityCommentsResponse extends SpeakeasyBase {
    commentList?: shared.CommentList;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

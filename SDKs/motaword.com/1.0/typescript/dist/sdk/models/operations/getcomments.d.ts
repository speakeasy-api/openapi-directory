import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetCommentsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetCommentsRequest extends SpeakeasyBase {
    pathParams: GetCommentsPathParams;
    queryParams: GetCommentsQueryParams;
}
export declare class GetCommentsResponse extends SpeakeasyBase {
    commentList?: shared.CommentList;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

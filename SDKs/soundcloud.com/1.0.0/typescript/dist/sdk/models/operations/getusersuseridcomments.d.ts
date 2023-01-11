import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdCommentsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdCommentsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetUsersUserIdCommentsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdCommentsRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdCommentsPathParams;
    queryParams: GetUsersUserIdCommentsQueryParams;
    security: GetUsersUserIdCommentsSecurity;
}
export declare class GetUsersUserIdCommentsResponse extends SpeakeasyBase {
    commentsList?: shared.Comment[];
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMeFollowingsUserIdPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class DeleteMeFollowingsUserIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class DeleteMeFollowingsUserIdRequest extends SpeakeasyBase {
    pathParams: DeleteMeFollowingsUserIdPathParams;
    security: DeleteMeFollowingsUserIdSecurity;
}
export declare class DeleteMeFollowingsUserIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

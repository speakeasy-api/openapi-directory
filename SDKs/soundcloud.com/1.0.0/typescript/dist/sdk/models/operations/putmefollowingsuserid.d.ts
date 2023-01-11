import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMeFollowingsUserIdPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class PutMeFollowingsUserIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class PutMeFollowingsUserIdRequest extends SpeakeasyBase {
    pathParams: PutMeFollowingsUserIdPathParams;
    security: PutMeFollowingsUserIdSecurity;
}
export declare class PutMeFollowingsUserIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    user?: shared.User;
}

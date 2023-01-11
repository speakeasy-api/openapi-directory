import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdWebProfilesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdWebProfilesQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetUsersUserIdWebProfilesSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersUserIdWebProfilesRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdWebProfilesPathParams;
    queryParams: GetUsersUserIdWebProfilesQueryParams;
    security: GetUsersUserIdWebProfilesSecurity;
}
export declare class GetUsersUserIdWebProfilesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    webProfiles?: shared.WebProfiles[];
}

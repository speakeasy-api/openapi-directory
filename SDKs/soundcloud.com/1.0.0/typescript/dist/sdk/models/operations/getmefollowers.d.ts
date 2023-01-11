import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeFollowersQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetMeFollowersSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeFollowersRequest extends SpeakeasyBase {
    queryParams: GetMeFollowersQueryParams;
    security: GetMeFollowersSecurity;
}
export declare class GetMeFollowersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getMeFollowers200ApplicationJSONOneOf?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeFollowingsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetMeFollowingsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeFollowingsRequest extends SpeakeasyBase {
    queryParams: GetMeFollowingsQueryParams;
    security: GetMeFollowingsSecurity;
}
export declare class GetMeFollowingsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getMeFollowings200ApplicationJSONOneOf?: any;
}

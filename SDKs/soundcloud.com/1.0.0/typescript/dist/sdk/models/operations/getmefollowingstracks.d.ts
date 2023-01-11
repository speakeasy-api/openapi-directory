import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeFollowingsTracksQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
    offset?: number;
}
export declare class GetMeFollowingsTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeFollowingsTracksRequest extends SpeakeasyBase {
    queryParams: GetMeFollowingsTracksQueryParams;
    security: GetMeFollowingsTracksSecurity;
}
export declare class GetMeFollowingsTracksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    tracksList?: shared.Track[];
}

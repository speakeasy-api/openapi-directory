import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeLikesTracksQueryParams extends SpeakeasyBase {
    limit?: number;
    linkedPartitioning?: boolean;
}
export declare class GetMeLikesTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeLikesTracksRequest extends SpeakeasyBase {
    queryParams: GetMeLikesTracksQueryParams;
    security: GetMeLikesTracksSecurity;
}
export declare class GetMeLikesTracksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getMeLikesTracks200ApplicationJSONOneOf?: any;
}

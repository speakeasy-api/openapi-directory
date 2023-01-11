import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeTracksQueryParams extends SpeakeasyBase {
    limit?: number;
    linkedPartitioning?: boolean;
}
export declare class GetMeTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeTracksRequest extends SpeakeasyBase {
    queryParams: GetMeTracksQueryParams;
    security: GetMeTracksSecurity;
}
export declare class GetMeTracksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getMeTracks200ApplicationJSONOneOf?: any;
}

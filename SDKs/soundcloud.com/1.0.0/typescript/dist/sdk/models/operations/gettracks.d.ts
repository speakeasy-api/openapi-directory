import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTracksQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    bpm?: shared.Bpm;
    createdAt?: shared.CreatedAt;
    duration?: shared.Duration;
    genres?: string;
    ids?: string;
    limit?: number;
    linkedPartitioning?: boolean;
    offset?: number;
    q: string;
    tags?: string;
}
export declare class GetTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetTracksRequest extends SpeakeasyBase {
    queryParams: GetTracksQueryParams;
    security: GetTracksSecurity;
}
export declare class GetTracksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getTracks200ApplicationJSONOneOf?: any;
}

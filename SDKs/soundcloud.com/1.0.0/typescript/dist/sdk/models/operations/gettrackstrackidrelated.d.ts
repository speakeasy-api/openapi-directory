import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTracksTrackIdRelatedPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class GetTracksTrackIdRelatedQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
    linkedPartitioning?: boolean;
    offset?: number;
}
export declare class GetTracksTrackIdRelatedSecurity extends SpeakeasyBase {
    clientId: shared.SchemeClientId;
}
export declare class GetTracksTrackIdRelatedRequest extends SpeakeasyBase {
    pathParams: GetTracksTrackIdRelatedPathParams;
    queryParams: GetTracksTrackIdRelatedQueryParams;
    security: GetTracksTrackIdRelatedSecurity;
}
export declare class GetTracksTrackIdRelatedResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getTracksTrackIdRelated200ApplicationJSONOneOf?: any;
}

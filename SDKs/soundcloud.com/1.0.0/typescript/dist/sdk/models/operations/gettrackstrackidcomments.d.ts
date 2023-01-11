import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTracksTrackIdCommentsPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class GetTracksTrackIdCommentsQueryParams extends SpeakeasyBase {
    limit?: number;
    linkedPartitioning?: boolean;
    offset?: number;
}
export declare class GetTracksTrackIdCommentsSecurity extends SpeakeasyBase {
    clientId: shared.SchemeClientId;
}
export declare class GetTracksTrackIdCommentsRequest extends SpeakeasyBase {
    pathParams: GetTracksTrackIdCommentsPathParams;
    queryParams: GetTracksTrackIdCommentsQueryParams;
    security: GetTracksTrackIdCommentsSecurity;
}
export declare class GetTracksTrackIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getTracksTrackIdComments200ApplicationJSONOneOf?: any;
}

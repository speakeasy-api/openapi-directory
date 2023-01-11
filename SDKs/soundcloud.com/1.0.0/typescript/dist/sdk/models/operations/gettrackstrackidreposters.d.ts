import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTracksTrackIdRepostersPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class GetTracksTrackIdRepostersQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetTracksTrackIdRepostersSecurity extends SpeakeasyBase {
    clientId: shared.SchemeClientId;
}
export declare class GetTracksTrackIdRepostersRequest extends SpeakeasyBase {
    pathParams: GetTracksTrackIdRepostersPathParams;
    queryParams: GetTracksTrackIdRepostersQueryParams;
    security: GetTracksTrackIdRepostersSecurity;
}
export declare class GetTracksTrackIdRepostersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    metaUsers?: shared.MetaUsers;
    statusCode: number;
}

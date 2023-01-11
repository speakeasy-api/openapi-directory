import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTracksTrackIdFavoritersPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class GetTracksTrackIdFavoritersQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetTracksTrackIdFavoritersSecurity extends SpeakeasyBase {
    clientId: shared.SchemeClientId;
}
export declare class GetTracksTrackIdFavoritersRequest extends SpeakeasyBase {
    pathParams: GetTracksTrackIdFavoritersPathParams;
    queryParams: GetTracksTrackIdFavoritersQueryParams;
    security: GetTracksTrackIdFavoritersSecurity;
}
export declare class GetTracksTrackIdFavoritersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    usersList?: shared.UsersList[];
}

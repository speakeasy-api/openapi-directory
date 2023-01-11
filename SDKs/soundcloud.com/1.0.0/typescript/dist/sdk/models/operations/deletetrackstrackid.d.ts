import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTracksTrackIdPathParams extends SpeakeasyBase {
    trackId: number;
}
export declare class DeleteTracksTrackIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class DeleteTracksTrackIdRequest extends SpeakeasyBase {
    pathParams: DeleteTracksTrackIdPathParams;
    security: DeleteTracksTrackIdSecurity;
}
export declare class DeleteTracksTrackIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

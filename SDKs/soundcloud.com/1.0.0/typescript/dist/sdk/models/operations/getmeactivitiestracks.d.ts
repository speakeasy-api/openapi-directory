import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeActivitiesTracksQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
}
export declare class GetMeActivitiesTracksSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeActivitiesTracksRequest extends SpeakeasyBase {
    queryParams: GetMeActivitiesTracksQueryParams;
    security: GetMeActivitiesTracksSecurity;
}
export declare class GetMeActivitiesTracksResponse extends SpeakeasyBase {
    activities?: shared.Activities;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

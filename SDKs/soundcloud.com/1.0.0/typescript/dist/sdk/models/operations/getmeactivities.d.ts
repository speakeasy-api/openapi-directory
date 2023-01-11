import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeActivitiesQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
}
export declare class GetMeActivitiesSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeActivitiesRequest extends SpeakeasyBase {
    queryParams: GetMeActivitiesQueryParams;
    security: GetMeActivitiesSecurity;
}
export declare class GetMeActivitiesResponse extends SpeakeasyBase {
    activities?: shared.Activities;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

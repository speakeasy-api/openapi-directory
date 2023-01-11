import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeActivitiesAllOwnQueryParams extends SpeakeasyBase {
    access?: shared.AccessEnum[];
    limit?: number;
}
export declare class GetMeActivitiesAllOwnSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeActivitiesAllOwnRequest extends SpeakeasyBase {
    queryParams: GetMeActivitiesAllOwnQueryParams;
    security: GetMeActivitiesAllOwnSecurity;
}
export declare class GetMeActivitiesAllOwnResponse extends SpeakeasyBase {
    activities?: shared.Activities;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActivitiesPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetActivitiesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetActivitiesRequest extends SpeakeasyBase {
    pathParams: GetActivitiesPathParams;
    queryParams: GetActivitiesQueryParams;
}
export declare class GetActivitiesResponse extends SpeakeasyBase {
    activityList?: shared.ActivityList;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}

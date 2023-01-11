import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkloadmanagerProjectsLocationsEvaluationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WorkloadmanagerProjectsLocationsEvaluationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WorkloadmanagerProjectsLocationsEvaluationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkloadmanagerProjectsLocationsEvaluationsListRequest extends SpeakeasyBase {
    pathParams: WorkloadmanagerProjectsLocationsEvaluationsListPathParams;
    queryParams: WorkloadmanagerProjectsLocationsEvaluationsListQueryParams;
    security: WorkloadmanagerProjectsLocationsEvaluationsListSecurity;
}
export declare class WorkloadmanagerProjectsLocationsEvaluationsListResponse extends SpeakeasyBase {
    contentType: string;
    listEvaluationsResponse?: shared.ListEvaluationsResponse;
    statusCode: number;
}

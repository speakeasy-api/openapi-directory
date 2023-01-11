import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkloadmanagerProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkloadmanagerProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WorkloadmanagerProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkloadmanagerProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: WorkloadmanagerProjectsLocationsOperationsListPathParams;
    queryParams: WorkloadmanagerProjectsLocationsOperationsListQueryParams;
    security: WorkloadmanagerProjectsLocationsOperationsListSecurity;
}
export declare class WorkloadmanagerProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}

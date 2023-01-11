import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkloadmanagerProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkloadmanagerProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class WorkloadmanagerProjectsLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkloadmanagerProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: WorkloadmanagerProjectsLocationsListPathParams;
    queryParams: WorkloadmanagerProjectsLocationsListQueryParams;
    security: WorkloadmanagerProjectsLocationsListSecurity;
}
export declare class WorkloadmanagerProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}

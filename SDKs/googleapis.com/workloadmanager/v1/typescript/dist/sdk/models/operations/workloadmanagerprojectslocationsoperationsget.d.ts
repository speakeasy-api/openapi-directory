import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkloadmanagerProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkloadmanagerProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WorkloadmanagerProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkloadmanagerProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: WorkloadmanagerProjectsLocationsOperationsGetPathParams;
    queryParams: WorkloadmanagerProjectsLocationsOperationsGetQueryParams;
    security: WorkloadmanagerProjectsLocationsOperationsGetSecurity;
}
export declare class WorkloadmanagerProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

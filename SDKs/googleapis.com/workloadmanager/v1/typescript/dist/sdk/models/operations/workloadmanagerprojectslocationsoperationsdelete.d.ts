import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkloadmanagerProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkloadmanagerProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class WorkloadmanagerProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkloadmanagerProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: WorkloadmanagerProjectsLocationsOperationsDeletePathParams;
    queryParams: WorkloadmanagerProjectsLocationsOperationsDeleteQueryParams;
    security: WorkloadmanagerProjectsLocationsOperationsDeleteSecurity;
}
export declare class WorkloadmanagerProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    statusCode: number;
}

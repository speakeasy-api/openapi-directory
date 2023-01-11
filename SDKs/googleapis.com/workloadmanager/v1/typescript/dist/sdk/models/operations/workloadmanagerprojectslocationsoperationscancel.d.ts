import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkloadmanagerProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WorkloadmanagerProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class WorkloadmanagerProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkloadmanagerProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: WorkloadmanagerProjectsLocationsOperationsCancelPathParams;
    queryParams: WorkloadmanagerProjectsLocationsOperationsCancelQueryParams;
    request?: Record<string, any>;
    security: WorkloadmanagerProjectsLocationsOperationsCancelSecurity;
}
export declare class WorkloadmanagerProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    statusCode: number;
}

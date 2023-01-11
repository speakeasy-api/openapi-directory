import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    evaluationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WorkloadmanagerProjectsLocationsEvaluationsCreateRequest extends SpeakeasyBase {
    pathParams: WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams;
    queryParams: WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams;
    request?: shared.EvaluationInput;
    security: WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity;
}
export declare class WorkloadmanagerProjectsLocationsEvaluationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

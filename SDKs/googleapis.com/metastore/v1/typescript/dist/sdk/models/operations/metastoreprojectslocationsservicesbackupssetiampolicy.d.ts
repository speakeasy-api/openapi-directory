import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesBackupsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MetastoreProjectsLocationsServicesBackupsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesBackupsSetIamPolicyPathParams;
    queryParams: MetastoreProjectsLocationsServicesBackupsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity;
}
export declare class MetastoreProjectsLocationsServicesBackupsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}

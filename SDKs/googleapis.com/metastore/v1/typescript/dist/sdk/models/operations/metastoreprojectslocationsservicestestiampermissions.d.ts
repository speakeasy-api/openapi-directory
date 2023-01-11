import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class MetastoreProjectsLocationsServicesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesTestIamPermissionsPathParams;
    queryParams: MetastoreProjectsLocationsServicesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: MetastoreProjectsLocationsServicesTestIamPermissionsSecurity;
}
export declare class MetastoreProjectsLocationsServicesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}

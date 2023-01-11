import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsQueryParams extends SpeakeasyBase {
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
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsPathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsQueryParams;
    request?: shared.GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest;
    security: AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudAssuredworkloadsV1Workload?: shared.GoogleCloudAssuredworkloadsV1Workload;
    statusCode: number;
}

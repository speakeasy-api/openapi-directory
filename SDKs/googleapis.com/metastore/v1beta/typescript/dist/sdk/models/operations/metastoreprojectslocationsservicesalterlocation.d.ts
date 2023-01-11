import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesAlterLocationPathParams extends SpeakeasyBase {
    service: string;
}
export declare class MetastoreProjectsLocationsServicesAlterLocationQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesAlterLocationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesAlterLocationRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesAlterLocationPathParams;
    queryParams: MetastoreProjectsLocationsServicesAlterLocationQueryParams;
    request?: shared.AlterMetadataResourceLocationRequest;
    security: MetastoreProjectsLocationsServicesAlterLocationSecurity;
}
export declare class MetastoreProjectsLocationsServicesAlterLocationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

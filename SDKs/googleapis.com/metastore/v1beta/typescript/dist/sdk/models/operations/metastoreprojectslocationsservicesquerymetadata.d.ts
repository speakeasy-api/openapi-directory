import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesQueryMetadataPathParams extends SpeakeasyBase {
    service: string;
}
export declare class MetastoreProjectsLocationsServicesQueryMetadataQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesQueryMetadataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesQueryMetadataRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesQueryMetadataPathParams;
    queryParams: MetastoreProjectsLocationsServicesQueryMetadataQueryParams;
    request?: shared.QueryMetadataRequest;
    security: MetastoreProjectsLocationsServicesQueryMetadataSecurity;
}
export declare class MetastoreProjectsLocationsServicesQueryMetadataResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

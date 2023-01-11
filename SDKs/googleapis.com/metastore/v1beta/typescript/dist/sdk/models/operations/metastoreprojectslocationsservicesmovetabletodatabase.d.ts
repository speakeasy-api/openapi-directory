import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesMoveTableToDatabasePathParams extends SpeakeasyBase {
    service: string;
}
export declare class MetastoreProjectsLocationsServicesMoveTableToDatabaseQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesMoveTableToDatabasePathParams;
    queryParams: MetastoreProjectsLocationsServicesMoveTableToDatabaseQueryParams;
    request?: shared.MoveTableToDatabaseRequest;
    security: MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity;
}
export declare class MetastoreProjectsLocationsServicesMoveTableToDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

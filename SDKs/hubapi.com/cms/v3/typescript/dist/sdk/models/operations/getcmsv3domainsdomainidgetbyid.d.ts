import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCmsV3DomainsDomainIdGetByIdPathParams extends SpeakeasyBase {
    domainId: string;
}
export declare class GetCmsV3DomainsDomainIdGetByIdSecurity extends SpeakeasyBase {
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2?: shared.SchemeOauth2;
    privateApps?: shared.SchemePrivateApps;
    hapikey?: shared.SchemeHapikey;
    privateApps1?: shared.SchemePrivateApps;
    oauth3?: shared.SchemeOauth2;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetCmsV3DomainsDomainIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetCmsV3DomainsDomainIdGetByIdPathParams;
    security: GetCmsV3DomainsDomainIdGetByIdSecurity;
}
export declare class GetCmsV3DomainsDomainIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
}

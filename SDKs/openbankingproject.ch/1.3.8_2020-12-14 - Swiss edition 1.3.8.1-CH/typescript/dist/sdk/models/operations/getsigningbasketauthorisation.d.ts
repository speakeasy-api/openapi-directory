import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSigningBasketAuthorisationPathParams extends SpeakeasyBase {
    basketId: string;
}
export declare class GetSigningBasketAuthorisationHeaders extends SpeakeasyBase {
    digest?: string;
    psuAccept?: string;
    psuAcceptCharset?: string;
    psuAcceptEncoding?: string;
    psuAcceptLanguage?: string;
    psuDeviceID?: string;
    psuGeoLocation?: string;
    psuHttpMethod?: shared.PsuHttpMethodEnum;
    psuIPAddress?: string;
    psuIPPort?: string;
    psuUserAgent?: string;
    signature?: string;
    tppSignatureCertificate?: string;
    xRequestID: string;
}
export declare class GetSigningBasketAuthorisationSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class GetSigningBasketAuthorisationRequest extends SpeakeasyBase {
    pathParams: GetSigningBasketAuthorisationPathParams;
    headers: GetSigningBasketAuthorisationHeaders;
    security: GetSigningBasketAuthorisationSecurity;
}
export declare class GetSigningBasketAuthorisationResponse extends SpeakeasyBase {
    contentType: string;
    error400NGSBS?: shared.Error400NgSbs;
    error400SBS?: shared.Error400Sbs;
    error401NGSBS?: shared.Error401NgSbs;
    error401SBS?: shared.Error401Sbs;
    error403NGSBS?: shared.Error403NgSbs;
    error403SBS?: shared.Error403Sbs;
    error404NGSBS?: shared.Error404NgSbs;
    error404SBS?: shared.Error404Sbs;
    error405NGSBS?: shared.Error405NgSbs;
    error405SBS?: shared.Error405Sbs;
    error409NGSBS?: shared.Error409NgSbs;
    error409SBS?: shared.Error409Sbs;
    headers: Record<string, string[]>;
    statusCode: number;
    authorisations?: shared.Authorisations;
}
